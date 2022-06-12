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
    imageUrl: 'cart.png',
    name: 'Super skinny blazer',
    price: '$39.00',
  },
  {
    imageUrl: 'cart.png',
    name: 'Adjustable Shoulder Straps',
    price: '$49.00',
  },
  {
    imageUrl: 'cart.png',
    name: 'Neck Strappy Camisole',
    price: '$29.00',
  },
  {
    imageUrl: 'cart.png',
    name: 'Scoop-Neck Strappy',
    price: '$99.00',
  },
];

class Cart extends Component {
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
                  Cart
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-wrapper pt-lg--7 pt-5 pb-lg--7 pb-5">
          <div className="container mw-75">
            <div className="row">
              <div className="col-lg-8 mb-3">
                <div className="table-content table-responsive">
                  <table className="table text-center">
                    <thead className="bg-greyblue rounded-lg">
                      <tr>
                        <th className="border-0 p-4">&nbsp;</th>
                        <th className="border-0 p-4 text-left">Product</th>
                        <th className="border-0 p-4">Price</th>
                        <th className="border-0 p-4">Quantity</th>
                        <th className="border-0 p-4">Total</th>
                        <th className="border-0 p-4">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productList.map((value, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail text-left">
                            <img
                              src={`assets/images/${value.imageUrl}`}
                              alt="Thumnail"
                              className="w75 rounded-lg"
                            />
                          </td>
                          <td className="product-headline text-left wide-column">
                            <h3>
                              <a
                                href="/cart"
                                className="text-grey-900 fw-600 font-xsss"
                              >
                                {value.name}
                              </a>
                            </h3>
                          </td>
                          <td className="product-p">
                            <span className="product-price-wrapper">
                              <span className="money text-grey-500 fw-500">
                                {value.price}
                              </span>
                            </span>
                          </td>
                          <td className="product-quantity">
                            <div className="quantity">
                              <input
                                type="number"
                                className="quantity-input"
                                name="qty"
                                id="qty-1"
                                defaultValue="1"
                                min="1"
                              />
                              <div className="dec qtybutton">-</div>
                              <div className="inc qtybutton">+</div>
                            </div>
                          </td>
                          <td className="product-total-price">
                            <span className="product-price-wrapper">
                              <span className="money fmont">
                                <strong>{value.price}</strong>
                              </span>
                            </span>
                          </td>
                          <td className="product-remove text-right">
                            <a href="/cart">
                              <i className="ti-trash font-xs text-grey-500"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="coupon float-left mb-2">
                  <input
                    type="text"
                    className="input-code form-control h60 p-3"
                    placeholder="Coupon Code.."
                  />
                  <a
                    href="/cart"
                    className="bg-dark text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w175 p-3 text-center ls-3"
                  >
                    Apply Coupon
                  </a>
                </div>
                <a
                  href="/cart"
                  className="update-cart bg-dark float-right text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w175 p-3 text-center ls-3"
                >
                  Update Cart
                </a>
              </div>
              <div className="col-lg-4">
                <div className="checkout-payment card border-0 mb-3 bg-greyblue p-5">
                  <div className="cart-totals">
                    <h4 className="mont-font fw-600 font-lg mb-5">
                      Cart totals
                    </h4>
                    <div className="table-content table-responsive">
                      <table className="table order-table">
                        <tbody>
                          <tr>
                            <td className="fmont pt-2 fw-600">Subtotal</td>
                            <td className="fmont fw-600 pt-2 text-right">
                              $196.00
                            </td>
                          </tr>
                          <tr>
                            <td className="fmont pt-2 fw-600">Shipping</td>
                            <td className="fmont pt-2 fw-600 text-right">
                              <span>Flat rate: $20.00</span>
                            </td>
                          </tr>
                          <tr className="order-total">
                            <td className="fmont pt-2 fw-600">Total</td>
                            <td className="fmont pt-2 text-right">
                              <span className="product-price-wrapper">
                                <span className="money fmont fw-600">
                                  $226.00
                                </span>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <a
                  href="/cart"
                  className="bg-dark float-right text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w-100 p-3 text-center ls-3"
                >
                  Proceed To Checkout
                </a>
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

export default Cart;
