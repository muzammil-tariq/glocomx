import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Adminsidebar from '../components/Adminsidebar';
import AdminTopnav from '../components/AdminTopnav';
import Adminfooter from '../components/Adminfooter';
import Pagination from '../components/Pagination';

const productlList = [
  {
    id: '0901',
    name: 'Hurin Seary',
    email: 'marvin@example.com',
    title: 'Complete Python Bootcamp From Zero to Hero in Python ',
    color: 'warning',
    status: 'Pending',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star-disable.png',
    star5: 'star-disable.png',
  },
  {
    id: '2323',
    name: 'Victor Exrixon',
    email: 'leslie@example.com',
    title: 'Complete Python Bootcamp From Zero to Hero in Python ',
    color: 'warning',
    status: 'Pending',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star.png',
    star5: 'star.png',
  },
  {
    id: '1233',
    name: 'Surfiya Zakir',
    email: 'esther@example.com',
    title: 'Java Programming Masterclass for Developers',
    color: 'danger',
    status: 'Canceled',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star.png',
    star5: 'star.png',
  },
  {
    id: '1233',
    name: 'Goria Coast',
    email: 'esther@example.com',
    title: 'The Data Science Course Complete Data Science ',
    color: 'danger',
    status: 'Canceled',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star.png',
    star5: 'star.png',
  },
  {
    id: '2323',
    name: 'Hurin Seary',
    email: 'jenny@example.com',
    title: 'Complete Python Bootcamp From Zero to Hero in Python ',
    color: 'success',
    status: 'Received',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star-disable.png',
    star5: 'star-disable.png',
  },
  {
    id: '0901',
    name: 'Victor Exrixon',
    email: 'marvin@example.com',
    title: 'Fundamentals for Scrum Master and Agile Projects ',
    color: 'warning',
    status: 'Pending',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star-disable.png',
    star5: 'star-disable.png',
  },
  {
    id: '2323',
    name: 'Surfiya Zakir',
    email: 'leslie@example.com',
    title: 'Automate the Boring Stuff with Python Programming',
    color: 'warning',
    status: 'Pending',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star-disable.png',
    star5: 'star-disable.png',
  },
  {
    id: '1233',
    name: 'Goria Coast',
    email: 'esther@example.com',
    title: 'The Data Science Course Complete Data Science ',
    color: 'danger',
    status: 'Canceled',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star.png',
    star5: 'star.png',
  },
  {
    id: '1233',
    name: 'Goria Coast',
    email: 'esther@example.com',
    title: 'Complete Python Bootcamp From Zero to Hero in Python ',
    color: 'danger',
    status: 'Canceled',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star.png',
    star5: 'star.png',
  },
  {
    id: '2323',
    name: 'Hurin Seary',
    email: 'jenny@example.com',
    title: 'Fundamentals for Scrum Master and Agile Projects ',
    color: 'success',
    status: 'Received',
    star1: 'star.png',
    star2: 'star.png',
    star3: 'star.png',
    star4: 'star.png',
    star5: 'star.png',
  },
];

class Adminreview extends Component {
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
                      <div className="card-body d-flex p-4 pb-0">
                        <h4 className="font-xss text-grey-800 mt-3 fw-700">
                          Review
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
                                  Email
                                </th>
                                <th className="border-0" scope="col">
                                  Review
                                </th>
                                <th className="border-0" scope="col">
                                  Status
                                </th>

                                <th scope="col" className="text-end border-0">
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
                                  <td>
                                    <b>{value.title}</b>
                                  </td>

                                  <td>{value.name}</td>
                                  <td>{value.email}</td>
                                  <td>
                                    {value.star1 ? (
                                      <img
                                        src={`assets/images/${value.star1}`}
                                        alt="icon"
                                        className="float-start mr-1 w15"
                                      />
                                    ) : (
                                      ''
                                    )}
                                    {value.star2 ? (
                                      <img
                                        src={`assets/images/${value.star2}`}
                                        alt="icon"
                                        className="float-start mr-1 w15"
                                      />
                                    ) : (
                                      ''
                                    )}
                                    {value.star3 ? (
                                      <img
                                        src={`assets/images/${value.star3}`}
                                        alt="icon"
                                        className="float-start mr-1 w15"
                                      />
                                    ) : (
                                      ''
                                    )}
                                    {value.star4 ? (
                                      <img
                                        src={`assets/images/${value.star4}`}
                                        alt="icon"
                                        className="float-start mr-1 w15"
                                      />
                                    ) : (
                                      ''
                                    )}
                                    {value.star4 ? (
                                      <img
                                        src={`assets/images/${value.star4}`}
                                        alt="icon"
                                        className="float-start mr-1 w15"
                                      />
                                    ) : (
                                      ''
                                    )}
                                  </td>
                                  <td>
                                    <span
                                      className={`badge rounded-pill font-xsssss fw-700 pl-3 pr-3 lh-24 text-uppercase rounded-3 ls-2 alert-${value.color}`}
                                    >
                                      {value.status}
                                    </span>
                                  </td>
                                  <td className="product-remove text-end">
                                    <a href="/admin-review">
                                      <i className="feather-edit me-1 font-xs text-grey-500"></i>
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

export default Adminreview;
