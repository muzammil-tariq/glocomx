import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import { Link } from 'react-router-dom';

class Popupchat extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />
          </div>

          <div className="modal-popup-chat">
            <div className="modal-popup-wrap bg-white p-0 shadow-lg rounded-lg">
              <div className="modal-popup-header w-100 border-bottom">
                <div className="card p-3 d-block border-0 d-block">
                  <figure className="avatar mb-0 float-left mr-2">
                    <img
                      src="assets/images/user.png"
                      alt="avater"
                      className="w50 mr-1 rounded-circle"
                    />
                  </figure>
                  <h5 className="fw-700 text-primary font-xss mt-2 mb-1">
                    Hendrix Stamp
                  </h5>
                  <h4 className="text-grey-500 font-xssss mt-0">
                    <span className="d-inline-block bg-success btn-round-xss m-0 mr-1"></span>
                    Available
                  </h4>
                  <Link
                    to="/"
                    className="font-xssss position-absolute right-0 top-0 mt-4 mr-4"
                  >
                    <i className="ti-close text-grey-900 mt-2 d-inline-block"></i>
                  </Link>
                </div>
              </div>
              <div className="modal-popup-body w-100 p-4 h-auto">
                <div className="message">
                  <div className="message-content font-xssss lh-24 fw-500">
                    Hi, how can I help you?
                  </div>
                </div>
                <div className="date-break font-xssss lh-24 fw-600 text-grey-500 mt-2 mb-2">
                  Mon 10:20am
                </div>
                <div className="message">
                  <div className="message-content font-xssss lh-24 fw-500">
                    Hi, my name is Mike, I will be happy to assist you
                  </div>
                </div>
                <div className="message self text-right mt-4">
                  <div className="message-content font-xssss lh-24 fw-500">
                    I want those files for you. I want you to send 1 PDF and 1
                    image file.
                  </div>
                </div>
                <div
                  className="snippet pt-3 pl-4 pb-2 pr-3 mt-3 bg-grey rounded-xl float-right"
                  data-title=".dot-typing"
                >
                  <div className="stage">
                    <div className="dot-typing"></div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="modal-popup-footer w-100 border-top">
                <div className="card p-3 d-block border-0 d-block">
                  <div className="form-group icon-right-input style1-input mb-0">
                    <input
                      type="text"
                      placeholder="Start typing.."
                      className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 pl-3"
                    />
                    <i className="feather-arrow-right-circle text-grey-700 font-lg"></i>
                  </div>
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

export default Popupchat;
