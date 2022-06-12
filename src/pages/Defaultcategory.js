import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const sliderList = [
  {
    imageUrl: 'banner.png',
    title: 'The Complete Guide React Vue Developer',
    des: 'ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.',
    tag: 'React',
    rating: '56 ratings',
  },
  {
    imageUrl: 'banner.png',
    title: 'Complete Python Bootcamp From Zero',
    des: 'ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.',
    tag: 'React',
    rating: '45 ratings',
  },
  {
    imageUrl: 'banner.png',
    title: 'Design and Advanced Methods Workshop Tutorial',
    des: 'ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.',
    tag: 'React',
    rating: '22 ratings',
  },
];

const latestList = [
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
];
const popularList = [
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
];
const memberList = [
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'John Steere ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Mohannad Zitoun ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Hendrix Stamp ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Mohannad Zitoun ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'John Steere ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
];

class Defaultcategory extends Component {
  render() {
    const mainSlider = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: false,
    };
    const popularSlider = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };
    const latestSlider = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };
    const memberSlider = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };
    return (
      <Fragment>
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />

            <div className="middle-sidebar-bottom theme-dark-bg">
              <div className="middle-sidebar-left">
                <div className="row">
                  <div className="col-lg-12 mb-0">
                    <Slider {...mainSlider}>
                      {sliderList.map((value, index) => (
                        <div
                          className="card course-slider rounded-lg border-0 banner-wrap overflow-hidden"
                          key={index}
                        >
                          <div className="video-wrap">
                            <img
                              src={`assets/images/${value.imageUrl}`}
                              alt="banner"
                            />
                          </div>
                          <div className="card-body position-absolute align-items-center d-flex h-100 top-0">
                            <div className="card-content pr-lg-5">
                              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1 mb-2">
                                {value.tag}
                              </span>
                              <h2 className="display1-size display1-sm-size fw-700 lh-3 text-white ">
                                {value.title}
                              </h2>
                              <p className="d-none d-xl-block font-xssss fw-500 text-grey-300 lh-30 mt-0 mr-5 mb-0">
                                {value.des}
                              </p>
                              <div className="star d-block w-100 text-left mt-2">
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15 float-left"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15 float-left"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15 float-left"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15 float-left"
                                />
                                <img
                                  src="assets/images/star-disable.png"
                                  alt="star"
                                  className="w15 float-left mr-2"
                                />
                              </div>
                              <p className="review-link d-none d-lg-block font-xssss fw-600 text-grey-100 lh-3 mb-1">
                                {value.rating}
                              </p>
                              <div className="clearfix"></div>
                              <a
                                href="/default"
                                className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-lg d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200 mt-3"
                              >
                                Get Course
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="col-lg-12 pt-4 mb-3">
                    <h2 className="fw-400 font-lg d-block">
                      Popular <b> Classes</b>
                      <a href="/" className="float-right">
                        <i className="feather-edit text-grey-500 font-xs"></i>
                      </a>
                    </h2>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <Slider {...popularSlider}>
                      {popularList.map((value, index) => (
                        <div
                          className="card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-3 mb-4"
                          key={index}
                        >
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
                              <span className="font-xsssss">$</span>
                              {value.price}
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
                      ))}
                    </Slider>
                  </div>
                  <div className="col-lg-12 pt-0 mb-3">
                    <h2 className="fw-400 font-lg d-block">
                      Latest <b> Classes</b>
                      <a href="/" className="float-right">
                        <i className="feather-edit text-grey-500 font-xs"></i>
                      </a>
                    </h2>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <Slider {...latestSlider}>
                      {latestList.map((value, index) => (
                        <div
                          className="card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-3 mb-4"
                          key={index}
                        >
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
                              <span className="font-xsssss">$</span>
                              {value.price}
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
                      ))}
                    </Slider>
                  </div>
                  <div className="col-lg-12 pt-0 mb-3">
                    <h2 className="fw-400 font-lg d-block">
                      Live <b> Classes</b>
                      <a href="/" className="float-right">
                        <i className="feather-edit text-grey-500 font-xs"></i>
                      </a>
                    </h2>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <Slider {...memberSlider}>
                      {memberList.map((value, index) => (
                        <div
                          className="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4 mr-2"
                          key={index}
                        >
                          <div
                            className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center"
                            style={{
                              backgroundImage: `url(assets/images/${value.bgimage})`,
                            }}
                          ></div>
                          <div className="card-body d-block w-100 pl-4 pr-4 pb-4 text-center">
                            <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                              <img
                                src={`assets/images/${value.imageUrl}`}
                                alt="avater"
                                className="float-right p-1 bg-white rounded-circle w-100"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-700 font-xsss mt-3 mb-1">
                              {value.name}
                            </h4>
                            <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                              {value.email}
                            </p>
                            <span className="live-tag mt-2 mb-3 bg-danger p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">
                              LIVE
                            </span>
                          </div>
                        </div>
                      ))}
                    </Slider>
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

export default Defaultcategory;
