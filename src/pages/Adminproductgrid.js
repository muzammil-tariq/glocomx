import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Adminsidebar from '../components/Adminsidebar';
import AdminTopnav from '../components/AdminTopnav';
import Adminfooter from '../components/Adminfooter';
import Pagination from '../components/Pagination';

const productList = [
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

class Adminproductgrid extends Component {
  constructor() {
    super();
    this.state = {
      location: false,
    };
  }
  handleModel() {
    this.setState({ location: !this.state.location });
  }
  render() {
    return (
      <Fragment>
        <div id="wrapper">
          <Adminsidebar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <AdminTopnav />

              <div className="container px-3 py-4">
                <div className="row">
                  <div className="col-lg-12 mt-4">
                    <div className="card border-0 mt-2 rounded-10">
                      <div className="card-body d-flex pt-4 px-4 pb-0">
                        <h4 className="font-xss text-grey-800 mt-3 fw-700">
                          Products List
                        </h4>
                        <select
                          className="form-select ml-auto float-right border-0 font-xssss fw-600 text-grey-700 bg-transparent"
                          aria-label="Default select example"
                        >
                          <option>Sort by latest</option>
                          <option defaultValue="1">Sort by popularity</option>
                          <option defaultValue="2">
                            Sort by price : low to high
                          </option>
                          <option defaultValue="3">
                            Sort by price : high to low
                          </option>
                        </select>
                      </div>
                      <div className="card-body p-0">
                        <div className="row  rounded-6 m-0">
                          {productList.map((value, index) => (
                            // Start Single Demo
                            <div
                              key={index}
                              className="col-lg-3 col-md-4 col-sm-6 p-4 rounded-0 posr"
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
                                    <span className="font-xsssss">$</span>{' '}
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
                                </div>
                              </div>
                            </div>

                            // End Single Demo
                          ))}
                        </div>
                      </div>
                    </div>
                    <Pagination divClass="pagination justify-content-center mt-5" />
                  </div>
                </div>
              </div>

              <Adminfooter />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Adminproductgrid;
