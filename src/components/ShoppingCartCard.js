import React from "react";

const ShoppingCartCard=(props)=>{
  const {itemImg , itemName , itemPrice, itemRating}=props
    return (
        
      <div className='shopping-card'>
      <div>
          <img className='dress-logo' src={itemImg} />
       </div>
       <div className="dress-info">
          <h3>{itemName}</h3>
          <h3>Rs {itemPrice}</h3>
          <h5>{itemRating}</h5>
       </div>

      </div>

      
    )
}

export default ShoppingCartCard