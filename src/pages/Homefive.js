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

const classesList = [
  {
    imageUrl: 'user.png',
    title: 'Bootstrap',
    num: '32 Course',
    bg: '#fcf1eb',
  },
  {
    imageUrl: 'user.png',
    title: 'HTML',
    num: '54 Course',
    bg: '#fff9eb',
  },
  {
    imageUrl: 'user.png',
    title: 'Jquery',
    num: '76 Course',
    bg: '#e5f4fb',
  },
  {
    imageUrl: 'user.png',
    title: 'SASS',
    num: '76 Course',
    bg: '#dcf4f8',
  },
  {
    imageUrl: 'user.png',
    title: 'React',
    num: '23 Course',
    bg: '#fcf1eb',
  },

  {
    imageUrl: 'user.png',
    title: 'JAVA',
    num: '78 Course',
    bg: '#fff9eb',
  },
  {
    imageUrl: 'user.png',
    title: 'Python',
    num: '65 Course',
    bg: '#e5f4fb',
  },
  {
    imageUrl: 'user.png',
    title: 'MongoDB',
    num: '11 Course',
    bg: '#fcf1eb',
  },
  {
    imageUrl: 'user.png',
    title: 'Bootstrap',
    num: '32 Course',
    bg: '#fcf1eb',
  },
  {
    imageUrl: 'user.png',
    title: 'Bootstrap',
    num: '32 Course',
    bg: '#fff9eb',
  },
];

const feedbackList = [
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'Digital Marketing Executive',
    color: 'bg-warning',
    icon: 'ti-quote-right',
    des: 'Quite simply the best theme weve ever purchased. The customisation and flexibility are superb. Speed is awesome. Not a criticism we can make. Fun to use the theme, easy installation, super easy to use. Excellent work."',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'Digital Marketing Executive',
    color: 'bg-danger',
    icon: 'feather-slack',
    des: 'Quite simply the best theme weve ever purchased. The customisation and flexibility are superb. Speed is awesome. Not a criticism we can make. Fun to use the theme, easy installation, super easy to use. Excellent work."',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'Digital Marketing Executive',
    color: 'bg-twiiter',
    icon: 'ti-twitter-alt',
    des: 'Quite simply the best theme weve ever purchased. The customisation and flexibility are superb. Speed is awesome. Not a criticism we can make. Fun to use the theme, easy installation, super easy to use. Excellent work."',
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

class Homefive extends Component {
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
    const categorysettings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };
    const feedbacksettings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: false,
    };
    return (
      <Fragment>
        <Header
          divclassName="shadow-none pos-fixed position-absolute"
          color="light"
        />

        <div
          className="banner-wrapper bg-image-cover bg-image-bottomcenter"
          style={{
            backgroundImage: `url("https://via.placeholder.com/1900x950.png")`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 vh-lg--100 align-items-center d-flex sm-mt-7">
                <div className="card w-100 border-0 bg-transparent d-block sm-mt-7">
                  <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-primary d-inline-block text-primary mb-3">
                    Blog
                  </span>
                  <h2 className="fw-700 text-grey-900 display4-size display4-lg-size display4-md-size lh-1 mb-0 os-init aos-init aos-animate">
                    Ultimate experiences with story, emotion and purpose{' '}
                    <i className="feather-slack text-success font-xxl"></i>
                  </h2>
                  <h4 className="fw-500 mb-4 lh-30 font-xsss text-grey-500 mt-3 os-init aos-init aos-animate">
                    Quite simply the best theme we’ve ever purchased. The
                    customisation and flexibility are superb. Speed is awesome.
                    Not a criticism we can make. Fun to use the theme, easy
                    installation, super easy to use. Excellent work.”
                  </h4>
                  <a
                    href="/"
                    className="btn border-0 w200 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light mt-1 os-init aos-init aos-animate"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-6 align-items-center d-flex vh-lg--100 ">
                <img
                  src="https://via.placeholder.com/720x550.png"
                  alt="icon"
                  className="pt-5 d-none d-lg-block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="search-wrap position-relative" style={{ top: '-50px' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-4">
                <div className="card rounded-lg p-3 border-0 bg-no-repeat bg-white shadow-lg">
                  <div className="card-body w-100 p-0">
                    <div className="form-group mt-0 p-2 mb-0 bg-white rounded-lg">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="form-group icon-input mb-0">
                            <i className="ti-search font-xs text-grey-400"></i>
                            <input
                              type="text"
                              className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500"
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
              </div>
            </div>
          </div>
        </div>

        <div className="category-wrapper pb-lg--7 pb-5">
          <div className="container">
            <div className="row">
              <div className="page-title style1 col-xl-4 col-lg-4 col-md-6 text-left">
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 mt-1 d-block lh-3">
                  Browse <br /> by Category
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mt-4 ">
                <Slider {...categorysettings}>
                  {classesList.map((value, index) => (
                    <div
                      key={index}
                      className="card cat-card-hover mr-1 w140 border-0 p-0 text-center"
                    >
                      <div
                        className="card-body p-4 ml-0 rounded-lg"
                        style={{ background: `${value.bg}` }}
                      >
                        <a href="/" className="btn-round-xl bg-white">
                          <img
                            src={`assets/images/${value.imageUrl}`}
                            alt="icon"
                            className="p-2 w-100"
                          />
                        </a>
                        <h4 className="fw-600 font-xsss mt-3 mb-0">
                          {value.title}
                          <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                            {value.num}
                          </span>
                        </h4>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="how-to-work pb-lg--7 pt-3">
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

        <div className="feature-wrapper pt-lg--7 pt-7">
          <div className="container">
            <div className="row justify-content-center"></div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Slider {...feedbacksettings}>
                  {feedbackList.map((value, index) => (
                    <div key={index} className="text-center">
                      <span className={`btn-round-xxxl mb-4 ${value.color}`}>
                        <i className={`font-xl text-white ${value.icon}`}></i>
                      </span>
                      <h4 className="fw-500 lh-5 font-md mb-3 text-grey-700">
                        {value.des}
                      </h4>
                      <div className="clearfix"></div>
                      <div className="card-body pl-0 pt-0 mt-4 mb-5 pb-4 d-block">
                        <img
                          src={`assets/images/${value.imageUrl}`}
                          alt="user"
                          className="w55 mr-auto ml-auto mb-2 rounded-circle"
                        />
                        <h4 className="text-grey-900 fw-700 font-xsss mb-1 pt-1">
                          {value.name}
                        </h4>
                        <h5 className="font-xssss fw-500 mb-1 text-grey-500">
                          {value.status}
                        </h5>
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

        <div className="brand-wrapper pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Slider {...brandsettings}>
                  {brandList.map((value, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={`assets/images/${value.bimg}`}
                        alt="avater"
                        className="w75 ml-auto mr-auto"
                      />
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

export default Homefive;
