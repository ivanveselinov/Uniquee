import React, { useRef, useState } from "react";
import { useContextProvider } from "../../context/StateProvider";
import { db, storage } from "../../firebase/firebase";  //import db
import firebase from "firebase"; //b import firebase from firease

function FeedInput() {
  const [{ user }, dispatch] = useContextProvider();
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const [category, setCategory] = useState("defaultCategory");
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);
  const [postImage, setPostImage] = useState();
  const removeImage = () => {
    setPostImage(null);
  };

 //Hangle image uploading !!
  const addImageToPost = (e) => { 
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setPostImage(readerEvent.target.result);
    };
  };

  //Hangle posting to db
  const submitHandler = (event) => {
    event.preventDefault();
    if(loading === true) return; //if someone click more times at once
    setLoading(true);

    if(category === "defaultCategory" || descriptionRef.current.value === "" || priceRef.current.value === "" ) return;
    // console.log(descriptionRef.current.value);
    // console.log(typeof(priceRef.current.value));
    // console.log(category);


    db.collection("products").add({ //create Table products
      user: user?.displayName, //USER OWNS IT!!
      userid: user.uid, 
      userPhoto: user.photoURL,
      description: descriptionRef.current.value,  //field 
      price: priceRef.current.value,
      category: category,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((doc) => {  //IMAGE!!
      if (postImage) {
        const uploadTask = storage
          .ref(`products/${doc.id}`)
          .putString(postImage, "data_url");

        removeImage();

        uploadTask.on(
          "state_change",
          null,
          (error) => console.log(error),
          () => {
            storage
              .ref("products")
              .child(doc.id)
              .getDownloadURL()
              .then((url) => {
                db.collection("products").doc(doc.id).set(
                  {
                    postImage: url,
                  },
                  { merge: true }
                );
              });
          }
        );
      }
    });;

    descriptionRef.current.value="";
    priceRef.current.value="";
    setCategory("defaultCategory"); 
    setLoading(false); //disable

  };
  return (
    <div className="mx-auto w-3/4  border-2 mt-10 p-3 rounded-lg">
      <form className="w-full " onSubmit={submitHandler}>
        <div className="flex space-x-2">
          <img
            className="w-8 h-8 rounded-full ring-1"
            src={user?.photoURL}
            alt=""
          />
          <div className="flex-grow">
            <input
              ref={descriptionRef}
              type="text"
              placeholder="Tell us about your product"
              className="rounded-full h-10 placeholder-gray-400 bg-gray-100 flex-grow w-full"
            />
            <button className="hidden" onClick={submitHandler}>
              Submit
            </button>
          </div> 
        </div>
      </form>
      <div className="flex justify-between w-full pt-3 border-t-2 mt-4 flex-col">
        <div className="inputBtn" onClick={() => fileRef.current.click()}>
          <p>Photo/Video</p>
          <input type="file" hidden ref={fileRef} onChange={addImageToPost} />
        </div>
        <div className="inputBtn">
          <input type="number" name="price" placeholder="Price $" ref={priceRef} />
        </div>
        <div className="inputBtn">
          <select value={category} onChange={(event) => setCategory(event.target.value)} >
            <option value="defaultCategory" selected>Choose Category</option>
            <option value="Painting">Painting</option>
            <option value="Clothes">Clothes</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div className="inputBtn" onClick={submitHandler}>
          <p>Send</p>
        </div>
      </div>
    </div>
  );
}

export default FeedInput;
