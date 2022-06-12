import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

// Common Layout
import Demo from './demo/Demo';

import Admin from './pages/Admin';
import Adminemail from './pages/Adminemail';
import Adminchat from './pages/Adminchat';
import Adminproductlist from './pages/Adminproductlist';
import Adminproductgrid from './pages/Adminproductgrid';
import Adminproductadd from './pages/Adminproductadd';
import Admincustomer from './pages/Admincustomer';
import Admincustomerview from './pages/Admincustomerview';
import Adminorder from './pages/Adminorder';
import Adminorderview from './pages/Adminorderview';

import Adminvenderlist from './pages/Adminvenderlist';
import Adminvenderview from './pages/Adminvenderview';
import Adminreview from './pages/Adminreview';

import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Coming from './pages/Coming';
import Notfound from './pages/Notfound';
import Blog from './pages/Blog';
import BlogSidebar from './pages/BlogSidebar';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';
import Contacttwo from './pages/Contacttwo';
import About from './pages/About';
import Service from './pages/Service';
import Price from './pages/Price';
import Shopone from './pages/Shopone';
import Shoptwo from './pages/Shoptwo';
import Shopthree from './pages/Shopthree';
import Productone from './pages/Productone';
import Producttwo from './pages/Producttwo';
import Productthree from './pages/Productthree';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import Coursesgridone from './pages/Coursesgridone';
import Coursesgridtwo from './pages/Coursesgridtwo';
import Coursesgridthree from './pages/Coursesgridthree';
import Popupchat from './pages/Popupchat';

import Userprofile from './pages/Userprofile';
import Authorprofile from './pages/Authorprofile';
import Coursedetails from './pages/Coursedetails';
import Coursedetailstwo from './pages/Coursedetailstwo';

import Default from './pages/Default';
import Defaultcategory from './pages/Defaultcategory';
import Defaultfollower from './pages/Defaultfollower';
import Defaultsettings from './pages/Defaultsettings';
import Defaultsearch from './pages/Defaultsearch';
import Defaultchannel from './pages/Defaultchannel';
import Defaultlive from './pages/Defaultlive';
import Defaultcourseone from './pages/Defaultcourseone';
import Defaultcoursetwo from './pages/Defaultcoursetwo';
import Defaultuserprofile from './pages/Defaultuserprofile';
import Defaultauthorprofile from './pages/Defaultauthorprofile';
import Defaultanalytics from './pages/Defaultanalytics';

import Accountinfo from './pages/Accountinfo';
import Contactinfo from './pages/Contactinfo';
import Social from './pages/Social';
import Password from './pages/Password';
import Payment from './pages/Payment';
import Chat from './pages/Chat';
import Email from './pages/Email';
import Emailopen from './pages/Emailopen';

import Hometwo from './pages/Hometwo';
import Homethree from './pages/Homethree';
import Homefive from './pages/Homefive';
import Homesix from './pages/Homesix';
import Homefour from './pages/Homefour';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component {
  render() {
    return (
            <BrowserRouter>
                <Demo />
            </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();
