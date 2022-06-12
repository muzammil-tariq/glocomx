import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Upperheader from '../components/Upperheader';
import Footertwo from '../components/Footertwo';
import Slider from 'react-slick';

const brandList = [
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
];

const iconList = [
  {
    title: 'Blazing Performance',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-layers',
    color: 'text-warning',
    bgcolor: 'alert-warning',
  },
  {
    title: 'Free Updates',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-lock',
    color: 'text-secondary',
    bgcolor: 'alert-secondary',
  },
  {
    title: '24/7 Supports',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-box',
    color: 'text-success',
    bgcolor: 'alert-success',
  },
];

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
];

const feedbackList = [
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'Digital Marketing Executive',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.',
  },
  {
    imageUrl: 'user.png',
    name: 'Thomas Smith',
    status: 'Digital Marketing Executive',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    status: 'Digital Marketing Executive',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.',
  },
  {
    imageUrl: 'user-6.png',
    name: 'Goria Coast',
    status: 'Digital Marketing Executive',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.',
  },
  {
    imageUrl: 'user-7.png',
    name: 'Thomas Smith',
    status: 'Digital Marketing Executive',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.',
  },
  {
    imageUrl: 'user-8.png',
    name: 'Hurin Seary',
    status: 'Digital Marketing Executive',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.',
  },
];

