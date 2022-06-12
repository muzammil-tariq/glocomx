import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';

const chatMember = [
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    status: 'bg-warning',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'bg-danger',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'David Goria',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Seary Victor',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Ana Seary',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    status: 'bg-warning',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'bg-danger',
  },
];

class Chat extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />

            <div className="middle-sidebar-bottom theme-dark-bg">
              <div className="middle-sidebar-left bg-white dark-bg-transparent mr-3 pr-0">
                <div className="row">
                  <div className="col-lg-6 col-xl-4 col-md-6 chat-left scroll-bar border-right-light pl-4 pr-4">
                    <form action="#" className="mt-0 pl-3 pt-3">
                      <div className="search-form">
                        <i className="ti-search font-xs"></i>
                        <input
                          type="text"
                          className="form-control text-grey-500 mb-0 bg-greylight border-0"
                          placeholder="Search here."
                        />
                      </div>
                    </form>
                    <div className="section full mt-2 mb-2 pl-3">
                      <ul className="list-group list-group-flush">
                        {chatMember.map((value, index) => (
                          // Start Single Demo
                          <li
                            className="bg-transparent list-group-item no-icon pl-0"
                            key={index}
                          >
                            <figure className="avatar float-left mb-0 mr-3">
                              <img
                                src={`assets/images/${value.imageUrl}`}
                                alt="avater"
                                className="w45 rounded-circle"
                              />
                            </figure>
                            <h3 className="fw-700 mb-0 mt-1">
                              <span className="font-xsss text-grey-900 text-dark d-block">
                                {value.name}
                              </span>
                            </h3>
                            <span className="d-block">
                              What's up, how are you?
                            </span>
                            <span
                              className={`${value.status} ms-auto btn-round-xss badge d-block p-0`}
                            ></span>
                          </li>
                          // End Single Demo
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-8 col-md-6 pl-0 d-none d-lg-block d-md-block">
                    <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                      <div className="chat-body p-3 ">
                        <div className="messages-content pb-5">
                          <div className="message-item">
                            <div className="message-user">
                              <figure className="avatar">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                />
                              </figure>
                              <div>
                                <h5>Byrom Guittet</h5>
                                <div className="time">01:35 PM</div>
                              </div>
                            </div>
                            <div className="message-wrap">
                              I'm fine, how are you.
                            </div>
                          </div>

                          <div className="message-item outgoing-message">
                            <div className="message-user">
                              <figure className="avatar">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                />
                              </figure>
                              <div>
                                <h5>Byrom Guittet</h5>
                                <div className="time">
                                  01:35 PM
                                  <i className="ti-double-check text-info"></i>
                                </div>
                              </div>
                            </div>
                            <div className="message-wrap">
                              I want those files for you. I want you to send 1
                              PDF and 1 image file.
                            </div>
                          </div>

                          <div className="message-item">
                            <div className="message-user">
                              <figure className="avatar">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                />
                              </figure>
                              <div>
                                <h5>Byrom Guittet</h5>
                                <div className="time">01:35 PM</div>
                              </div>
                            </div>
                            <div className="message-wrap">
                              I've found some cool photos for our travel app.
                            </div>
                          </div>

                          <div className="message-item outgoing-message">
                            <div className="message-user">
                              <figure className="avatar">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                />
                              </figure>
                              <div>
                                <h5>Byrom Guittet</h5>
                                <div className="time">
                                  01:35 PM
                                  <i className="ti-double-check text-info"></i>
                                </div>
                              </div>
                            </div>
                            <div className="message-wrap">
                              Hey mate! How are things going ?
                            </div>
                          </div>

                          <div className="message-item">
                            <div className="message-user">
                              <figure className="avatar">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                />
                              </figure>
                              <div>
                                <h5>Byrom Guittet</h5>
                                <div className="time">01:35 PM</div>
                              </div>
                            </div>
                            <figure>
                              <img
                                src="https://via.placeholder.com/270x150.png"
                                className="w-75 img-fluid rounded-lg"
                                alt="avater"
                              />
                            </figure>
                          </div>

                          <div className="message-item outgoing-message">
                            <div className="message-user">
                              <figure className="avatar">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                />
                              </figure>
                              <div>
                                <h5>Byrom Guittet</h5>
                                <div className="time">
                                  01:35 PM
                                  <i className="ti-double-check text-info"></i>
                                </div>
                              </div>
                            </div>
                            <div
                              className="message-wrap"
                              style={{ marginBottom: '90px' }}
                            >
                              Hey mate! How are things going ?
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg"
                      style={{ width: '98%' }}
                    >
                      <form className="chat-form">
                        <button className="bg-grey float-left">
                          <i className="ti-microphone text-grey-600"></i>
                        </button>
                        <div className="form-group">
                          <input type="text" placeholder="Start typing.." />
                        </div>
                        <button className="bg-current">
                          <i className="ti-arrow-right text-white"></i>
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

export default Chat;
