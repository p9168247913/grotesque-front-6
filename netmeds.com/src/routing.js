import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/Listing';
import Details from './component/Details/Details';
import viewOrders from './component/bookings/viewOrder';
import placeOrder from './component/bookings/placeOrder';
import login from './component/loginLogout/login';
import register from './component/loginLogout/register';

const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:typeId" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Route path="/viewBooking" component={viewOrders}/>
                <Route path="/placeOrder/:prodName" component={placeOrder}/>
                <Route path="/login" component={login}/>
                <Route path="/register" component={register}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router