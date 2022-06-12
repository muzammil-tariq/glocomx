import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import { Link } from 'react-router-dom';

const courseList = [
  {
    imageUrl: 'course.png',
    title: 'Complete Python Bootcamp From Zero to Hero in Python ',
    price: '2400',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'course.png',
    title: 'Complete Python Bootcamp From Zero to Hero in Python ',
    price: '40',
    tag: 'Desinger',
    lesson: '24 ',
    status: 'alert-danger text-danger',
  },
  {
    imageUrl: 'course.png',
    title: 'Java Programming Masterclass for Developers',
    price: '60',
    tag: 'Bootstrap',
    lesson: '14 ',
    status: 'alert-success text-success',
  },
  {
    imageUrl: 'course.png',
    title: 'The Data Science Course Complete Data Science ',
    price: '370',
    tag: 'Develop',
    lesson: '23 ',
    status: 'alert-danger text-danger',
  },
  {
    imageUrl: 'course.png',
    title: 'Complete Python Bootcamp From Zero to Hero in Python ',
    price: '450',
    tag: 'Desinger',
    lesson: '24 ',
    status: 'alert-danger text-danger',
  },
  {
    imageUrl: 'course.png',
    title: 'Fundamentals for Scrum Master and Agile Projects ',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'course.png',
    title: 'Automate the Boring Stuff with Python Programming',
    price: '760',
    tag: 'Bootstrap',
    lesson: '14 ',
    status: 'alert-primary text-primary',
  },
  {
    imageUrl: 'course.png',
    title: 'The Data Science Course Complete Data Science ',
    price: '370',
    tag: 'Develop',
    lesson: '23 ',
    status: 'alert-danger text-danger',
  },
];

class Defaultsearch extends Component {
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
                  <div className="col-lg-12 mb-4">
                    <div
                      className="card rounded-xxl p-lg--5 border-0 bg-no-repeat"
                      style={{ backgroundColor: `#e4f7fe` }}
                    >
                      <div className="card-body w-100 p-4">
                        <div className="form-group mt-3 p-3 border-light border p-2 bg-white rounded-lg">
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="form-group icon-input mb-0">
                                <i className="ti-search font-xs text-grey-400"></i>
                                <input
                                  type="text"
                                  className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500 bg-transparent"
                                  placeholder="Search online courses.."
                                />
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="form-group icon-input mb-0">
                                <i className="ti-package font-xs text-grey-400"></i>
                                <select className="style1-select bg-transparent border-0 pl-5">
                                  <option value="Bootstrap">Bootstrap</option>
                                  <option value="HTML">HTML</option>
                                  <option value="Jquery">Jquery</option>
                                  <option value="Sass">Sass</option>
                                  <option value="React">React</option>
                                  <option value="JAVA">JAVA</option>
                                  <option value="Python">Python</option>
                                  <option value="Mongodb">Mongodb</option>
                                  <option value="Desinger">Desinger</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <Link
                                to="/default-search"
                                className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                              >
                                Search
                              </Link>
                            </div>
                          </div>
                        </div>
                        <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                          <b className="text-grey-800 text-dark">
                            Popular Search :
                          </b>
                          Designer, Developer, PHP, HTML, CSS, SCSS
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 pt-2 mb-4">
                    <h2 className="fw-400 font-lg">
                      Search <b>Results</b>
                      <span className="fw-500 ml-2 text-grey-500 font-xssss">
                        ( 23 course is found )
                      </span>
                      <a href="/" className="float-right">
                        <i className="feather-edit text-grey-500 font-xs"></i>
                      </a>
                    </h2>
                  </div>
                  {courseList.map((value, index) => (
                    // Strat Single Demo
                    <div
                      className="col-xl-4 col-xxxl-3 col-lg-6 col-md-6 col-sm-6 mb-4"
                      key={index}
                    >
                      <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 course-card">
                        <div className="card-image w-100 mb-3">
                          <Link
                            to="/coursedetails"
                            className="video-bttn position-relative d-block"
                          >
                            <img
                              src={`assets/images/${value.imageUrl}`}
                              alt="course"
                              className="w-100"
                            />
                          </Link>
                        </div>
                        <div className="card-body pt-0">
                          <span
                            className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}
                          >
                            {value.tag}
                          </span>
                          <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                            <span className="font-xsssss">$</span> {value.price}
                          </span>
                          <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                            <Link
                              to="/coursedetails"
                              className="text-dark text-grey-900"
                            >
                              {value.title}
                            </Link>
                          </h4>
                          <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                            {value.lesson} Lesson
                          </h6>
                          <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                            <li>
                              <a href="/">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="w30 d-inline-block rounded-cirlce"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="w30 d-inline-block rounded-cirlce"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="w30 d-inline-block rounded-cirlce"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="w30 d-inline-block rounded-cirlce"
                                />
                              </a>
                            </li>
                            <li className="last-member">
                              <a
                                href="/"
                                className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                              >
                                +2
                              </a>
                            </li>
                            <li className="pl-4 w-auto">
                              <a
                                href="/"
                                className="fw-500 text-grey-500 font-xssss"
                              >
                                Student apply
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    // End Single Demo
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

export default Defaultsearch;
