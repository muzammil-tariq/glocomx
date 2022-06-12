import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import { Link } from 'react-router-dom';

class Defaultsettings extends Component {
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
                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                      <div className="row">
                        <div className="col-lg-12">
                          <h4 className="mb-4 font-lg fw-700 mont-font mb-5">
                            Settings
                          </h4>
                          <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
                            Genaral
                          </div>
                          <ul className="list-inline mb-4">
                            <li className="list-inline-item d-block border-bottom mr-0">
                              <Link
                                to="/account-information"
                                className="pt-2 pb-2 d-flex"
                              >
                                <i className="btn-round-md bg-primary-gradiant text-white feather-home font-md mr-3"></i>
                                <h4 className="fw-600 font-xssss mb-0 mt-3">
                                  Acount Information
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block border-bottom mr-0">
                              <Link
                                to="/contact-information"
                                className="pt-2 pb-2 d-flex"
                              >
                                <i className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md mr-3"></i>
                                <h4 className="fw-600 font-xssss mb-0 mt-3">
                                  Saved Address
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block mr-0">
                              <Link to="/social" className="pt-2 pb-2 d-flex">
                                <i className="btn-round-md bg-red-gradiant text-white feather-twitter font-md mr-3"></i>
                                <h4 className="fw-600 font-xssss mb-0 mt-3">
                                  Social Acount
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i>
                              </Link>
                            </li>
                          </ul>
                          <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
                            Acount
                          </div>
                          <ul className="list-inline mb-4">
                            <li className="list-inline-item d-block border-bottom mr-0">
                              <Link to="/payment" className="pt-2 pb-2 d-flex">
                                <i className="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md mr-3"></i>{' '}
                                <h4 className="fw-600 font-xssss mb-0 mt-3">
                                  My Cards
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block  mr-0">
                              <Link to="/password" className="pt-2 pb-2 d-flex">
                                <i className="btn-round-md bg-blue-gradiant text-white feather-inbox font-md mr-3"></i>{' '}
                                <h4 className="fw-600 font-xssss mb-0 mt-3">
                                  Password
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i>
                              </Link>
                            </li>
                          </ul>
                          <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
                            Other
                          </div>
                          <ul className="list-inline">
                            <li className="list-inline-item d-block border-bottom mr-0">
                              <Link
                                to="/default-settings"
                                className="pt-2 pb-2 d-flex"
                              >
                                <i className="btn-round-md bg-gold-gradiant text-white feather-bell font-md mr-3"></i>{' '}
                                <h4 className="fw-600 font-xssss mb-0 mt-3">
                                  Notification
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block border-bottom mr-0">
                              <Link
                                to="/default-settings"
                                className="pt-2 pb-2 d-flex"
                              >
                                <i className="btn-round-md bg-primary-gradiant text-white feather-help-circle font-md mr-3"></i>{' '}
                                <h4 className="fw-600 font-xssss mb-0 mt-3">
                                  Help
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block mr-0">
                              <Link
                                to="/default-settings"
                                className="pt-2 pb-2 d-flex"
                              >
                                <i className="btn-round-md bg-red-gradiant text-white feather-lock font-md mr-3"></i>{' '}
                                <h4 className="fw-600 font-xssss mb-0 mt-3">
                                  Logout
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i>
                              </Link>
                            </li>
                          </ul>
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

export default Defaultsettings;
