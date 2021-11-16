import React from 'react'
import { useContextProvider } from '../../context/StateProvider';

function Category({name, Icon}) {
    const [{selectedCategory}, dispatch] = useContextProvider();

    const clickHandler = () => {
     dispatch({
         type: "SELECTED_CATEGORY",
         payload: selectedCategory === name ? "" : name,
     }) 
    }

    const clickHandler = () 

    return (
        <div className="flex justify-between " onClick={clickHandler}>
        <div><Icon/></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    )
}

export default Category;
