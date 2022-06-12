import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footertwo from '../components/Footertwo';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const blogList = [
  {
    imageUrl: 'blog.png',
    title: 'Aenean  Dieting Strategies That Almost Always Backfire',
    meta: 'Lifestyle',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'The doner is a Turkish creation of meat, often lamb.',
    meta: 'Food',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'The only nutrition program follow & supremely effective',
    meta: 'Lifestyle',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
];
const brandList = [
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
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
];

class Homefour extends Component {
  render() {
    const brandsettings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
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
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: false,
      variableWidth: false,
      autoplay: true,
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
        <Header />

        <div className="banner-wrapper bg-lightblue-after">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center pt-lg--10 pt-7">
                <h2 className="fw-700 text-grey-900 display4-size display4-xs-size lh-1 mb-3 pt-5 aos-init aos-animate">
                  Explore analyze our awesome feature
                </h2>
                <p className="fw-300 font-xsss lh-28 text-grey-500 pl-lg--5 pr-lg--5 aos-init aos-animate">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
                <a
                  href="/"
                  className="btn border-0 bg-dark text-uppercase p-3 text-white fw-700 ls-3 rounded-lg d-inline-block font-xssss btn-light mt-3 w200 aos-init aos-animate"
                >
                  Start Free Trial
                </a>
              </div>
              <div className="col-lg-12">
                <img
                  src="https://via.placeholder.com/1200x650.png"
                  alt="banner"
                  className="img-fluid pt-0 aos-init aos-animate"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="brand-wrapper pt-5 pb-lg--5">
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

        <div className="feature-wrapper pt-5 pt-lg--7">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-3">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-success mr-1">
                  How to work
                </span>
                <h2 className="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">
                  Choose the way that's right for your business
                </h2>
                <p className="fw-300 font-xsss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 p-4 text-center arrow-right">
                <span className="btn-round-xxxl alert-primary text-primary display1-size open-font fw-900">
                  1
                </span>
                <h2 className="fw-700 font-xss text-grey-900 mt-4">Branding</h2>
                <p className="fw-500 font-xssss lh-24 text-grey-500 mb-0">
                  Praesent porttitor nunc vitae lacus vehicula, nec mollis eros
                  congue.
                </p>
              </div>
              <div className="col-lg-3 p-4 text-center arrow-right">
                <span className="btn-round-xxxl alert-danger text-danger display1-size open-font fw-900">
                  2
                </span>
                <h2 className="fw-700 font-xss text-grey-900 mt-4">Feature</h2>
                <p className="fw-500 font-xssss lh-24 text-grey-500 mb-0">
                  Praesent porttitor nunc vitae lacus vehicula, nec mollis eros
                  congue.
                </p>
              </div>
              <div className="col-lg-3 p-4 text-center arrow-right">
                <span className="btn-round-xxxl alert-success text-success display1-size open-font fw-900">
                  3
                </span>
                <h2 className="fw-700 font-xss text-grey-900 mt-4">Awesome</h2>
                <p className="fw-500 font-xssss lh-24 text-grey-500 mb-0">
                  Praesent porttitor nunc vitae lacus vehicula, nec mollis eros
                  congue.
                </p>
              </div>
              <div className="col-lg-3 p-4 text-center">
                <span className="btn-round-xxxl alert-warning text-warning display1-size open-font fw-900">
                  4
                </span>
                <h2 className="fw-700 font-xss text-grey-900 mt-4">Layout</h2>
                <p className="fw-500 font-xssss lh-24 text-grey-500 mb-0">
                  Praesent porttitor nunc vitae lacus vehicula, nec mollis eros
                  congue.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-wrapper layer-after pt-lg--7 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="https://via.placeholder.com/700x550.png"
                  alt="banner"
                  className="img-fluid aos-init aos-animate"
                />
              </div>
              <div className="col-lg-4 offset-lg-1">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 mt-4 text-uppercase rounded-xl ls-2 alert-warning d-inline-block text-warning mr-1">
                  Our feature
                </span>
                <h2 className="text-grey-900 fw-700 display1-size pb-3 mb-0 mt-3 d-block lh-3 aos-init aos-animate">
                  Buy Elomoas and get access to amazing feature
                </h2>
                <p className="fw-400 font-xsss lh-28 text-grey-500 aos-init aos-animate">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
                <h4 className="font-xssss fw-600 text-grey-500 mb-3 aos-init aos-animate">
                  <i className="ti-check font-xssss mr-2 btn-round-xs alert-success text-success"></i>
                  Unlimited views For anyone validating
                </h4>
                <h4 className="font-xssss fw-600 text-grey-500 mb-3 aos-init aos-animate">
                  <i className="ti-check font-xssss mr-2 btn-round-xs alert-success text-success"></i>
                  We enjoy building experiences.
                </h4>
                <a
                  href="/"
                  className="btn border-0 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light mt-3 w150 aos-init aos-animate"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-wrapper layer-after pt-lg--7 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 order-lg-2 offset-lg-1">
                <img
                  src="https://via.placeholder.com/700x550.png"
                  alt="banner"
                  className="w-100 aos-init aos-animate"
                />
              </div>

              <div className="col-lg-4 order-lg-1 pt-lg--5">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 mt-4 text-uppercase rounded-xl ls-2 alert-danger d-inline-block text-danger mr-1">
                  Our feature
                </span>
                <h2 className="text-grey-900 fw-700 display1-size pb-3 mb-0 mt-3 d-block lh-3 aos-init aos-animate">
                  Explore amazing experiences ever and join us.
                </h2>
                <p className="fw-400 font-xsss lh-28 text-grey-500 aos-init aos-animate">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
                <h4 className="font-xssss fw-600 text-grey-500 mb-3 aos-init aos-animate">
                  <i className="ti-check font-xssss mr-2 btn-round-xs alert-danger text-danger"></i>
                  Unlimited views For anyone validating
                </h4>
                <h4 className="font-xssss fw-600 text-grey-500 mb-3 aos-init aos-animate">
                  <i className="ti-check font-xssss mr-2 btn-round-xs alert-danger text-danger"></i>
                  We enjoy building experiences.
                </h4>
                <a
                  href="/"
                  className="btn border-0 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light mt-3 w150 aos-init aos-animate"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-page bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-warning d-inline-block text-warning mr-1">
                  Blog
                </span>
                <h2 className="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">
                  Dont Miss Out Our Story
                </h2>
                <p className="fw-300 font-xssss lh-28 text-grey-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="row">
              {blogList.map((value, index) => (
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>
                  <article className="post-article p-0 border-0 shadow-xss rounded-lg overflow-hidden aos-init aos-animate">
                    <Link to="/blog-single">
                      <img
                        src={`assets/images/${value.imageUrl}`}
                        alt="blog"
                        className="w-100"
                      />
                    </Link>
                    <div className="post-content p-4">
                      <h6 className="font-xsss text-success fw-600 float-left">
                        {value.meta}
                      </h6>
                      <h6 className="font-xssss text-grey-500 fw-600 ml-3 float-left">
                        <i className="ti-time mr-2"></i> 24 May 2020
                      </h6>
                      <h6 className="font-xssss text-grey-500 fw-600 ml-3 float-left">
                        <i className="ti-user mr-2"></i> Jack Robin
                      </h6>
                      <div className="clearfix"></div>
                      <h2 className="post-title mt-2 mb-2 pr-3">
                        <Link
                          to="/blog-single"
                          className="lh-30 font-sm mont-font text-grey-800 fw-700"
                        >
                          {value.title}
                        </Link>
                      </h2>
                      <p className="font-xsss fw-400 text-grey-500 lh-26 mt-0 mb-2 pr-3">
                        {value.des}
                      </p>
                      <Link
                        to="/blog-single"
                        className="rounded-xl text-white bg-current w125 p-2 lh-32 font-xsss text-center fw-500 d-inline-block mb-0 mt-2"
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="feedback-wrapper pt-lg--7 pb-lg--7 pb-5 pt-5">
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

export default Homefour;
