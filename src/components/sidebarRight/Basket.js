import { InsertComment } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useContextProvider } from "../../context/StateProvider";
import Item from './Item';


function Basket() {
    const [{ basket }, dispatch] = useContextProvider();

    const [totalPrice, setTotalPrice] = useState("");
    
    // calculate the total amounth whenever the basket changes!
    useEffect(() => {
        const total = basket?.reduce((totalAmount, item) => totalAmount + parseInt(item.price), 0)
        setTotalPrice(total);
    }, [basket])

    return (
        <div className="bg-gray-200 w-1/2 ">
           {basket?.map((item) => (
               <Item 
                productId={item.productId}
                price={item.price}
                category={item.category} 
                image={item.postImage} 
                />
           ))}
           <div>
                {totalPrice > 0 && ( <p>{`$ ${totalPrice} `}</p>
                )}
            </div>
        </div>
    )
}

 export default Basket
