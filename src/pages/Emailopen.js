import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

class Emailopen extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />

            <div className="middle-sidebar-bottom theme-dark-bg">
              <div className="middle-sidebar-left">
                <div className="row">
                  <div className="col-lg-5 col-xl-4 col-xxl-3 col-md-6 border-right-light pl-4 pr-4">
                    <div className="chat-left scroll-bar">
                      <div className="card w-100 border-0 shadow-xss p-3 bg-white">
                        <Link
                          to="/email-box"
                          className="bg-primary-gradiant p-3 w-100 btn-block border-0 rounded-lg text-white text-center fw-500 font-xsss"
                        >
                          <i className="feather-edit mr-2"></i> Write Message
                        </Link>
                        <ul className="mt-3">
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-900 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <i className="feather-mail font-md btn-round-sm mr-2 p-0"></i>
                              Inbox
                              <span className="ml-auto font-xssss text-grey-500">
                                233
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <i className="feather-star font-md btn-round-sm mr-2 p-0"></i>
                              Starred
                              <span className="ml-auto font-xssss text-grey-500">
                                1235
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <i className="feather-send font-md btn-round-sm mr-2 p-0"></i>
                              Sent
                              <span className="ml-auto font-xssss text-grey-500">
                                54
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <i className="feather-file font-md btn-round-sm mr-2 p-0"></i>
                              Draft
                              <span className="ml-auto font-xssss text-grey-500">
                                66
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <i className="feather-alert-circle font-md btn-round-sm mr-2 p-0"></i>
                              Span
                              <span className="ml-auto font-xssss text-grey-500">
                                12
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <i className="feather-anchor font-md btn-round-sm mr-2 p-0"></i>
                              Work
                              <span className="ml-auto font-xssss text-grey-500">
                                12
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <i className="feather-trash-2 font-md btn-round-sm mr-2 p-0"></i>
                              Trash
                              <span className="ml-auto font-xssss text-grey-500">
                                34
                              </span>
                            </Link>
                          </li>
                        </ul>
                        <span className="fw-500 mt-3 font-xssss fw-700 text-uppercase ls-2 pl-3 text-grey-500">
                          Categories
                        </span>
                        <ul className="mt-3">
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <span className="btn-round-xss ml-2 bg-primary mr-3"></span>
                              Primary
                              <span className="ml-auto font-xssss text-grey-500">
                                233
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <span className="btn-round-xss ml-2 bg-danger mr-3"></span>
                              Social
                              <span className="ml-auto font-xssss text-grey-500">
                                1235
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <span className="btn-round-xss ml-2 bg-warning mr-3"></span>
                              Works
                              <span className="ml-auto font-xssss text-grey-500">
                                54
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-1">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <span className="btn-round-xss ml-2 bg-success mr-3"></span>
                              Promotions
                              <span className="ml-auto font-xssss text-grey-500">
                                66
                              </span>
                            </Link>
                          </li>
                          <li className="mt-1 mb-0">
                            <Link
                              to="/email-box"
                              className="bg-white theme-dark-bg text-dark p-2 w-100 border-0 rounded-lg text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                            >
                              <span className="btn-round-xss ml-2 bg-secondary mr-3"></span>
                              Friends
                              <span className="ml-auto font-xssss text-grey-500">
                                23
                              </span>
                            </Link>
                          </li>
                          <li className="mt-0 mb-0">
                            <Link
                              to="/email-box"
                              className="p-2 w-100 border-0 rounded-lg text-grey-500 text-left fw-600 font-xssss d-flex align-items-center"
                            >
                              Create New Label
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-xl-8 col-xxl-9 col-md-6 pl-0">
                    <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar">
                      <div className="chat-body p-4">
                        <div className="card dark-bg-transparent border-0 w-100 p-0 mb-3 shadow-none">
                          <div className="card-body p-0">
                            <h6 className="fw-600 text-grey-500 font-xssss">
                              Today, 16th September 2020, 11:45
                            </h6>
                            <h2 className="font-lg text-grey-900 fw-600">
                              Meeting World
                            </h2>
                          </div>
                        </div>
                        <Accordion
                          defaultActiveKey="2"
                          className="accordian mb-0"
                        >
                          <Accordion.Item
                            eventKey="0"
                            className="accordion-item border-0 mb-0 rounded-sm"
                          >
                            <Accordion.Header className="border-bottom py-2 mb-0">
                              <figure className="avatar mr-2 mb-0 w35 mt-0 pt-0">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="float-right shadow-sm rounded-circle w-100"
                                />
                              </figure>
                              <span className="font-xssss text-grey-700 pt-2 mt-0 pl-2 fw-700 mb-0 mr-auto text-dark">
                                Aenni Mirenda
                              </span>
                              <span className="font-xssss text-grey-500 pt-2 mt-1 pl-2 fw-600 mb-0 ml-auto">
                                14.09.2020 12:23
                              </span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="text-grey-600 mb-4 mt-4 font-xsss fw-500 text-dark">
                                Hi Aenni, <br /> <br /> All individual Framer
                                subscriptions have been grandfathered into a Pro
                                plan at your existing rate. If you were on a
                                Small Team plan, then all 5 seats have been
                                converted over to Pro seats at your existing
                                rate. <br />
                                <br /> Regards,
                                <br />
                                Jessica
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item
                            eventKey="1"
                            className="accordion-item border-0 mb-0 rounded-sm"
                          >
                            <Accordion.Header className="border-bottom py-2 mb-0">
                              <figure className="avatar mr-2 mb-0 w35 mt-0 pt-0">
                                <img
                                  src="assets/images/icon2.png"
                                  alt="icon"
                                  className="float-left shadow-none rounded-circle w-75 mt-1"
                                />
                              </figure>
                              <span className="font-xssss text-grey-700 pt-2 mt-0 pl-2 fw-700 mb-0 mr-auto text-dark">
                                Aenni Mirenda
                              </span>
                              <span className="font-xssss text-grey-500 pt-2 mt-1 pl-2 fw-600 mb-0 ml-auto">
                                14.09.2020 12:23
                              </span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="text-grey-600 mb-4 mt-4 font-xsss fw-500 text-dark">
                                Hi Aenni, <br /> <br /> All individual Framer
                                subscriptions have been grandfathered into a Pro
                                plan at your existing rate. If you were on a
                                Small Team plan, then all 5 seats have been
                                converted over to Pro seats at your existing
                                rate. <br />
                                <br /> Regards,
                                <br />
                                Jessica
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item
                            eventKey="2"
                            className="accordion-item border-0 mb-0 rounded-sm"
                          >
                            <Accordion.Header className="border-bottom py-2 mb-0">
                              <figure className="avatar mr-2 mb-0 w35 mt-0 pt-0">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="float-right shadow-sm rounded-circle w-100"
                                />
                              </figure>
                              <span className="font-xssss text-grey-700 pt-2 mt-0 pl-2 fw-700 mb-0 mr-auto text-dark">
                                Aenni Mirenda
                              </span>
                              <span className="font-xssss text-grey-500 pt-2 mt-1 pl-2 fw-600 mb-0 ml-auto">
                                14.09.2020 12:23
                              </span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="text-grey-600 mb-4 mt-4 font-xsss fw-500 text-dark">
                                Hi Aenni, <br /> <br /> All individual Framer
                                subscriptions have been grandfathered into a Pro
                                plan at your existing rate. If you were on a
                                Small Team plan, then all 5 seats have been
                                converted over to Pro seats at your existing
                                rate. <br />
                                <br /> Regards,
                                <br />
                                Jessica
                                <textarea
                                  className="form-control mb-5 p-3 h100 bg-greylight lh-16 mt-3"
                                  rows="5"
                                  placeholder="Write your message..."
                                ></textarea>
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                    <div
                      className="chat-bottom dark-bg p-3 border-top border-bottom"
                      style={{ Width: `98%` }}
                    >
                      <form className="chat-form d-block">
                        <button className="bg-dark border-0 btn-round-md float-left">
                          <i className="ti-microphone text-white lh-4 font-md"></i>
                        </button>
                        <button className="bg-dark border-0 btn-round-md ml-2 float-left">
                          <i className="ti-clip text-white lh-4 font-md"></i>
                        </button>
                        <button className="bg-dark border-0 btn-round-md ml-2 float-left">
                          <i className="ti-image text-white lh-4 font-md"></i>
                        </button>
                        <button className="bg-current border-0 p-0 float-right w200 text-white fw-600 font-xsss text-uppercase">
                          Send
                        </button>
                      </form>
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

export default Emailopen;
