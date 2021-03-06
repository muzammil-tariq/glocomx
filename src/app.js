import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Demo from "./demo/Demo";

import Admin from "./pages/Admin";
import Adminemail from "./pages/Adminemail";
import Adminchat from "./pages/Adminchat";
import Adminproductlist from "./pages/Adminproductlist";
import Adminproductgrid from "./pages/Adminproductgrid";
import Adminproductadd from "./pages/Adminproductadd";
import Admincustomer from "./pages/Admincustomer";
import Admincustomerview from "./pages/Admincustomerview";
import Adminorder from "./pages/Adminorder";
import Adminorderview from "./pages/Adminorderview";

import Adminvenderlist from "./pages/Adminvenderlist";
import Adminvenderview from "./pages/Adminvenderview";
import Adminreview from "./pages/Adminreview";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Coming from "./pages/Coming";
import Notfound from "./pages/Notfound";
import Blog from "./pages/Blog";
import BlogSidebar from "./pages/BlogSidebar";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import Contacttwo from "./pages/Contacttwo";
import About from "./pages/About";
import Service from "./pages/Service";
import Price from "./pages/Price";
import Shopone from "./pages/Shopone";
import Shoptwo from "./pages/Shoptwo";
import Shopthree from "./pages/Shopthree";
import Productone from "./pages/Productone";
import Producttwo from "./pages/Producttwo";
import Productthree from "./pages/Productthree";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Coursesgridone from "./pages/Coursesgridone";
import Coursesgridtwo from "./pages/Coursesgridtwo";
import Coursesgridthree from "./pages/Coursesgridthree";
import Popupchat from "./pages/Popupchat";

import Userprofile from "./pages/Userprofile";
import Authorprofile from "./pages/Authorprofile";
import Coursedetails from "./pages/Coursedetails";
import Coursedetailstwo from "./pages/Coursedetailstwo";
import jwtDecode from "jwt-decode";

import Default from "./pages/Default";
import Defaultcategory from "./pages/Defaultcategory";
import Defaultfollower from "./pages/Defaultfollower";
import Defaultsettings from "./pages/Defaultsettings";
import Defaultadmin from "./pages/Defaultadmin";
import Defaultsearch from "./pages/Defaultsearch";
import Defaultchannel from "./pages/Defaultchannel";
import Defaultlive from "./pages/Defaultlive";
import Defaultcourseone from "./pages/Defaultcourseone";
import Defaultcoursetwo from "./pages/Defaultcoursetwo";
import Defaultuserprofile from "./pages/Defaultuserprofile";
import Defaultauthorprofile from "./pages/Defaultauthorprofile";
import Defaultanalytics from "./pages/Defaultanalytics";

import Accountinfo from "./pages/Accountinfo";
import Contactinfo from "./pages/Contactinfo";
import Social from "./pages/Social";
import Password from "./pages/Password";
import Payment from "./pages/Payment";
import Chat from "./pages/Chat";
import Email from "./pages/Email";
import Emailopen from "./pages/Emailopen";

import Hometwo from "./pages/Hometwo";
import Homethree from "./pages/Homethree";
import Homefive from "./pages/Homefive";
import Homesix from "./pages/Homesix";
import Homefour from "./pages/Homefour";
import ProtectedRoute from "./ProtectedRoute";
import { initUser } from "./redux/reducers/authReducer";
import { useAppDispatch } from "./redux/hooks/hooks";
import Loader from "./components/Loader";
import EmailConfirmation from "./pages/EmailConfirmationRoute";

const App = () => {
  const dispatch = useAppDispatch();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    dispatch(initUser(user));
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return <Loader />;
  }
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin`}
          render={() => (
            <>
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            </>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-email`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminemail />
              </ProtectedRoute>
            </>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-chat`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminchat />
              </ProtectedRoute>
            </>
          )}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-productlist`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminproductlist />
              </ProtectedRoute>
            </>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-productgrid`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminproductgrid />
              </ProtectedRoute>
            </>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-productadd`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminproductadd />
              </ProtectedRoute>
            </>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-customer`}
          render={() => (
            <>
              <ProtectedRoute>
                <Admincustomer />
              </ProtectedRoute>
            </>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-customerview`}
          render={() => (
            <>
              <ProtectedRoute>
                <Admincustomerview />
              </ProtectedRoute>
            </>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-order`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminorder />
              </ProtectedRoute>
            </>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-orderview`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminorderview />
              </ProtectedRoute>
            </>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-venderlist`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminvenderlist />
              </ProtectedRoute>
            </>
          )}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-venderview`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminvenderview />
              </ProtectedRoute>
            </>
          )}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/admin-review`}
          render={() => (
            <>
              <ProtectedRoute>
                <Adminreview />
              </ProtectedRoute>
            </>
          )}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/login`}
          component={Login}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/register`}
          component={Register}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/forgot`}
          component={Forgot}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/coming-soon`}
          component={Coming}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/notfound`}
          component={Notfound}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-sidebar`}
          component={BlogSidebar}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-single`}
          component={BlogSingle}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/contact`}
          component={Contact}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/contact-2`}
          component={Contacttwo}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/about`}
          component={About}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/service`}
          component={Service}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/price`}
          component={Price}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/shop-1`}
          component={Shopone}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/shop-2`}
          component={Shoptwo}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/shop-3`}
          component={Shopthree}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/single-product`}
          component={Productone}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/single-product-2`}
          component={Producttwo}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/single-product-3`}
          component={Productthree}
        />

        <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/checkout`}
          component={Checkout}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default`}
          component={Default}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-categories`}
          component={Defaultcategory}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-follower`}
          component={Defaultfollower}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-settings`}
          component={Defaultsettings}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-admin`}
          component={Defaultadmin}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-search`}
          component={Defaultsearch}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-live-stream`}
          component={Defaultlive}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-channel`}
          component={Defaultchannel}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-course-one`}
          component={Defaultcourseone}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-course-two`}
          component={Defaultcoursetwo}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-user-profile`}
          component={Defaultuserprofile}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-analytics`}
          component={Defaultanalytics}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/default-author-profile`}
          component={Defaultauthorprofile}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/popup-chat`}
          component={Popupchat}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/account-information`}
          component={Accountinfo}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/contact-information`}
          component={Contactinfo}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/social`}
          component={Social}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/payment`}
          component={Payment}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/password`}
          component={Password}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/email-box`}
          component={Email}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/defaultemailopen`}
          component={Emailopen}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/message`}
          component={Chat}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/courses-grid-1`}
          component={Coursesgridone}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/courses-grid-2`}
          component={Coursesgridtwo}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/courses-grid-3`}
          component={Coursesgridthree}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/user-profile`}
          component={Userprofile}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/author-profile`}
          component={Authorprofile}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/course-details`}
          component={Coursedetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/course-details-2`}
          component={Coursedetailstwo}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/home-3`}
          component={Homethree}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/home-5`}
          component={Homefive}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/home-6`}
          component={Homesix}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/home-4`}
          component={Homefour}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/home-2`}
          component={Hometwo}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/confirm/email/:id`}
          render={() => (
            <>
              <EmailConfirmation />
            </>
          )}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/reset/password/:id`}
          render={() => (
            <>
              <EmailConfirmation />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
