import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../Auth/SignUp';
import Login from '../Auth/Login';
import Details from '../Compo/Details';
import Fashion from '../pages/Fashion';
import Jewelery from '../pages/Jewelery';
import Electronic from '../pages/Electronic';
import Profile from '../UserProfile/Profile';
import Order from '../UserProfile/Order';
import ShowCart from '../Cart/ShowCart';
import PersonalInfo from '../UserProfile/PersonalInfo';
import Store from '../pages/Store';

const RouteLinks = () => {


  return (
    <div>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/SignIn' element={<Login/>}/>
            <Route path='/products/:category/:id' element={<Details/>}/>
            <Route path='/fashion' element={<Fashion/>}/>
            <Route path='/jewelery' element={<Jewelery/>}/>
            <Route path='/electronics' element={<Electronic/>}/>
            <Route path='/user' element={<Profile/>}>
              <Route path='profile' element={<PersonalInfo/>}/>
              <Route path='orders' element={<Order/>}/>
              <Route path='giftcard' element={<Order/>}/>
            </Route>
            <Route path='/cart' element={<ShowCart/>}/>
            <Route path='/store' element={<Store/>}>
              
            </Route>
        </Routes>

    </div>
  )
}

export default RouteLinks