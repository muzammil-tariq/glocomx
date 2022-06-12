import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Upperheader from '../components/Upperheader';
import Footer from '../components/Footer';
import Searcharea from '../components/Searcharea';
import Pagination from '../components/Pagination';

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

class Coursesgridtwo extends Component {
  render() {
    return (
      <Fragment>
        <Upperheader />
        <Header />

        <div className="blog-page pt-lg--7 pb-lg--7 pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-4">
                <Searcharea />
              </div>
              <div className="col-lg-12 pt-2 mb-4">
                <h2 className="fw-400 font-lg">
                  Search <b>Results</b>
                  <span className="fw-500 ml-2 text-grey-500 font-xssss">
                    ( 23 course is found )
                  </span>
                  <Link to="/" className="float-right">
                    <i className="feather-edit text-grey-500 font-xs"></i>
                  </Link>
                </h2>
              </div>

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
                      <div className="progress mt-4 h5 w-100 mb-3">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow={value.apply}
                          aria-valuemin="0"
                          aria-valuemax={value.apply}
                          style={{ width: `96%` }}
                        ></div>
                      </div>
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

              <div className="col-lg-12">
                <Pagination divClass="pagination justify-content-center d-flex pt-5" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default Coursesgridtwo;
