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

class About extends Component {
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

        <div className="about-wrapper pb-lg--7 pt-lg--7 pt-5 pb-7">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-2 mb-0 mt-3 d-block lh-3">
                  Choose the plan <br /> that's right for your business
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h4 className=" fw-500 mb-4 lh-30 font-xsss text-grey-500 mt-0">
                  Quite simply the best theme weve ever purchased. The
                  customisation and flexibility are superb. Speed is awesome.
                </h4>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <ul className="d-block list-inline float-right-md mb-3">
                  <li className="list-inline-item mr-1">
                    <a href="/about" className="btn-round-md bg-facebook">
                      <i className="font-xs ti-facebook text-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="/about" className="btn-round-md bg-twiiter">
                      <i className="font-xs ti-twitter-alt text-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="/about" className="btn-round-md bg-linkedin">
                      <i className="font-xs ti-linkedin text-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="/about" className="btn-round-md bg-instagram">
                      <i className="font-xs ti-instagram text-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="/about" className="btn-round-md bg-pinterest">
                      <i className="font-xs ti-pinterest text-white"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 mt-3">
                <a
                  href="/about"
                  className="video-bttn"
                  data-toggle="modal"
                  data-target="#Modalvideo"
                >
                  <img
                    src="https://via.placeholder.com/1200x400.png"
                    alt="about"
                    className="img-fluid rounded-lg"
                  />
                </a>
              </div>
              <div className="col-lg-12 mt-5 text-center pt-3">
                <a
                  href="/about"
                  className="ml-1 mr-1 rounded-lg text-primary font-xss border-size-md border-primary fw-600 open-font p-3 w200 btn md-mb-2 mt-3"
                >
                  Learn More
                </a>
                <h3 className="font-xss fw-600 text-grey-500 p-3 d-inline-block d-none-xs">
                  or
                </h3>
                <a
                  href="/about"
                  className="ml-1 mr-1 rounded-lg alert-primary text-primary font-xss border-size-md border-0 fw-600 open-font p-3 w200 btn"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="how-to-work">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-4">
                <img
                  src="https://via.placeholder.com/600x800.png"
                  alt="about"
                  className="rounded-lg img-fluid shadow-xs"
                />
              </div>
              <div className="col-lg-6 offset-lg-1 page-title style1">
                <h2 className="fw-700 text-grey-800 display1-size display2-md-size lh-3 pt-lg--5">
                  Online recharge and pay monthly bill easy way.
                </h2>
                <p className="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0  mt-3 w-75 w-xs-90">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>

                <h4 className="fw-600 font-xs mt-5 mb-2">
                  <i className="ti-check btn-round-xs text-white bg-success mr-2 border"></i>
                  Choose what to do
                </h4>
                <p className="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">
                  Looking for a cozy hotel to stay, a restaurant to eat, a
                  museum to visit or a mall to do some.
                </p>

                <h4 className="fw-600 font-xs mt-4 mb-2">
                  <i className="ti-check btn-round-xs text-white bg-success mr-2 border"></i>
                  Find what you want
                </h4>
                <p className="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">
                  Search and filter hundreds of listings, read reviews, explore
                  photos and find the perfect spot.
                </p>

                <h4 className="fw-600 font-xs mt-4 mb-2">
                  <i className="ti-check btn-round-xs text-white bg-success mr-2 border"></i>
                  Explore amazing code
                </h4>
                <p className="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">
                  Go and have a good time or even make a booking directly from
                  the listing page.
                </p>
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
                            className="w45 float-left mr-3"
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

        <div className="subscribe-wrapper pt-5 pt-lg--7">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card w-100 p-4 p-lg--5 rounded-xxl bg-current border-0">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                      <h2 className="fw-700 text-white display2-size lh-3 mb-2 display2-md-size">
                        Subscribe up to our newsletter
                      </h2>
                    </div>
                    <div className="col-lg-8 text-center">
                      <p className="font-xsss lh-28 text-white mb-0 d-none-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing,
                        elit. Neque facilis corporis perferendis, debitis error
                        exercitationem reiciendis odio, tenetur tempora
                        dignissimos deserunt eius repellat.
                      </p>
                    </div>
                    <div className="col-lg-6 text-center mt-4 mb-3">
                      <div className="form-group icon-right-input style2-input mb-0">
                        <input
                          type="text"
                          placeholder="Enter Email Address"
                          className="form-control style2 rounded-xl bg-greylight border-0 font-xsss fw-500 pl-3"
                        />
                        <i className="feather-mail text-primary font-lg m-1"></i>
                      </div>
                    </div>
                  </div>
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

export default About;
