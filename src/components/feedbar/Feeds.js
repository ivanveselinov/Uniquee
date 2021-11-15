import React from "react";
import Feed from "./Feed";
import Avatar from "@mui/material/Avatar";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/firebase";

function Feeds() {

  const [realtimeProducts] = useCollection(
    db.collection("products").orderBy("timestamp", "desc").limit(10)  // desc going down last one on top db is connected
  );

  return (
    <div className=" w-3/4  m-auto rounded-xl overflow-scroll">
 
      {realtimeProducts && realtimeProducts.docs.map(product => (  //show all feeds from db
        <Feed 
        
        postTime={product.data().timestamp}
        ownerPhoto={product.data().userPhoto}
        category={product.data().category}
        description={product.data().description}
        price={product.data().price}
        postImage={product.data().postImage}
        productOwner={product.data().user}

        />
      ))}
    

    </div>
  );
}

export default Feeds;
