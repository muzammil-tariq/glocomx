import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
const channelList = [
  {
    imageUrl: 'user.png',
    title: 'Mobile Product Design',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'FULL TIME',
    tag2: 'DESINER',
    tag3: '30 MIN',
  },
  {
    imageUrl: 'user.png',
    title: 'HTML Developer',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: '',
    tag2: 'DESINER',
    tag3: '30 MIN',
  },
  {
    imageUrl: 'user.png',
    title: 'Advanced CSS and Sass',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'FULL TIME',
    tag2: 'DEVELOPER',
    tag3: '21 HOUR',
  },
  {
    imageUrl: 'user.png',
    title: 'Modern React with Redux',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'HALF TIME',
    tag2: 'DESINER',
    tag3: '5 HOUNRS',
  },
  {
    imageUrl: 'user.png',
    title: 'Node JS',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'HALF TIME',
    tag2: 'CODER',
    tag3: '45 MIN',
  },
  {
    imageUrl: 'user.png',
    title: 'Mobile Product Design',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'FULL TIME',
    tag2: 'DESINER',
    tag3: '30 MIN',
  },
];

class Defaultchannel extends Component {
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
                  {channelList.map((value, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                      <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-xxl-5 p-4 border-0 text-center">
                        <a
                          href="/default-channel"
                          className="position-absolute right-0 mr-4 top-0 mt-3"
                        >
                          <i className="ti-more text-grey-500 font-xs"></i>
                        </a>
                        <a
                          href="/default-channel"
                          className="btn-round-xxxl rounded-lg bg-lightblue ml-auto mr-auto"
                        >
                          <img
                            src={`assets/images/${value.imageUrl}`}
                            alt="icon"
                            className="p-1 w-100"
                          />
                        </a>
                        <h4 className="fw-700 font-xs mt-4">{value.title}</h4>
                        <p className="fw-500 font-xssss text-grey-500 mt-3">
                          {value.des}
                        </p>
                        <div className="clearfix"></div>
                        {value.tag1 ? (
                          <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mb-1 mr-1">
                            {value.tag1}
                          </span>
                        ) : (
                          ''
                        )}
                        {value.tag2 ? (
                          <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 bg-lightblue d-inline-block text-grey-800 mb-1 mr-1">
                            {value.tag2}
                          </span>
                        ) : (
                          ''
                        )}
                        {value.tag3 ? (
                          <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-info d-inline-block text-info mb-1">
                            {value.tag3}
                          </span>
                        ) : (
                          ''
                        )}
                        <div className="clearfix"></div>
                        <ul className="memberlist mt-4 mb-2">
                          <li>
                            <a href="/default-channel">
                              <img
                                src="assets/images/user.png"
                                alt="user"
                                className="w30 d-inline-block rounded-circle"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/default-channel">
                              <img
                                src="assets/images/user.png"
                                alt="user"
                                className="w30 d-inline-block rounded-circle"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/default-channel">
                              <img
                                src="assets/images/user.png"
                                alt="user"
                                className="w30 d-inline-block rounded-circle"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/default-channel">
                              <img
                                src="assets/images/user.png"
                                alt="user"
                                className="w30 d-inline-block rounded-circle"
                              />
                            </a>
                          </li>
                          <li className="last-member">
                            <a
                              href="/default-channel"
                              className="bg-greylight fw-600 text-grey-500 font-xssss ls-3"
                            >
                              +2
                            </a>
                          </li>
                          <li className="pl-4 w-auto">
                            <a
                              href="/default-channel"
                              className="fw-500 text-grey-500 font-xssss"
                            >
                              Student apply
                            </a>
                          </li>
                        </ul>

                        <a
                          href="/default-channel"
                          className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
                        >
                          APPLY NOW
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

export default Defaultchannel;
