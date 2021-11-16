import React from 'react'
import { useContextProvider } from "../../context/StateProvider";




function Item({price, category, image, productId}) {
    const [{ basket }, dispatch] = useContextProvider();
    const removeHandler =() => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: productId, 
        })
    }
    return (
        <div className="w-full flex">
            <button className="text-red-400" onClick={removeHandler}>X</button>
            <div>
                {price}
            </div>
            <div>
                {category}
            </div>
            <div>
                <img src={image} alt="" className="h-8 w-8"/>
            </div>
        </div>
    )
}

export default Item
