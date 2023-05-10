import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItem from './CartItem';
import "./../Styles/Cart.css";
import axios from 'axios';
import UserContext from '../Context/UserContext';
import {ToastContainer } from 'react-toastify';

// const navigate = useNavigate();
// { 
//     image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     title:"",
//     price:0,
//     quantity:1
// }


const Cart = () => {
    const [cartItems,setCartItems] = useState([]);
    const {user} = useContext(UserContext);

    useEffect(()=>{
        const Data = {
            userID: user.UserID,
            quantity:1
        };

        axios.post("https://e-commersbackend.onrender.com/cart",{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
            },
            Data
        })
        .then((res)=>{
            console.log("res==>",res.data.cartItems)
            setCartItems(res.data.cartItems);
            console.log("CartItems After cart req ==> ",cartItems);
        })
        .catch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
    <div className='MainCartContainer'>
        <header><FontAwesomeIcon icon="shopping-cart"/> My Cart</header>

        <div className="gridContainer">
            <div></div>
            <div className='gridItem1 Item1 Font'>Product</div>
            <div className='gridItem1 Font'>Unit Price</div>
            <div className='gridItem1 Font'>Qty</div>
            <div className='gridItem1 Font'>Total Price</div>
        
            {
                
                cartItems && cartItems.map((Item,index)=>
                    Item ? <CartItem Item={Item} index={index}/> : <></>
                )
            }
            <ToastContainer/>
        </div>
    </div>
  )
}

export default Cart