import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import { Link } from 'react-router-dom';

const emailList = [
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: 'attach',
    time: '12:45 PM',
    read: 'bg-lightblue theme-light-bg',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: '',
    time: '12:45 PM',
    read: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: 'attach',
    time: '12:45 PM',
    read: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: '',
    time: '12:45 PM',
    read: 'bg-lightblue theme-light-bg',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: '',
    time: '12:45 PM',
    read: 'bg-lightblue theme-light-bg',
  },
  {
    imageUrl: 'user.png',
    name: 'David Goria',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: 'attach',
    time: '12:45 PM',
    read: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Seary Victor',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: 'attach',
    time: '12:45 PM',
    read: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Ana Seary',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: 'attach',
    time: '12:45 PM',
    read: 'bg-lightblue theme-light-bg',
  },
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: '',
    time: '12:45 PM',
    read: 'bg-lightblue theme-light-bg',
  },
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: '',
    time: '12:45 PM',
    read: 'bg-lightblue theme-light-bg',
  },
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: 'attach',
    time: '12:45 PM',
    read: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: 'attach',
    time: '12:45 PM',
    read: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale',
    email: 'support@gmail.com',
    status: 'bg-success',
    subject: 'Mobile App Design',
    des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
    attach: 'attach',
    time: '12:45 PM',
    read: 'bg-lightblue theme-light-bg',
  },
];

class Email extends Component {
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
                      <ul className="email-message">
                        {emailList.map((value, index) => (
                          <li key={index}>
                            <Link
                              to="/defaultemailopen"
                              className={`rounded-lg ${value.read}`}
                            >
                              <div className="form-check mt-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="blankCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="text-grey-500 font-xssss"
                                  htmlFor="blankCheckbox1"
                                ></label>
                              </div>
                              <div className="email-user">
                                <span className="btn-round-xss ms-0 bg-success me-2"></span>
                                <img
                                  src={`assets/images/${value.imageUrl}`}
                                  alt="user"
                                  className="w35 me-2 rounded-circle"
                                />
                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                  {value.name}
                                </h6>
                              </div>
                              <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                <i className="feather-star font-xss text-warning me-2"></i>
                                {value.subject}
                              </div>
                              <div className="email-text text-grey-500 fw-600 font-xssss">
                                {value.des}
                              </div>
                              {value.attach ? (
                                <span className="email-file">
                                  <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0"></i>
                                </span>
                              ) : (
                                ''
                              )}
                              <div className="email-time text-grey-500 fw-600">
                                {value.time}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
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

export default Email;
