import React, { Component, Fragment } from 'react';
import Adminsidebar from '../components/Adminsidebar';
import AdminTopnav from '../components/AdminTopnav';
import Adminfooter from '../components/Adminfooter';

const chatList = [
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: '',
    des: 'Whats up how are you?',
    attach: '',
    time: '12:45 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '1:13 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '2:45 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: '',
    des: 'Whats up how are you?',
    attach: '',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '1:13 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '2:45 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: '',
    des: 'Whats up how are you?',
    attach: '',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: '',
    des: 'Whats up how are you?',
    attach: '',
    time: '',
  },
];

class Adminchat extends Component {
  render() {
    return (
      <Fragment>
        <div id="wrapper">
          <Adminsidebar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <AdminTopnav />

              <div className="container px-3 py-4">
                <div className="row">
                  <div className="col-lg-6 col-xl-4 col-md-6 chat-left scroll-bar border-right-light pl-4 pr-4 bg-white rounded-10 theme-dark-bg">
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
                        {chatList.map((value, index) => (
                          <li
                            key={index}
                            className="bg-transparent list-group-item no-icon pl-0"
                          >
                            <figure className="avatar float-left mb-0 mr-3">
                              <img
                                src={`assets/images/${value.imageUrl}`}
                                alt="avater"
                                className="w45 rounded-circle"
                              />
                            </figure>
                            <h3 className="fw-600 mb-0 mt-1">
                              <a
                                className="font-xsss fw-700 text-grey-900 text-dark d-block"
                                href="/admin-chat"
                              >
                                {value.name}
                              </a>
                            </h3>
                            <span className="d-block fw-500 font-xssss">
                              {value.des}
                            </span>
                            <span className="badge mt-0 text-grey-500 badge-pill">
                              {value.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-8 col-md-6 pl-0 pr-0 d-none d-lg-block d-md-block bg-white rounded-10 posr">
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
                                className="w-100 img-fluid rounded-lg"
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

              <Adminfooter />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Adminchat;
