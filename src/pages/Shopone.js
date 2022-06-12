import React, { Component, Fragment } from 'react';
import Upperheader from '../components/Upperheader';
import Header from '../components/Header';
import Footer from '../components/Footer';

const paymentList = [
  {
    icon: 'ti-shopping-cart ',
    title: '100% Secure Payments',
    des: '100% Payment Protection.',
  },
  {
    icon: 'ti-headphone-alt ',
    title: 'Support',
    des: 'Alway online feedback 24/7',
  },
  {
    icon: 'ti-lock ',
    title: 'Trust pay',
    des: 'Easy Return Policy.',
  },
  {
    icon: 'ti-reload ',
    title: 'Return and Refund',
    des: '100% money back guarantee',
  },
];

const productList = [
  {
    imageUrl: 'product.png',
    name: 'Textured Sleeveless Camisole',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Adjustable Shoulder Straps',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Neck Strappy Camisole',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Scoop-Neck Strappy',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Butler Stool Ladder',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Butler Stool Ladder',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Butler Stool Ladder',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Butler Stool Ladder',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Textured Sleeveless Camisole',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Adjustable Shoulder Straps',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Neck Strappy Camisole',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Scoop-Neck Strappy',
    price: '449',
  },
];

class Shopone extends Component {
  render() {
    return (
      <Fragment>
        <Upperheader />
        <Header />

        <div className="page-nav bg-lightblue pt-lg--7 pb-lg--7 pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-grey-800 fw-700 mont-font display4-size display4-md-size">
                  Shop
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-wrapper pt-lg--7 pt-5 pb-lg--7 pb-5">
          <div className="container mw-75">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="float-left font-xssss fw-700 text-grey-500 text-uppercase ls-3 mt-2 pt-1">
                      32 Product found
                    </h4>
                    <select className="searchCat float-right sort">
                      <option defaultValue="Default">Default Sorting</option>
                      <option defaultValue="151781441596 ">Fashion</option>
                      <option defaultValue="139119624252 ">- Men</option>
                      <option defaultValue="139118313532 ">- Women</option>
                      <option defaultValue="139360141372 ">Electronics</option>
                      <option defaultValue="152401903676 ">Home Garden</option>
                      <option defaultValue="138866720828 ">- Decor</option>
                      <option defaultValue="138866917436 ">- Lighting</option>
                    </select>
                  </div>

                  {productList.map((value, index) => (
                    <div className="col-lg-3 col-md-6" key={index}>
                      <div className="card w-100 border-0 mt-4">
                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-lg mb-2">
                          <a href="/shop-1">
                            <img
                              src={`assets/images/${value.imageUrl}`}
                              alt="product"
                              className="w-100 mt-0 mb-0 p-5"
                            />
                          </a>
                        </div>
                        <div className="card-body w-100 p-0 text-center">
                          <h2 className="mt-2 mb-1">
                            <a
                              href="single-product"
                              className="text-black fw-600 font-xsss lh-26"
                            >
                              {value.name}
                            </a>
                          </h2>
                          <h6 className="font-xsss fw-600 text-grey-500 ls-2">
                            {value.price}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-lg-12 mt-5 text-center">
                    <a
                      href="/shop-1"
                      className="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-lg mt-3 text-center d-inline-block p-2 bg-current w150"
                    >
                      Load More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-option pt-0 pb-4">
          <div className="container">
            <div className="row">
              {paymentList.map((value, index) => (
                <div className="col-lg-3 col-md-6 mb-3 text-left" key={index}>
                  <i
                    className={` text-grey-900 display1-size float-left mr-3 ${value.icon}`}
                  ></i>
                  <h4 className="mt-1 fw-600 text-grey-900 font-xsss mb-0">
                    {value.title}
                  </h4>
                  <p className="font-xssss fw-500 text-grey-500 lh-26 mt-0 mb-0">
                    {value.des}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer bgColor="bg-dark" />
      </Fragment>
    );
  }
}

export default Shopone;
