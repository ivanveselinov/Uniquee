import React from "react";
import Feed from "./Feed";
import Avatar from "@mui/material/Avatar";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/firebase";

function Feeds() {
  const [realtimeProducts] = useCollection(
    db.collection("products").orderBy("timestamp", "desc").limit(10) // desc going down last one on top db is connected
    );

    useEffect(() =>
    dispatchEvent({
      type:"ADD_PRODUCTS",
      payload: myProducts,
    })
    ), [realtimeProducts]

  return (
    <div className=" w-full lg:w-3/4  m-auto rounded-xl">
      {realtimeProducts?.docs.map((product) => {
      myProducts.push({
        id: product.id,
        postTime: product.data().timestamp,
        ownerPhoto: product.data().userPhoto,
        category: product.data().category,
        description: product.data().description,
        price: product.data().price,
        postImage: product.data().postImage,
        productOwner: product.data().user,
      });
    });
    </div>
  );
}

export default Feeds;
