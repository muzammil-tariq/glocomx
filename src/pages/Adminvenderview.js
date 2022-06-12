import React, { Component, Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Modal, Button } from 'react-bootstrap';

import Adminsidebar from '../components/Adminsidebar';
import AdminTopnav from '../components/AdminTopnav';
import Adminfooter from '../components/Adminfooter';

const productlList = [
  {
    id: '0901',
    name: 'Complete Python Bootcamp From Zero to Hero in Python ',
    imageUrl: 'course.png',
    price: '240',
    color: 'warning',
    status: 'alert-warning text-warning',
    tag: 'Python',
    lesson: '32 ',
  },
  {
    id: '2323',
    name: 'Complete Python Bootcamp From Zero to Hero in Python ',
    imageUrl: 'course.png',
    price: '40',
    color: 'warning',
    status: 'alert-danger text-danger',
    tag: 'Desinger',
    lesson: '24 ',
  },
  {
    id: '1233',
    name: 'Java Programming Masterclass for Developers',
    imageUrl: 'course.png',
    price: '60',
    color: 'danger',
    status: 'alert-success text-success',
    tag: 'Bootstrap',
    lesson: '14 ',
  },
  {
    id: '1233',
    name: 'The Data Science Course Complete Data Science ',
    imageUrl: 'course.png',
    price: '370',
    color: 'danger',
    status: 'alert-danger text-danger',
    tag: 'Develop',
    lesson: '23 ',
  },
  {
    id: '2323',
    name: 'Complete Python Bootcamp From Zero to Hero in Python ',
    imageUrl: 'course.png',
    price: '450',
    color: 'success',
    status: 'alert-danger text-danger',
    tag: 'Desinger',
    lesson: '24 ',
  },
  {
    id: '0901',
    name: 'Fundamentals for Scrum Master and Agile Projects ',
    imageUrl: 'course.png',
    price: '670',
    color: 'warning',
    status: 'alert-warning text-warning',
    tag: 'Python',
    lesson: '32 ',
  },
  {
    id: '2323',
    name: 'Automate the Boring Stuff with Python Programming',
    imageUrl: 'course.png',
    price: '760',
    color: 'warning',
    status: 'alert-primary text-primary',
    tag: 'Bootstrap',
    lesson: '14 ',
  },
  {
    id: '1233',
    name: 'The Data Science Course Complete Data Science ',
    imageUrl: 'course.png',
    price: '370',
    color: 'danger',
    status: 'alert-danger text-danger',
    tag: 'Develop',
    lesson: '23 ',
  },
];

const lineChart = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  series: [
    {
      name: '',
      data: [
        35, 16, 34, 36, 18, 35, 26, 34, 26, 18, 36, 18, 36, 34, 36, 18, 16, 18,
      ],
    },
    {
      name: '',
      data: [12, 24, 12, 11, 7, 12, 34, 12, 11, 7, 11, 7, 34, 12, 11, 7, 11, 7],
    },
  ],
  options: {
    chart: {
      height: 100,
      type: 'bar',
      // width:'50%',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      columnWidth: '40%',
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  },
};

