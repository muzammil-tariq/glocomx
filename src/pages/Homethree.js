import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Upperheader from '../components/Upperheader';
import Slider from 'react-slick';
import Footertwo from '../components/Footertwo';

const feedbackList = [
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'Digital Marketing Executive',
    des: 'Quite simply the best theme we’ve ever purchased. The customisation and flexibility are superb. Speed is awesome. Not a criticism we can make. Fun to use the theme, easy installation, super easy to use. Excellent work.”',
  },
  {
    imageUrl: 'user.png',
    name: 'Thomas Smith',
    status: 'Digital Marketing Executive',
    des: 'Quite simply the best theme we’ve ever purchased. The customisation and flexibility are superb. Speed is awesome. Not a criticism we can make. Fun to use the theme, easy installation, super easy to use. Excellent work.”',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    status: 'Digital Marketing Executive',
    des: 'Quite simply the best theme we’ve ever purchased. The customisation and flexibility are superb. Speed is awesome. Not a criticism we can make. Fun to use the theme, easy installation, super easy to use. Excellent work.”',
  },
];

const serviceList = [
  {
    img: 'blog.png',
    title: 'Blazing Performance',
    des: 'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation',
  },
  {
    img: 'blog.png',
    title: 'Best Feedback',
    des: 'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation',
  },
  {
    img: 'blog.png',
    title: 'Quality Code',
    des: 'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation',
  },
];

const featureList = [
  {
    icon: 'feather-layers text-success',
    title: 'Automatic Updates',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
  },
  {
    icon: 'feather-award text-danger',
    title: 'Blazing Performance',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
  },
  {
    icon: 'feather-cpu text-info',
    title: 'Free Updates',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
  },
  {
    icon: 'feather-hard text-warning',
    title: 'Unlimited Layouts',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
  },
  {
    icon: 'feather-lock text-secondary',
    title: 'Best Sellers',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
  },
  {
    icon: 'feather-globe text-success',
    title: 'Branding Feture',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
  },
];

const priceList = [
  {
    color: 'border-primary',
    price: '49',
    title: 'Starter',
    des: 'For anyone validating Framer as a professional prototyping tool.',
    status: 'text-primary alert-primary',
  },
  {
    color: 'border-success',
    price: '99',
    title: 'Standard',
    des: 'For anyone validating Framer as a professional prototyping tool.',
    status: 'alert-success text-success',
  },
  {
    color: 'border-warning',
    price: '199',
    title: 'Premium',
    des: 'For anyone validating Framer as a professional prototyping tool.',
    status: 'alert-warning text-warning',
  },
];