class Hometwo extends Component {
  render() {
    const brandsettings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      centerMode: false,
      variableWidth: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    const feedbacksettings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      centerMode: false,
      autoplay: true,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Upperheader />
        <Header divclassName="shadow-none" />

        <div className="banner-wrapper bg-after-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5 order-lg-2 ">
                <img
                  src="https://via.placeholder.com/570x350.png"
                  alt="banner"
                  className="pt-lg--10 w-100"
                />
              </div>
              <div className="col-xl-6 col-lg-7 order-lg-1 pt-lg--10 pb-lg--10 xl-p-5">
                <h2 className="display3-size display2-md-size fw-700">
                  Find the best perfect Online Course
                </h2>
                <h4 className="text-grey-500 font-xssss fw-500 ml-1 aos-init lh-24">
                  For only course you need to learn web development
                </h4>
                <div className="form-group mt-lg-5 p-3 border-light border p-2 bg-white rounded-lg">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="form-group icon-input mb-0">
                        <i className="ti-search font-xs text-grey-400"></i>
                        <input
                          type="text"
                          className="style1-input bg-transparent border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500"
                          placeholder="Search online courses.."
                        />
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="form-group icon-input mb-0">
                        <i className="ti-package font-xs text-grey-400"></i>
                        <select className="style1-select bg-transparent border-0 pl-5">
                          <option value="">All Categories</option>
                          <option value="Bootstrap">Bootstrap</option>
                          <option value="React">React</option>
                          <option value="Backend">Backend</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <a
                        href="/"
                        className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                      >
                        Search
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                  <b className="text-grey-800">Popular Search :</b> Designer,
                  Developer, PHP, HTML, CSS, SCSS
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="brand-wrapper pt-5 pb-7">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Slider {...brandsettings}>
                  {brandList.map((value, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={`assets/images/${value.bimg}`}
                        alt="avater"
                        className="w100 ml-auto mr-auto"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="how-to-work pt-lg--5 pb-lg--7">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                  How to work
                </h2>
                <p className="fw-300 font-xsss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>

            <div className="row">
              {iconList.map((value, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="card p-4 border-0 text-center d-block">
                    <i
                      className={`btn-round-xxxl font-xxl position-relative z-index ${value.icon} ${value.color} ${value.bgcolor}`}
                    ></i>
                    <h2 className="font-xs fw-700 text-grey-900 mt-4 mb-2">
                      {value.title}
                    </h2>
                    <p className="fw-500 font-xssss lh-28 text-grey-500">
                      {value.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="how-to-work pb-lg--7">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-6 col-md-10 text-center mb-5">
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                  Online Popular Course
                </h2>
                <p className="fw-300 font-xsss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>

            <div className="row">
              {courseList.map((value, index) => (
                // Strat Single Demo
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4"
                  key={index}
                >
                  <div className="card course-card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
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
                              className="w30 d-inline-block rounded-circle"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src="assets/images/user.png"
                              alt="avater"
                              className="w30 d-inline-block rounded-circle"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src="assets/images/user.png"
                              alt="avater"
                              className="w30 d-inline-block rounded-circle"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src="assets/images/user.png"
                              alt="avater"
                              className="w30 d-inline-block rounded-circle"
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
        </div>

        <div className="how-to-work pb-lg--7">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-8 col-lg-8 col-md-10 text-center mb-5">
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                  Are you Looking for Live Class ?
                </h2>
                <p className="fw-300 font-xsss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className="card border-0 mb-0 rounded-lg overflow-hidden live-stream bg-image-center bg-image-cover"
                  style={{
                    backgroundImage: `url("https://via.placeholder.com/650x550.png")`,
                  }}
                >
                  <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                    <a
                      href="/"
                      className="btn-round-xl d-md-inline-block d-none bg-blur m-3 mr-0 z-index-1"
                    >
                      <i className="feather-grid text-white font-md"></i>
                    </a>
                    <a
                      href="/"
                      className="btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1"
                    >
                      <i className="feather-mic-off text-white font-md"></i>
                    </a>
                    <a href="/" className="btn-round-xxl bg-danger z-index-1">
                      <i className="feather-phone-off text-white font-md"></i>
                    </a>
                    <a
                      href="/"
                      className="btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1"
                    >
                      <i className="ti-video-camera text-white font-md"></i>
                    </a>
                    <a
                      href="/"
                      className="btn-round-xl d-md-inline-block d-none bg-blur m-3 ml-0 z-index-1"
                    >
                      <i className="ti-settings text-white font-md"></i>
                    </a>
                    <span className="p-2 bg-blur z-index-1 text-white fw-700 font-xssss rounded-lg right-15 position-absolute mb-4 bottom-0">
                      44:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 mt-5">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-xss-6">
                    <h2 className="display4-size display4-md-size fw-700 open-font text-grey-900 mb-0">
                      4.7
                    </h2>
                    <div className="star d-block w-100 text-left">
                      <img
                        src="assets/images/star.png"
                        alt="star"
                        className="w15"
                      />
                      <img
                        src="assets/images/star.png"
                        alt="star"
                        className="w15"
                      />
                      <img
                        src="assets/images/star.png"
                        alt="star"
                        className="w15"
                      />
                      <img
                        src="assets/images/star.png"
                        alt="star"
                        className="w15"
                      />
                      <img
                        src="assets/images/star-disable.png"
                        alt="star"
                        className="w15"
                      />
                    </div>
                    <h4 className="font-xssss text-grey-900 fw-700 mt-2">
                      433 rating Based
                    </h4>
                  </div>

                  <div className="col-lg-3 col-md-3 col-xss-6">
                    <h2 className="display4-size display4-md-size fw-700 open-font text-grey-900 mb-0">
                      210<span className="font-xxl">%</span>
                      <i className="feather-arrow-up-right text-success font-xl"></i>
                    </h2>
                    <h4 className="font-xssss text-grey-500 fw-600 mt-2">
                      433 rating
                    </h4>
                    <h4 className="font-xssss text-grey-900 fw-700 mt-2">
                      Increase in revenue
                    </h4>
                  </div>

                  <div className="col-lg-3 col-md-3 col-xss-6">
                    <h2 className="display4-size display4-md-size fw-700 open-font text-grey-900 mb-0">
                      20<span className="font-xxl">%</span>
                      <i className="feather-arrow-down-right text-danger font-xl"></i>
                    </h2>
                    <h4 className="font-xssss text-grey-500 fw-600 mt-2">
                      433 rating
                    </h4>
                    <h4 className="font-xssss text-grey-900 fw-700 mt-2">
                      Increase in revenue
                    </h4>
                  </div>

                  <div className="col-lg-3 col-md-3 col-xss-6">
                    <h2 className="display4-size display4-md-size fw-700 open-font text-grey-900 mb-0">
                      43K<span className="font-xxl">+</span>
                      <i className="feather-arrow-up-right text-success font-xl"></i>
                    </h2>
                    <h4 className="font-xssss text-grey-500 fw-600 mt-2">
                      433 rating
                    </h4>
                    <h4 className="font-xssss text-grey-900 fw-700 mt-2">
                      Increase in revenue
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feedback-wrapper pb-5 pt-5 pb-lg--7">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-left mb-3 pb-0">
                <h2 className="text-grey-800 fw-700 font-xl lh-2">
                  Customer love what we do
                </h2>
              </div>

              <div className="col-lg-12 p-0">
                <Slider {...feedbacksettings}>
                  {feedbackList.map((value, index) => (
                    <div key={index} className="text-center py-4 px-3">
                      <div className="card w-100 p-5 text-left border-0 shadow-xss rounded-lg">
                        <div className="card-body pl-0 pt-0">
                          <img
                            src={`assets/images/${value.imageUrl}`}
                            alt="user"
                            className="w45 float-left mr-3 rounded-circle"
                          />
                          <h4 className="text-grey-900 fw-700 font-xsss mt-0 pt-1">
                            {value.name}
                          </h4>
                          <h5 className="font-xssss fw-500 mb-1 text-grey-500">
                            {value.status}
                          </h5>
                        </div>
                        <p className="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0 ">
                          {value.des}
                        </p>
                        <div className="star d-block w-100 text-right mt-4 mb-0">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15 mr-1 float-left mr-2"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15 mr-1 float-left mr-2"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15 mr-1 float-left mr-2"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15 mr-1 float-left mr-2"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15 mr-1 float-left mr-2"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <Footertwo />
      </Fragment>
    );
  }
}

export default Hometwo;