class Adminvenderview extends Component {
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
                  <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                    <div className="card w-100 shadow-xss rounded-10 overflow-hidden border-0 mb-3 mt-0 p-4">
                      <div className="card-body d-block pt-4 text-center">
                        <figure className="avatar position-relative w-110 z-index-1 w100 z-index-1 mr-auto ml-auto">
                          <img
                            src="assets/images/user.png"
                            alt="avater"
                            className="p-3 bg-greylight rounded-lg w-100"
                          />
                        </figure>
                        <h4 className="font-xs ls-1 fw-700 text-grey-900">
                          React with Redux
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            32 Courses
                          </span>
                        </h4>
                      </div>
                      <div className="card-body d-flex align-items-center justify-content-center pl-1 pr-1 pt-0">
                        <a
                          href="/admin-customerview"
                          className="bg-success text-white rounded-xl btn-cart w125 d-inline-block text-center font-xsssss p-3 fw-700 ls-3 text-uppercase"
                        >
                          Add Friend
                        </a>
                        <a
                          href="/admin-customerview"
                          className="bg-greylight btn-round-lg ml-1 rounded-3 text-grey-700"
                        >
                          <i className="feather-mail font-md"></i>
                        </a>
                        <a
                          href="/admin-customerview"
                          className="bg-greylight theme-white-bg btn-round-lg ml-1 rounded-3 text-grey-700"
                        >
                          <i className="ti-more font-md"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-xxl-9 col-lg-8">
                    <div className="card border-0 p-3 mt-0 rounded-10">
                      <div className="card-body d-flex">
                        <h4 className="font-xsss text-grey-800 mb-1 mt-0 fw-700">
                          Sales Statistics
                        </h4>
                        <h5 className="ml-auto mr-3 mt-0 text-grey-600 font-xssss fw-700">
                          <span className="btn-round-xss bg-warning mr-1"></span>
                          Sale
                        </h5>
                        <h5 className="mt-0 text-grey-600 font-xssss fw-700">
                          <span className="btn-round-xss bg-success mr-1"></span>
                          Earn
                        </h5>
                      </div>
                      <Chart
                        options={lineChart.options}
                        series={lineChart.series}
                        type="bar"
                        width="100%"
                        height="220"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="card border-0 mt-0 rounded-10">
                      <div className="card-body d-flex p-4 pb-0">
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
                      <div className="card-body p-4">
                        <div className="table-responsive">
                          <table className="table table-admin mb-0">
                            <thead className="bg-greylight rounded-10 ovh">
                              <tr>
                                <th className="border-0"></th>
                                <th className="border-0"></th>
                                <th className="border-0" scope="col">
                                  Name
                                </th>
                                <th className="border-0" scope="col">
                                  Price
                                </th>
                                <th className="border-0" scope="col">
                                  Tag
                                </th>
                                <th className="border-0" scope="col">
                                  Lesson
                                </th>
                                <th scope="col" className="text-right border-0">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {productlList.map((value, index) => (
                                <tr key={index}>
                                  <td>
                                    <div className="form-check mt-1">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="option1"
                                      />
                                      <label className="text-grey-500 font-xssss"></label>
                                    </div>
                                  </td>
                                  <td className="product-thumbnail text-start ps-0">
                                    <a
                                      href="/admin-productadd"
                                      className="video-bttn small-icon"
                                    >
                                      <img
                                        src={`assets/images/${value.imageUrl}`}
                                        alt="product"
                                        className="w125 d-inline-block p-0 bg-greylight rounded-lg overflow-hidden"
                                      />
                                    </a>
                                  </td>

                                  <td>
                                    <b>{value.name}</b>
                                  </td>

                                  <td>
                                    $ <b>{value.price}</b>
                                  </td>
                                  <td>
                                    <span
                                      className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}
                                    >
                                      {value.tag}
                                    </span>
                                  </td>
                                  <td>
                                    <b>{value.lesson}</b>
                                  </td>
                                  <td className="product-remove text-right">
                                    <a href="/admin-productadd">
                                      <i className="feather-edit mr-1 font-xs text-grey-500"></i>
                                    </a>
                                    <Button
                                      className="bg-transparent border-0"
                                      onClick={() => {
                                        this.handleModel();
                                      }}
                                    >
                                      <i className="ti-trash  font-xs text-danger"></i>
                                    </Button>
                                    <Modal
                                      {...this.props}
                                      size="sm"
                                      aria-labelledby="contained-modal-title-vcenter"
                                      centered
                                      show={this.state.location}
                                    >
                                      <Button
                                        onClick={() => {
                                          this.handleModel();
                                        }}
                                        className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"
                                      ></Button>
                                      <Modal.Body className="text-center p-4">
                                        <i className="ti-info-alt text-warning display4-size"></i>
                                        <p className="text-grey-500 font-xsss mt-3 mb-4">
                                          Are you sure you want to delete
                                          product?
                                        </p>

                                        <Button
                                          onClick={() => {
                                            this.handleModel();
                                          }}
                                          className="border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-white bg-danger font-xssss text-uppercase fw-600 ls-3"
                                        >
                                          Yes, delete!
                                        </Button>
                                        <Button
                                          onClick={() => {
                                            this.handleModel();
                                          }}
                                          className="border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-grey-600 bg-greylight font-xssss text-uppercase fw-600 ls-3 ms-1"
                                        >
                                          No, cancle!
                                        </Button>
                                      </Modal.Body>
                                    </Modal>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
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

export default Adminvenderview;
