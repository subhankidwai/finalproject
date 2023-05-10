import React, { useState } from 'react';
import "./../Styles/CartItem.css";
import { useEffect, useContext} from 'react';
import UserContext from '../Context/UserContext';
import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CartItem = ({Item,index}) => {

  const [Qty,setQty] = useState(Item.quantity);
  const {user} = useContext(UserContext);


  useEffect(()=>{
    const Data = {
      userID:user.UserID,
      productID:Item._id,
      quantity:Qty,
      price:Item.price
    }
    console.log("Data of cartItem body",Data);
    axios.post("https://e-commersbackend.onrender.com/cart/addItem",{
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'JWT fefege...'
      },
      Data
    }).then((res)=>{
      console.log("res==>Qty",res);
      toast.success('Item Qty updated ');
      }).catch((error)=>{
        console.log(error);
        toast.error('failed to update Item Qty');
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[Qty]);


  const handleClikInc = () =>{
    console.log("user",user);
    console.log("Before setQty call prev Qty==>",Qty);
    setQty(Qty+1);
    console.log("Before qtyUpdate call updated Qty==>",Qty);
    // QtyUpdated();
  }

  const handleClikDec = () =>{
    console.log("user",user);
    console.log("Before setQty call prev Qty==>",Qty);
    if(Qty>1){
      setQty(Qty-1);
    }else{
      toast.warn('Item will be removed if Quntiry become zero');
      console.log("toastwatn");
    }
    console.log("Before qtyUpdate call updated Qty==>",Qty);
    // QtyUpdated();
  }

  return (
    <React.Fragment key={index}>
   
      <div className="imgContainer">
        <img className="ItemImg" src={Item.image} alt="Itemimg" />
      </div>
      <div className="itemTitile">{Item.title}</div>
      <h3 className="gridItem1">{Item.price}</h3>
      <div className="btnQty gridItem1">
        <button className="dec" onClick={handleClikDec}>-</button>
        <span className="ItemQty">{Qty}</span>
        <button className="inc" onClick={handleClikInc}>
          +
        </button>
      </div>
      <h3 className="gridItem1">{Item.price * Qty}</h3>

    </React.Fragment>
  );
}

export default CartItem