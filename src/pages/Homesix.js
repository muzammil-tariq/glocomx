import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footertwo from '../components/Footertwo';
import Slider from 'react-slick';
import { Accordion } from 'react-bootstrap';

const featureList = [
  {
    des: 'Complete Python Bootcamp From Zero to Hero in Python',
    tag: 'full time',
    img: 'b-1.png',
  },
  {
    des: 'Complete Python Bootcamp From Zero to Hero in Python',
    tag: 'full time',
    img: 'b-1.png',
  },
  {
    des: 'Java Programming Masterclass for Developers',
    tag: 'full time',
    img: 'b-1.png',
  },
  {
    des: 'The Data Science Course Complete Data Science',
    tag: 'full time',
    img: 'b-1.png',
  },
  {
    des: 'The Data Science Course Complete Data Science',
    tag: 'full time',
    img: 'b-1.png',
  },
  {
    des: 'Fundamentals for Scrum Master and Agile Projects',
    tag: 'full time',
    img: 'b-1.png',
  },
  {
    des: 'Automate the Boring Stuff with Python Programming',
    tag: 'full time',
    img: 'b-1.png',
  },
];
const authorList = [
  {
    img: 'user.png',
    name: 'Kimberley Kelly',
    email: 'support@gmail.com',
    connections: '22.5k',
    follower: '8854',
    followings: '1,334',
  },
  {
    img: 'user.png',
    name: 'Aliqa Macale',
    email: 'support@gmail.com',
    connections: '500+',
    follower: '88.7 k',
    followings: '1,334',
  },
  {
    img: 'user.png',
    name: 'Hendrix Stamp',
    email: 'support@gmail.com',
    connections: '500+',
    follower: '88.7 k',
    followings: '1,334',
  },
  {
    img: 'user.png',
    name: 'Stephen Grider',
    email: 'support@gmail.com',
    connections: '56k',
    follower: '88.7 k',
    followings: '1534',
  },
  {
    img: 'user.png',
    name: 'Mohannad Zitoun',
    email: 'support@gmail.com',
    connections: '3k+',
    follower: '88.7 k',
    followings: '876',
  },
  {
    img: 'user.png',
    name: 'Aliqa Macale',
    email: 'support@gmail.com',
    connections: '500+',
    follower: '88.7 k',
    followings: '1,334',
  },
];
const iconList = [
  {
    title: 'Increase in revenue',
    num: '34M',
    icon: 'feather-hard-drive',
    color: 'text-primary',
    bgcolor: 'alert-primary',
  },
  {
    title: 'Increase in revenue',
    num: '210k',
    icon: 'feather-award',
    color: 'text-success',
    bgcolor: 'alert-success',
  },
  {
    title: 'Increase in revenue',
    num: '40%',
    icon: 'feather-box',
    color: 'text-danger',
    bgcolor: 'alert-danger',
  },
  {
    title: 'Increase in revenue',
    num: '43K',
    icon: 'feather-download',
    color: 'text-primary',
    bgcolor: 'alert-primary',
  },
];

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

const brandList = [
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
];

class Homesix extends Component {
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
        <Header
          divClass="shadow-none pos-fixed position-absolute"
          color="dark"
        />

