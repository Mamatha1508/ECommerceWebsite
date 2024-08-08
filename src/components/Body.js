import React from "react";


import ShoppingCartCard from "./ShoppingCartCard.js";
import { ITEMLIST } from "../utils/itemList.js";

import { CLOTHESLIST } from "../utils/ClothesList.js";
import { useState } from "react";


const Body=()=>{
    const [womenTShirts,setWomenTShirts]=useState(ITEMLIST.catalogs)
    return (
        <div className='body'>
            <div className="itemCategory-container">
            <div>
                <input type="checkbox" onClick={()=>{
                    console.log(CLOTHESLIST);
                    const filteredWomenClothesList=CLOTHESLIST.filter(item=>{

                        return item.description.includes('Women');
                    })
                    console.log('filtered clothes',filteredWomenClothesList);
                    setWomenTShirts(filteredWomenClothesList) ;


                }}/>
                <label>Women T-Shirts</label>
            </div>
            </div>
            <div className='shopping-container'>
                {
                    //console.log('women t shirts',womenTShirts);
                    womenTShirts.map(item=> {
                 return    <ShoppingCartCard itemImg={item.image} itemName={item.name} itemPrice={item.min_catalog_price} itemRating={item.catalog_reviews_summary.average_rating}/>
})
                }
            
            </div>
           
           
        </div>
    )
}

export default Body;