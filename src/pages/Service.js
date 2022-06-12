import React, { Component, Fragment } from 'react';
import Header from '../components/Header';

import Footer from '../components/Footer';
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
const priceList = [
  {
    color: 'bg-primary shadow-xss',
    price: '€ 0',
    title: 'Free',
    des: 'For anyone validating Framer as a professional prototyping tool.',
    status: 'text-white',
    btn: 'btn btn-block border-0 w-100 bg-white p-3 text-primary fw-600 rounded-lg d-inline-block font-xssss btn-light',
  },
  {
    color: 'bg-white shadow-lg',
    price: '€ 49',
    title: 'Standard',
    des: 'For anyone validating Framer as a professional prototyping tool.',
    status: 'text-grey-900',
    btn: 'btn btn-block border-0 w-100 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light',
  },
];
const iconList = [
  {
    title: 'Automatic Updates',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-layers',
    color: 'text-success alert-success',
  },
  {
    title: 'Blazing Performance',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-award',
    color: 'text-danger alert-danger',
  },
  {
    title: 'Free Updates',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-cpu',
    color: 'text-infong alert-info',
  },
  {
    title: 'Unlimited Layouts',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-hard-drive',
    color: 'text-warning alert-warning',
  },
  {
    title: 'Best Sellers',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-lock',
    color: 'text-secondary alert-secondary',
  },
  {
    title: 'Branding Feture',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-globe',
    color: 'text-success alert-success',
  },
];

class Service extends Component {
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
    };
    const feedbacksettings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      centerMode: false,
      variableWidth: false,
    };
    return (
      <Fragment>
        <Header />

        <div className="about-wrapper pb-lg--7 pt-lg--7 pt-5 pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 sm-mb-4">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-success mr-1">
                  Our Pricing
                </span>
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 mt-3 d-block lh-3">
                  Explore plan that's <br /> right for your business
                </h2>
                <p className="fw-400 font-xsss lh-28 text-grey-500 mb-4">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
                <a
                  href="/service"
                  className="video-bttn"
                  data-toggle="modal"
                  data-target="#Modalvideo"
                >
                  <img
                    src="https://via.placeholder.com/470x270.png"
                    alt="banner"
                    className="img-fluid rounded-lg"
                  />
                </a>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="row">
                  {iconList.map((value, index) => (
                    <div className="col-lg-6 col-md-6" key={index}>
                      <div className="card mb-4 w-100 border-0 pb-0">
                        <i
                          className={`btn-round-lg ml-0 mb-2 font-lg ${value.color} ${value.icon}`}
                        ></i>
                        <h2 className="fw-700 font-xss text-grey-900 mt-1">
                          {value.title}
                        </h2>
                        <p className="fw-400 font-xsss lh-28 text-grey-500">
                          {value.des}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-wrapper layer-after">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 ">
                <img
                  src="https://via.placeholder.com/600x630.png"
                  alt="banner"
                  className="w-100"
                />
              </div>
              <div className="col-lg-4 offset-lg-1">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 mt-4 text-uppercase rounded-xl ls-2 alert-danger d-inline-block text-danger mr-1">
                  Our feature
                </span>
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 mt-3 d-block lh-3">
                  Explore amazing experiences ever and join us.
                </h2>
                <p className="fw-400 font-xsss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
                <h4 className=" font-xssss fw-600 text-grey-500 mb-3 ">
                  <i className="ti-check font-xssss mr-2 btn-round-xs alert-danger text-danger"></i>{' '}
                  Unlimited views For anyone validating
                </h4>
                <h4 className=" font-xssss fw-600 text-grey-500 mb-3 ">
                  <i className="ti-check font-xssss mr-2 btn-round-xs alert-danger text-danger"></i>{' '}
                  We enjoy building experiences.
                </h4>
                <a
                  href="/service"
                  className="btn border-0 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light mt-3 w150"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="popular-wrapper pb-0 pt-5">
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

        <div className="price-wrap pt-lg--7 pt-5 layer-after ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 sm-mb-4">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-success mr-1">
                  Our Pricing
                </span>
                <h2 className="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">
                  Choose the plan that's right for your business
                </h2>
                <p className="fw-300 font-xssss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
                <div className="custom-control custom-switch pl-0">
                  <p className="fw-600 font-xssss lh-28 text-grey-900 d-inline-block pr-5 mr-3">
                    Bill Monthly
                  </p>
                  <input
                    type="checkbox"
                    className="custom-control-input dark-mode-switch"
                    id="pricecheck"
                  />
                  <label
                    className="custom-control-label bg-success mt-1"
                    htmlFor="pricecheck"
                  ></label>
                  <p className="fw-600 font-xssss lh-28 text-grey-900 d-inline-block">
                    Bill Anually
                  </p>
                </div>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <div className="row">
                  {priceList.map((value, index) => (
                    <div className="col-lg-6" key={index}>
                      <div
                        className={`card p-4 mb-4 border-0 rounded-lg ${value.color}`}
                      >
                        <div className="card-body">
                          <h2
                            className={`font-xsssss fw-700 text-uppercase ls-3 ${value.status}`}
                          >
                            {value.title}
                          </h2>
                          <h1
                            className={`display2-size  fw-700 ${value.status}`}
                          >
                            {value.price}
                          </h1>
                          <h4
                            className={`fw-500 mb-4 lh-24 font-xssss ${value.status}`}
                          >
                            {value.des}
                          </h4>
                          <h4 className={`font-xssss mb-2 ${value.status}`}>
                            <i className={`ti-check mr-2 ${value.status}`}></i>
                            Unlimited views
                          </h4>
                          <h4 className={`font-xssss mb-2 ${value.status}`}>
                            <i className={`ti-check mr-2 ${value.status}`}></i>
                            Everything in Free
                          </h4>
                          <h4 className={`font-xssss mb-4 ${value.status}`}>
                            <i className={`ti-check mr-2 ${value.status}`}></i>{' '}
                            Private share links
                          </h4>
                          <a href="/" className={value.btn}>
                            Subscribe
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="brand-wrapper pb-lg--7 pt-lg--7 pb-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Slider {...brandsettings}>
                  {brandList.map((value, index) => (
                    <div key={index}>
                      <img
                        src={`assets/images/${value.bimg}`}
                        alt="avater"
                        className="w100"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <Footer bgColor="bg-dark" />
      </Fragment>
    );
  }
}

export default Service;