        <div
          className="banner-wrapper bg-image-cover bg-image-bottomcenter bg-gradiant-top"
          style={{
            backgroundImage: `url("https://via.placeholder.com/1900x950.png")`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 align-items-center d-flex vh-lg--100 sm-mt-7 pt-5 aos-init aos-animate">
                <div className="card w-100 border-0 shadow-lg bg-white p-4 p-md--5">
                  <h2 className="fw-700 text-grey-900 display2-size display2-md-size lh-1 mb-0 mt-0">
                    Explore Course
                  </h2>
                  <h4 className=" fw-500 mb-3 lh-30 font-xsss text-grey-500 mt-2">
                    Quite simply the best theme we’ve ever purchased. The
                    customisation and flexibility are superb.
                  </h4>
                  <div className="form-group mt-0 p-2 mb-0 bg-white rounded-lg">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group icon-input mb-3">
                          <i className="ti-search font-xs text-grey-400"></i>
                          <input
                            type="text"
                            className="style2-input pl-5  w-100 font-xsss mb-0 text-grey-500 fw-500"
                            placeholder="Search online courses.."
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group icon-input mb-3">
                          <i className="ti-package font-xs text-grey-400"></i>
                          <select className="style1-select bg-transparent border-0 pl-5">
                            <option value="">All Categories</option>
                            <option value="Bootstrap">Bootstrap</option>
                            <option value="React">React</option>
                            <option value="Backend">Backend</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group icon-input mb-3">
                          <i className="ti-user font-xs text-grey-400"></i>
                          <input
                            type="text"
                            className="style2-input pl-5  w-100 font-xsss mb-0 text-grey-500 fw-500"
                            placeholder="Author"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <a
                          href="/default-search"
                          className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                        >
                          Search
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-2 col-lg-6 vh-lg--100 align-items-center d-flex pt-5 pb-5">
                <div className="card d-block bg-transparent border-0 pt-5">
                  <a
                    href="/"
                    className="video-bttn default aos-init aos-animate"
                  >
                    <span className="d-none">video</span>
                  </a>
                  <h2 className="fw-700 text-white display3-size display4-lg-size display4-md-size lh-2 mb-4 mt-4 aos-init aos-animate">
                    Buy Elomoas and get access to amazing feature
                    <i className="feather-slack text-success font-xxl"></i>
                  </h2>
                  <p className="fw-300 font-xsss lh-28 text-white aos-init aos-animate">
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dol ad minim
                    veniam, quis nostrud exercitation.Quite simply the best
                    theme we’ve ever purchased.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="price-wrap pt-lg--7 pt-5 pb-5 layer-after ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-success mr-1">
                  Our Partner
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h2 className="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">
                  Choose the plan that's right for your business
                </h2>
              </div>
              <div className="col-lg-6 offset-lg-2 ">
                <h4 className=" fw-500 mb-4 lh-30 font-xsss text-grey-500 pt-lg--5 mt-3">
                  Quite simply the best theme we’ve ever purchased. The
                  customisation and flexibility are superb. Speed is awesome.
                  Not a criticism we can make. Fun to use the theme, easy
                  installation, super easy to use. Excellent work.”
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="brand-wrapper pt-0 pb-lg--7 pb-5">
          <div className="container">
            <div className="row">
              {brandList.map((value, index) => (
                <div
                  key={index}
                  className="col-lg-2 col-md-4 col-xs-6 sm-mb-4 sm-text-center"
                >
                  <img
                    src={`assets/images/${value.bimg}`}
                    alt="avater"
                    className="w100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="how-to-work pb-lg--7 pt-0 pb-5 pt-lg--5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-4">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-danger d-inline-block text-danger mr-1">
                  Trending
                </span>
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block mt-3">
                  Popular Course
                </h2>
                <p className="fw-300 font-xsss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>

            <div className="row">
              {featureList.map((value, index) => (
                <div className="col-lg-6 mb-4 col-xl-3 col-md-6" key={index}>
                  <div className="card w-100 border-0 p-4 bg-white shadow-xss rounded-lg d-block">
                    <h4 className="fw-700 font-xsss mt-2 lh-28 mt-0 text-grey-800 pr-5">
                      {value.des}
                    </h4>
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">
                      {value.tag}
                    </span>
                    <div className="clearfix mb-5"></div>
                    <ul className="memberlist mb-3 ml-0 float-left">
                      <li>
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w30 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w30 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w30 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img
                            src="assets/images/user.png"
                            alt="user"
                            className="w30 d-inline-block rounded-circle"
                          />
                        </a>
                      </li>
                    </ul>
                    <img
                      src={`assets/images/${value.img}`}
                      alt="icon"
                      className="w75 float-right mt-2"
                    />
                    <div className="clearfix mb-0"></div>
                  </div>
                </div>
              ))}

              <div className="col-lg-6 mb-4 col-xl-3 col-md-6">
                <div className="card w-100 border-0 p-5 bg-white shadow-xss rounded-lg d-block text-center">
                  <h2 className="display4-size display4-md-size fw-700 open-font mb-0">
                    43K<span className="font-xxl"></span>
                    <i className="feather-arrow-up-right text-success font-xl"></i>
                  </h2>
                  <h4 className="font-xssss text-grey-500 fw-600 mt-2 mb-3">
                    Total Online Course
                  </h4>
                  <a
                    href="/"
                    className="font-xssss fw-600 text-white p-3 lh-3 w150 btn bg-success d-inline-block mt-3"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="feedback-wrapper pt-lg--7 pb-lg--7 pt-5 bg-image-center"
          style={{
            backgroundImage: `url("https://via.placeholder.com/1900x950.png")`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Slider {...feedbacksettings}>
                  {feedbackList.map((value, index) => (
                    <div key={index} className="py-4 pr-3">
                      <div className="card w-100 border-0 p-4 p-md--5 d-block triangle-after">
                        <h4 className="fw-500 lh-5 font-md font-md-xs mb-3 text-grey-700">
                          {value.des}
                        </h4>
                        <div className="clearfix"></div>
                        <div className="card-body w250 pl-0 pt-0 mt-4 mb-0 pb-0 float-left">
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
            </div>
          </div>
        </div>

        <div className="how-to-work pb-lg--7 pt-lg--7 pt-5 pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-4">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-danger d-inline-block text-danger mr-1">
                  Author
                </span>
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block mt-3">
                  Most Popular Author
                </h2>
                <p className="fw-300 font-xsss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>

            <div className="row">
              {authorList.map((value, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-4 border-0 text-center">
                    <a
                      href="/"
                      className="position-absolute right-0 mr-4 top-0 mt-3"
                    >
                      <i className="ti-more text-grey-500 font-xs"></i>
                    </a>
                    <a
                      href="/"
                      className="ml-auto mr-auto rounded-lg overflow-hidden d-inline-block"
                    >
                      <img
                        src={`assets/images/${value.img}`}
                        alt="icon"
                        className="p-0 w100 shadow-xss"
                      />
                    </a>
                    <h4 className="fw-700 font-xs mt-3 mb-1">
                      {value.name}
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
                          {value.connections}
                          <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                            Connections
                          </span>
                        </h4>
                      </li>
                      <li className="list-inline-item text-center mr-4">
                        <h4 className="fw-700 font-md">
                          {value.follower}
                          <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                            Follower
                          </span>
                        </h4>
                      </li>
                      <li className="list-inline-item text-center">
                        <h4 className="fw-700 font-md">
                          {value.followings}
                          <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                            Followings
                          </span>
                        </h4>
                      </li>
                    </ul>
                    <a
                      href="/"
                      className="mt-3 p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                    >
                      FOLLOW
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="feature-wrap">
          <div className="container">
            <div className="row">
              {iconList.map((value, index) => (
                <div
                  className="col-lg-3 col-md-6 sm-mb-4 text-center"
                  key={index}
                >
                  <span className={`btn-round-lg ${value.bgcolor}`}>
                    <i className={`${value.icon} font-md ${value.color}`}></i>
                  </span>
                  <h2 className="display1-size display2-md-size fw-700 open-font mb-0 mt-2">
                    {value.num}
                  </h2>
                  <h4 className="font-xssss text-grey-500 fw-500 mt-2">
                    {value.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="how-to-work pb-lg--7 pt-5 pb-5 pt-lg--7">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-danger d-inline-block text-danger mr-1">
                  FAQ
                </span>
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block mt-3">
                  Frequently Asked Question
                </h2>
                <p className="fw-300 font-xsss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <Accordion
                  defaultActiveKey="0"
                  className="accordian mb-3 accordian-course"
                >
                  <Accordion.Item
                    eventKey="0"
                    className="accordion-item border-0 mb-3 shadow-none rounded-sm bg-white"
                  >
                    <Accordion.Header className="plus-icon">
                      How do I make a yearly payment?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    className="accordion-item border-0 mb-3 shadow-none rounded-6"
                  >
                    <Accordion.Header className="plus-icon">
                      How this technology works?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="3"
                    className="accordion-item border-0 mb-3 shadow-none rounded-6"
                  >
                    <Accordion.Header className="plus-icon">
                      What is the comunity benefit?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="4"
                    className="accordion-item border-0 mb-3 shadow-none rounded-6"
                  >
                    <Accordion.Header className="plus-icon">
                      Technical or account support
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion className="accordian accordian-course">
                  <Accordion.Item
                    eventKey="5"
                    className="accordion-item border-0 mb-3 shadow-none rounded-6"
                  >
                    <Accordion.Header className="plus-icon">
                      Focus critical developer resources
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="6"
                    className="accordion-item border-0 mb-3 shadow-none rounded-6"
                  >
                    <Accordion.Header className="plus-icon">
                      Improve conversion from international
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <Footertwo />
      </Fragment>
    );
  }
}

export default Homesix;
