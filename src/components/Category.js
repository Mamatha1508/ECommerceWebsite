import React, { useState } from "react";
import { CLOTHESLIST } from "../utils/ClothesList";


const Category=()=>{

    const [womenTShirts,setWomenTShirts]=useState([])
    return (
        <div>
            <div>
                <input type="checkbox" onClick={()=>{
                    console.log(CLOTHESLIST);
                   setWomenTShirts CLOTHESLIST.filter

                }}/>
                <label>Women T-Shirts</label>
            </div>
        </div>
    )
}

export default Category;