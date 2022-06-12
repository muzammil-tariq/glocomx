import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import { Link } from 'react-router-dom';

class Payment extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />

            <div className="middle-sidebar-bottom bg-lightblue theme-dark-bg">
              <div className="middle-sidebar-left">
                <div className="middle-wrap">
                  <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                    <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
                      <Link
                        to="/defaultsettings"
                        className="d-inline-block mt-2"
                      >
                        <i className="ti-arrow-left font-sm text-white"></i>
                      </Link>
                      <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                        Payment Method
                      </h4>
                    </div>
                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="col-lg-12 pl-0">
                            <h4 className="mb-4 font-lg fw-700 mont-font mb-5">
                              Saved Card
                            </h4>
                          </div>
                          <div className="cleafrfix"></div>
                          <div className="card border-0 shadow-none mb-4 mt-3">
                            <div className="card-body d-block text-left p-0">
                              <div className="item w-100 h150 bg-white rounded-xxl overflow-hidden text-left shadow-md pl-3 pt-2 align-items-end flex-column d-flex">
                                <div className="card border-0 shadow-none p-0 bg-transparent-card text-left w-100">
                                  <div className="row">
                                    <div className="col-6">
                                      <img
                                        src="https://via.placeholder.com/50x50.png"
                                        alt="icon"
                                        className="w40 float-left d-inline-block rounded-lg"
                                      />
                                    </div>
                                    <div className="col-6 text-right pr-4">
                                      <img
                                        src="https://via.placeholder.com/50x50.png"
                                        alt="icon"
                                        className="w30 float-right d-inline-block mt-2 mr-2 rounded-lg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="card border-0 shadow-none p-0 bg-transparent-card text-left w-100 mt-auto">
                                  <h4 className="text-grey-900 font-sm fw-700 mont-font mb-3 text-dark-color">
                                    $ 5960.00
                                    <span className="d-block fw-500 text-grey-500 font-xssss mt-1 text-dark-color">
                                      Debit Card
                                    </span>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card border-0 shadow-none mb-4">
                            <div className="card-bod6 d-block text-left 2 fw-600-0">
                              <div className="item w-100 h150 bg-gold-gradiant rounded-xxl overflow-hidden text-left shadow-md pl-3 pt-2 align-items-end flex-column d-flex">
                                <div className="card bg-transparent border-0 bg-transparent-card shadow-none p-0 text-left w-100">
                                  <div className="row">
                                    <div className="col-6">
                                      <img
                                        src="https://via.placeholder.com/50x50.png"
                                        alt="icon"
                                        className="w40 float-left d-inline-block rounded-lg"
                                      />
                                    </div>
                                    <div className="col-6 text-right pr-4">
                                      <img
                                        src="https://via.placeholder.com/50x50.png"
                                        alt="icon"
                                        className="w30 float-right d-inline-block mt-2 mr-2 rounded-xxl rounded-lg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="card bg-transparent border-0 bg-transparent-card shadow-none p-0 text-left w-100 mt-auto">
                                  <h4 className="text-white font-sm fw-700 mont-font mb-3">
                                    $ 5960.00
                                    <span className="d-block fw-500 text-white font-xssss mt-1">
                                      Debit Card
                                    </span>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card border-0 mb-4 shadow-none">
                            <div className="card-body d-block text-left p-0">
                              <div className="item w-100 h150 bg-primary rounded-xxl text-left shadow-md pl-3 pt-2 align-items-end flex-column d-flex">
                                <div className="card bg-transparent border-0 bg-transparent-card shadow-none p-0 text-left w-100">
                                  <div className="row">
                                    <div className="col-6">
                                      <img
                                        src="https://via.placeholder.com/50x50.png"
                                        alt="icon"
                                        className="w40 float-left d-inline-block rounded-lg"
                                      />
                                    </div>
                                    <div className="col-6 text-right pr-4">
                                      <img
                                        src="https://via.placeholder.com/50x50.png"
                                        alt="icon"
                                        className="w30 float-right d-inline-block mt-2 mr-2 rounded-lg rounded-lg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="card bg-transparent border-0 bg-transparent-card shadow-none p-0 text-left w-100 mt-auto">
                                  <h4 className="text-white mb-3 font-sm fw-700 mont-font">
                                    $ 2260.00
                                    <span className="d-block fw-500 text-grey-300 font-xssss mt-1">
                                      Debit Card
                                    </span>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Link
                            to="/payment"
                            className="rounded-xxl border-dashed mb-2 p-3 w-100 fw-600 fw-700 text-center font-xssss mont-font text-uppercase ls-3 text-grey-900 d-block  text-dark"
                          >
                            Add Card
                          </Link>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                          <div className="rounded-xxl bg-greylight h-100 p-3">
                            <div className="col-lg-12 pl-0"></div>
                            <div className="col-lg-12">
                              <div className="item ms-auto mr-auto mt-3 w-100 h150 bg-white rounded-xxl text-left shadow-lg pl-3 pt-2 align-items-end flex-column d-flex">
                                <div className="card border-0 bg-transparent-card shadow-none p-0 text-left w-100">
                                  <div className="row">
                                    <div className="col-6 pl-2">
                                      <img
                                        src="https://via.placeholder.com/50x50.png"
                                        alt="icon"
                                        className="w40 float-left d-inline-block rounded-lg"
                                      />
                                    </div>
                                    <div className="col-6 text-right pr-4">
                                      <img
                                        src="https://via.placeholder.com/50x50.png"
                                        alt="icon"
                                        className="w30 float-right d-inline-block mt-2 mr-2 rounded-lg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="card border-0 bg-transparent-card shadow-none p-0 text-left w-100 mt-auto">
                                  <h4 className="text-grey-900 font-sm fw-700 mont-font text-dark-color">
                                    **** **** **** 2234
                                    <span className="d-block fw-500 text-grey-500 font-xssss mt-0 mb-3 text-dark-color">
                                      Credit Card
                                    </span>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 mt-5">
                              <form>
                                <div className="form-group mb-1">
                                  <label className="text-dark-color text-grey-600 font-xssss mb-2 fw-600">
                                    Card Number
                                  </label>
                                  <div className="form-group icon-tab">
                                    <input
                                      type="text"
                                      className="bg-white font-xsss border-0 rounded-lg form-control pl-4 bg-color-none border-bottom text-grey-900"
                                      placeholder="1234 1234 1234 1234"
                                    />
                                  </div>
                                </div>
                                <div className="form-group mb-1">
                                  <label className="text-dark-color text-grey-600 font-xssss mb-2 fw-600">
                                    Card Holder Name
                                  </label>
                                  <div className="form-group icon-tab">
                                    <input
                                      type="text"
                                      className="bg-white border-0 rounded-lg form-control pl-4 bg-color-none border-bottom text-grey-900"
                                      placeholder="Name"
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-6">
                                    <div className="form-group mb-1">
                                      <label className="text-dark-color text-grey-600 font-xssss mb-2 fw-600">
                                        Month
                                      </label>
                                      <div className="form-group icon-tab">
                                        <input
                                          type="text"
                                          className="bg-white border-0 rounded-lg form-control pl-4 bg-color-none border-bottom text-grey-900"
                                          placeholder="03"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="form-group mb-1">
                                      <label className="text-dark-color text-grey-600 font-xssss mb-2 fw-600">
                                        Year
                                      </label>
                                      <div className="form-group icon-tab">
                                        <input
                                          type="text"
                                          className="bg-white border-0 rounded-lg form-control pl-4 bg-color-none border-bottom text-grey-900"
                                          placeholder="2021"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <Link
                                      to="/payment"
                                      className="rounded-lg bg-current mb-2 mt-4 p-3 w-100 fw-600 fw-700 text-center font-xssss mont-font text-uppercase ls-3 text-white d-block"
                                    >
                                      Add Card
                                    </Link>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle-sidebar-right scroll-bar">
                <div className="middle-sidebar-right-content">
                  <Profile />
                  <Myclass />
                  <Subscribe />
                </div>
              </div>
            </div>
          </div>

          <Appfooter />
        </div>
      </Fragment>
    );
  }
}

export default Payment;
