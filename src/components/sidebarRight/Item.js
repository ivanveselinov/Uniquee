import React from 'react'
import { useContextProvider } from "../../context/StateProvider";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


function Item({price, category, image, productId}) {
    const [{ basket }, dispatch] = useContextProvider();
    const removeHandler =() => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: productId, 
        })
    }
    return (
        <div className="w-full flex justify-between items-center " >
            <button className="text-red-400" onClick={removeHandler}>
                <HighlightOffIcon/>
                </button>
            <div>
                {price} <AttachMoneyIcon/>
            </div>
            <div >
                {category}
            </div>
            <div>
                <img src={image} alt="" className="h-10 w-10 border "/>
            </div>
        </div>
    )
}

export default Item
