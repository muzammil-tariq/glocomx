import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';

const memberList = [
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale',
    email: 'support@gmail.com',
    Connections: '500+',
    Follower: '80 M',
    Followings: '1,334',
  },
  {
    imageUrl: 'user.png',
    name: 'John Steere',
    email: 'support@gmail.com',
    Connections: '22 M',
    Follower: '822 k',
    Followings: '1,334',
  },
  {
    imageUrl: 'user.png',
    name: 'Mohannad Zitoun',
    email: 'support@gmail.com',
    Connections: '45 k',
    Follower: '88.7 k',
    Followings: '4,532 ',
  },
  {
    imageUrl: 'user.png',
    name: 'Stephen Grider',
    email: 'support@gmail.com',
    Connections: '500+',
    Follower: '88.7 k',
    Followings: '1,334',
  },
  {
    imageUrl: 'user.png',
    name: 'Hendrix Stamp',
    email: 'support@gmail.com',
    Connections: '500+',
    Follower: '88.7 k',
    Followings: '1,334',
  },
  {
    imageUrl: 'user.png',
    name: 'Kimberley Kelly',
    email: 'support@gmail.com',
    Connections: '500+',
    Follower: '88.7 k',
    Followings: '1,334',
  },
];

class Defaultfollower extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />

            <div className="middle-sidebar-bottom">
              <div className="middle-sidebar-left">
                <div className="row">
                  {memberList.map((value, index) => (
                    <div
                      key={index}
                      className="col-xl-4 col-lg-6 col-md-6 col-sm-6"
                    >
                      <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-4 border-0 text-center">
                        <a
                          href="/default-follower"
                          className="position-absolute right-0 mr-4 top-0 mt-3"
                        >
                          <i className="ti-more text-grey-500 font-xs"></i>
                        </a>
                        <a
                          href="/default-follower"
                          className="ml-auto mr-auto rounded-lg overflow-hidden d-inline-block"
                        >
                          <img
                            src={`assets/images/${value.imageUrl}`}
                            alt="avater"
                            className="p-0 w100 shadow-xss"
                          />
                        </a>
                        <h4 className="fw-700 font-xs mt-3 mb-1">
                          {value.name}{' '}
                          <i className="ti-check font-xssss btn-round-xs bg-success text-white ml-1"></i>
                        </h4>
                        <p className="fw-600 font-xssss text-grey-500 mt-0 mb-2">
                          {value.email}
                        </p>
                        <div className="clearfix"></div>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          Desinger
                        </span>
                        <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          PHP
                        </span>
                        <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                        <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                          HTML5
                        </span>

                        <ul className="list-inline border-0 mt-4">
                          <li className="list-inline-item text-center mr-4">
                            <h4 className="fw-700 font-md">
                              {value.Connections}{' '}
                              <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                                Connections
                              </span>
                            </h4>
                          </li>
                          <li className="list-inline-item text-center mr-4">
                            <h4 className="fw-700 font-md">
                              {value.Follower}{' '}
                              <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                                Follower
                              </span>
                            </h4>
                          </li>
                          <li className="list-inline-item text-center">
                            <h4 className="fw-700 font-md">
                              {value.Followings}{' '}
                              <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                                Followings
                              </span>
                            </h4>
                          </li>
                        </ul>
                        <a
                          href="/default-follower"
                          className="mt-3 p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                        >
                          FOLLOW
                        </a>
                      </div>
                    </div>
                  ))}
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

export default Defaultfollower;
