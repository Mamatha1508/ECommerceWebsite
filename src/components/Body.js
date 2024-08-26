import React from "react";


import ShoppingCartCard from "./ShoppingCartCard.js";
import { ITEMLIST } from "../utils/itemList.js";

import { CLOTHESLIST } from "../utils/ClothesList.js";
import { WATCHESLIST } from "../utils/watchesList.js";
import { useState } from "react";


const Body=()=>{
    const [womenTShirts,setWomenTShirts]=useState([]);
    const [menTShirts,setMenTShirts]=useState([]);
    const [watches,setWatches]=useState([]);
    const [TShirts,setTShirts]=useState(ITEMLIST.catalogs);
    console.log('top women shirts',womenTShirts);
    console.log('top men shirts',menTShirts);
    console.log('all tshirs',TShirts);
    return (
        <div className='body'>
            <div className="itemCategory-container">
            <div>
                <input type="checkbox" onClick={(e)=>{
                    console.log(CLOTHESLIST);
                    if(e.target.checked==true)
                    {
                        const filteredWomenClothesList=CLOTHESLIST.filter(item=>{

                            return item.description.includes('Women');
                        })
                        console.log('filtered clothes',filteredWomenClothesList);
                        setWomenTShirts(filteredWomenClothesList) ;
                        console.log('women tshirts',womenTShirts);
                        setTShirts(filteredWomenClothesList && filteredWomenClothesList.concat(menTShirts).concat(watches) );
                        console.log('women t shirts concat',TShirts);
                    }
                    else
                    {
                        setWomenTShirts([]) ;
                        console.log('women tshirts',womenTShirts);
                     //   setTShirts(menTShirts.length> 0 ? menTShirts : menTShirts.concat(ITEMLIST.catalogs) );
                     setTShirts(TShirts.filter(item=>{
                        return !item.description.includes('Women');
                     }))
                        console.log('women t shirts concat',TShirts);
                    }
                    

                }}/>
                <label>Women T-Shirts</label>
            </div>
            <div>
                <input type="checkbox" onClick={(e)=>{
                    console.log(CLOTHESLIST);
                    console.log('event',e);
                    if(e.target.checked==true)
                    {const filteredMenClothesList=CLOTHESLIST.filter(item=>{

                        return item.description.includes('Men');
                    })
                    console.log('filtered clothes',filteredMenClothesList);
                   setMenTShirts(filteredMenClothesList)
                    console.log('men tisirts',menTShirts);
                   setTShirts(filteredMenClothesList && filteredMenClothesList.concat(womenTShirts) )
                    console.log('men t shirts concat',TShirts);}
                    else
                    {
                        setMenTShirts([])
                    console.log('men tisirts',menTShirts);
                   setTShirts( TShirts.filter(item=>{
                    return !item.description.includes('Men');
                   }))
                    console.log('men t shirts concat',TShirts);
                    }
                    
                }}/>
                <label>Men T-Shirts</label>
            </div>
            <div>
                <input type="checkbox" onClick={
                    (e)=> {
                        if(e.target.checked==true)
                        {
                            setWatches(watches);
                            setTShirts(WATCHESLIST.concat(TShirts));
                        }
                        else
                        {
                           let filteredItem= TShirts.filter(item=> !item.description.includes('Watch'))
                            setTShirts(filteredItem)
                        }

                    }
                }/>
                <label>Watches</label>
            </div>
            </div>
            
            <div className='shopping-container'>
                {
                  
                    TShirts.length==0 ? <div>Cart is empty</div> :TShirts.map(item=> {
                 return    <ShoppingCartCard itemImg={item.image} itemName={item.name} itemPrice={item.min_catalog_price} itemRating={item.catalog_reviews_summary.average_rating}/>
})
                }
            
            </div>
           
           
        </div>
    )
}

export default Body;