class About extends Component {
  render() {
    const feedbacksettings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: false,
      autoplay: true,
    };
    return (
      <Fragment>
        <div className="main-wrap pattern-layer">
          <Upperheader />
          <Header divClass="shadow-none layer-after  pos-fixed position-absolute" />

          <div className="banner-wrapper vh-md-100 layer-after app-shape">
            <div className="container">
              <div className="row">
                <div className="col-xxxl-7 col-xl-7 vh-md-100 pt-7 pb-7 align-items-center d-flex">
                  <div className="card w-100 border-0 bg-transparent">
                    <h2 className="fw-700 text-grey-900 display5-size display4-xs-size lh-1 mb-0 aos-init aos-animate">
                      Explore <br /> analyze about our
                      <span className="text-current">awesome</span> feature
                      <i className="feather-slack text-success font-xxl"></i>
                    </h2>
                    <div className="form-group mt-4 p-3 shadow-lg p-2 bg-white rounded-lg aos-init aos-animate">
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="form-group icon-input mb-0">
                            <i className="ti-email font-xs text-grey-400"></i>
                            <input
                              type="text"
                              className="style1-input bg-transparent border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500"
                              placeholder="Enter email address"
                            />
                          </div>
                        </div>

                        <div className="col-lg-5">
                          <a
                            href="/"
                            className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <ul className="memberlist mt-4 mb-2 ml-0 aos-init aos-animate">
                      <li className="w20">
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w40 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>
                      <li className="w20">
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w40 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>
                      <li className="w20">
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w40 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>
                      <li className="w20">
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w40 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>
                      <li className="w20">
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w40 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>
                      <li className="w20">
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w40 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>

                      <li className="pl-4 w-auto">
                        <a href="/" className="fw-500 text-grey-500 font-xssss">
                          Member already downloaded
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxxl-5 col-xl-4 vh-md-100 align-items-center d-flex ">
                  <div className="card w-100 border-0 bg-transparent text-center d-block">
                    <img
                      src="https://via.placeholder.com/470x750.png"
                      alt="app-bg"
                      className="w-100 d-none d-lg-block aos-init aos-animate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-wrapper layer-after pb-lg--7 pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-xl-10 col-lg-12 pb-lg--5"
                  style={{ top: '-50px', position: 'relative' }}
                >
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-xss-6">
                      <h2 className="display4-size display4-md-size fw-700 open-font text-warning mb-0">
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
                      <h2 className="display4-size display4-md-size fw-700 open-font text-danger mb-0">
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
                      <h2 className="display4-size display4-md-size fw-700 open-font text-success mb-0">
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
                      <h2 className="display4-size display4-md-size fw-700 open-font text-primary mb-0">
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
              <div className="row">
                {featureList.map((value, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="card mb-4 w-100 border-0 pt-4 pb-4 pr-4 pl-7 shadow-xss rounded-lg aos-init aos-animate">
                      <i
                        className={`feather-layers  font-xl position-absolute left-15 ml-2 ${value.icon}`}
                      ></i>
                      <h2 className="fw-700 font-xss text-grey-900 mt-1">
                        {value.title}
                      </h2>
                      <p className="fw-500 font-xssss lh-24 text-grey-500 mb-0">
                        {value.des}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="service-wrapper layer-after">
            <div className="container">
              <div className="row justify-content-center">
                <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                  <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-warning d-inline-block text-warning mr-1">
                    Feedback
                  </span>
                  <h2 className="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">
                    We help not one, <br /> But many Companies
                  </h2>
                  <p className="fw-300 font-xssss lh-28 text-grey-500">
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dol ad minim
                    veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>
              <div className="row">
                {serviceList.map((value, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="card w-100 border-0 p-4 text-center d-block shadow-xss rounded-xxl">
                      <div className="card-image p-4 bg-lightblue rounded-xxl">
                        <img
                          src={`assets/images/${value.img}`}
                          alt="service"
                          className="img-fluid p-4"
                        />
                      </div>
                      <h2 className="font-md fw-700 text-grey-900 mt-4 mb-0">
                        {value.title}
                      </h2>
                      <p className="fw-300 font-xssss lh-28 text-grey-500 p-3">
                        {value.des}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="price-wrap pb-lg--7 pt-lg--7 pb-5 pt-5 layer-after ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                  <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-success mr-1">
                    Our Pricing
                  </span>
                  <h2 className="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">
                    Choose the plan that's right for your business
                  </h2>
                  <p className="fw-300 font-xssss lh-28 text-grey-500">
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dol ad minim
                    veniam, quis nostrud exercitation
                  </p>
                  <div className="custom-control custom-switch pl-0">
                    <p className="fw-600 font-xssss lh-28 text-grey-900 d-inline-block pr-5 mr-3">
                      Bill Monthly
                    </p>
                    <input
                      type="checkbox"
                      className="custom-control-input dark-mode-switch"
                      id="price"
                    />
                    <label
                      className="custom-control-label bg-success mt-1"
                      htmlFor="price"
                    ></label>
                    <p className="fw-600 font-xssss lh-28 text-grey-900 d-inline-block">
                      Bill Anually
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-xl-10">
                  <div className="row">
                    {priceList.map((value, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card border-0 mb-4 bg-white shadow-xss shadow-xss rounded-lg">
                          <div
                            className={`card-body p-5 border-top-lg border-size-lg ${value.color}`}
                          >
                            <h1 className="display2-size fw-700">
                              € {value.price}
                              <span className="font-xssss text-grey-500 ml-2">
                                / month
                              </span>
                            </h1>
                            <h2 className=" font-xs fw-700 mt-3 mb-3">
                              {value.title}
                            </h2>
                            <h4 className=" fw-500 mb-4 lh-24 font-xssss text-grey-500">
                              {value.des}
                            </h4>
                            <h4 className=" font-xssss fw-600 text-grey-500 mb-3 ">
                              <i
                                className={`ti-check font-xssss mr-2 btn-round-xs ${value.status}`}
                              ></i>
                              Unlimited views
                            </h4>
                            <h4 className=" font-xssss fw-600 text-grey-500 mb-3 ">
                              <i
                                className={`ti-check font-xssss mr-2 btn-round-xs ${value.status}`}
                              ></i>
                              Everything in Free
                            </h4>
                            <h4 className=" font-xssss fw-600 text-grey-500 mb-4">
                              <i
                                className={`ti-check font-xssss mr-2 btn-round-xs ${value.status}`}
                              ></i>
                              Private share links
                            </h4>
                            <a
                              href="/"
                              className="btn btn-block border-0 w-100 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light mt-3"
                            >
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

          <div className="feedback-wrapper layer-after pb-lg--7 pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                  <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-warning d-inline-block text-warning mr-1">
                    Feedback
                  </span>
                  <h2 className="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">
                    What our customer are say
                  </h2>
                  <p className="fw-300 font-xssss lh-28 text-grey-500">
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dol ad minim
                    veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <Slider {...feedbacksettings}>
                    {feedbackList.map((value, index) => (
                      <div key={index} className="mb-5">
                        <div className="card w-100 border-0  d-block triangle-after">
                          <h4 className="fw-500 lh-5 font-lg mb-3 text-grey-700">
                            {value.des}
                          </h4>
                          <div className="clearfix"></div>
                          <div className="card-body w250 pl-0 pt-0 mt-4 mb-0 pb-0 float-left">
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
                          <div className="star float-right text-right mt-4 pt-1 mb-0">
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w15 float-left mr-2"
                            />
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w15 float-left mr-2"
                            />
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w15 float-left mr-2"
                            />
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w15 float-left mr-2"
                            />
                            <img
                              src="assets/images/star.png"
                              alt="star"
                              className="w15 float-left mr-2"
                            />
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <img
                    src="https://via.placeholder.com/470x450.png"
                    alt="avater"
                    className="img-fluid pr-5"
                  />
                </div>
              </div>
            </div>
          </div>

          <Footertwo />
        </div>
      </Fragment>
    );
  }
}

export default About;
