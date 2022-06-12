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

class Checkout extends Component {
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
                  Checkout
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-wrapper pt-lg--7 pb-lg--7 pb-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="card bg-greyblue border-0 p-4 mb-5">
                  <p className="mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500">
                    <i className="fa fa-exclamation-circle"></i> Have A Coupon?{' '}
                    <a
                      className="expand-btn text-grey-500 fw-700"
                      href="#coupon_info"
                    >
                      Click Here To Enter Your Code.
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="page-title">
                  <h4 className="mont-font fw-600 font-md mb-5">
                    Billing address
                  </h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-500 font-xsss">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-500 font-xsss">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-500 font-xsss">
                            Email
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-500 font-xsss">
                            Phone
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-500 font-xsss">
                            Country
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-500 font-xsss">
                            Address
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-500 font-xsss">
                            Twon / City
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-gorup">
                          <label className="mont-font fw-500 font-xsss">
                            Postcode
                          </label>
                          <input
                            type="text"
                            name="comment-name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <div className="form-check text-left mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input mt-2"
                            id="exampleCheck1"
                          />
                          <label
                            className="pt--1 form-check-label fw-500 font-xss text-grey-900"
                            htmlFor="exampleCheck1"
                          >
                            Create an acount ?
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                  <h4 className="mont-font fw-600 font-md mb-5">
                    Shipping address
                  </h4>
                  <div className="form-check text-left mb-3 mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="exampleCheck1"
                    />
                    <label
                      className="pt--1 form-check-label fw-500 font-xss text-grey-900"
                      htmlFor="exampleCheck1"
                    >
                      Ship to a different address ?
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-5 offset-xl-1 col-lg-6">
                <div className="order-details">
                  <h4 className="mont-font fw-600 font-md mb-5">
                    Order Details
                  </h4>
                  <div className="table-content table-responsive mb-5 card border-0 bg-greyblue p-5">
                    <table className="table order-table order-table-2 mb-0">
                      <thead>
                        <tr>
                          <th className="border-0">Product</th>
                          <th className="text-right border-0">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="text-grey-500 fw-500 font-xsss">
                            Aliquam lobortis est
                            <strong>
                              <span>✕</span>1
                            </strong>
                          </th>
                          <td className="text-right text-grey-500 fw-500 font-xsss">
                            $80.00
                          </td>
                        </tr>
                        <tr>
                          <th className="text-grey-500 fw-500 font-xsss">
                            Auctor gravida enim
                            <strong>
                              <span>✕</span>1
                            </strong>
                          </th>
                          <td className="text-right text-grey-500 fw-500 font-xsss">
                            $60.00
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td className="text-right text-grey-900 font-xss fw-600">
                            $56.00
                          </td>
                        </tr>
                        <tr className="shipping">
                          <th>Shipping</th>
                          <td className="text-right">
                            <span className="text-grey-900 font-xss fw-600">
                              Flat Rate; $20.00
                            </span>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Order Total</th>
                          <td className="text-right text-grey-900 font-xss fw-600">
                            <span className="order-total-ammount">$56.00</span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="checkout-payment card border-0 mb-3 bg-greyblue p-5">
                    <form action="#" className="payment-form">
                      <div className="payment-group mb-4">
                        <div className="payment-radio">
                          <input
                            type="radio"
                            value="bank"
                            name="payment-method"
                            id="bank"
                            defaultChecked
                          />
                          <label
                            className="payment-label fw-600 text-grey-900 ml-2"
                            htmlFor="bank"
                          >
                            Direct Bank Transfer
                          </label>
                        </div>
                        <div className="payment-info" data-method="bank">
                          <p className="font-xsss text-grey-500 pl-4">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                      <div className="payment-group mb-4">
                        <div className="payment-radio">
                          <input
                            type="radio"
                            value="cheque"
                            name="payment-method"
                            id="cheque"
                          />
                          <label
                            className="payment-label fw-600 text-grey-900 ml-2"
                            htmlFor="cheque"
                          >
                            Cheque payments
                          </label>
                        </div>
                        <div
                          className="payment-info cheque hide-in-default"
                          data-method="cheque"
                        >
                          <p className="font-xsss text-grey-500 pl-4">
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </div>
                      <div className="payment-group mb-0">
                        <div className="payment-radio">
                          <input
                            type="radio"
                            value="cash"
                            name="payment-method"
                            id="cash"
                          />
                          <label
                            className="payment-label fw-600 text-grey-900 ml-2"
                            htmlFor="cash"
                          >
                            Cash on Delivary
                          </label>
                        </div>
                        <div
                          className="payment-info cash hide-in-default"
                          data-method="cash"
                        >
                          <p className="font-xsss text-grey-500 pl-4">
                            Pay with cash upon delivery.
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="clearfix"></div>

                  <div className="card shadow-none border-0">
                    <a
                      href="/checkout"
                      className="w-100 p-3 mt-3 font-xsss text-center text-white bg-current rounded-lg text-uppercase fw-600 ls-3"
                    >
                      Place Order
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

export default Checkout;
