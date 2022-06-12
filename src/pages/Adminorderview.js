import React, { Component, Fragment } from 'react';
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
];

class Adminorderview extends Component {
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
                  <div className="col-lg-12">
                    <div className="card border-0 mt-2 rounded-lg">
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <div className="card-body d-block p-5 pb-4 text-center">
                            <h4 className="mb-5 font-xss fw-600 text-grey-500">
                              Order ID:
                              <b className="text-grey-700"> 3424324GHD32 </b>
                            </h4>
                            <div
                              className="timeline-steps aos-init aos-animate"
                              data-aos="fade-up"
                            >
                              <div className="timeline-step active">
                                <div className="timeline-content">
                                  <div className="inner-circle"></div>
                                  <p className="h6 text-grey-500 fw-600 font-xsssss mt-3 mb-0">
                                    Aug 13, 2022
                                  </p>
                                  <p className="font-xssss fw-600 text-grey-900 mb-0 mb-lg-0">
                                    Order Received
                                  </p>
                                </div>
                              </div>
                              <div className="timeline-step active">
                                <div className="timeline-content">
                                  <div className="inner-circle"></div>
                                  <p className="h6 text-grey-500 fw-600 font-xsssss mt-3 mb-0">
                                    Aug 13, 2022
                                  </p>
                                  <p className="font-xssss fw-600 text-grey-900 mb-0 mb-lg-0">
                                    Order Processing
                                  </p>
                                </div>
                              </div>
                              <div className="timeline-step active">
                                <div className="timeline-content">
                                  <div className="inner-circle"></div>
                                  <p className="h6 text-grey-500 fw-600 font-xsssss mt-3 mb-0">
                                    Aug 13, 2022
                                  </p>
                                  <p className="font-xssss fw-600 text-grey-900 mb-0 mb-lg-0">
                                    Payment Done
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card-body d-flex p-4 pb-0">
                            <h4 className="font-xss text-grey-800 mt-3 fw-700">
                              Order List
                            </h4>
                            <select
                              className="form-select ml-auto float-right border-0 font-xssss fw-600 text-grey-700 bg-transparent"
                              aria-label="Default select example"
                            >
                              <option>Sort by latest</option>
                              <option value="1">Sort by popularity</option>
                              <option value="2">
                                Sort by price : low to high
                              </option>
                              <option value="3">
                                Sort by price : high to low
                              </option>
                            </select>
                          </div>

                          <div className="card-body p-0 mb-5">
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

                                    <th
                                      scope="col"
                                      className="text-right border-0"
                                    >
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
                                            className="w100 d-inline-block p-0 bg-greylight rounded-lg overflow-hidden"
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
                                      <td className="product-remove text-right">
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

                          <div className="row mb-5">
                            <div className="col-lg-6">
                              <h4 className="font-xsss text-grey-800 mb-4 fw-700">
                                Delivey Addresss
                              </h4>
                              <div className="card-body bg-lightblue p-4 rounded-lg">
                                <h4 className="fw-700 mt-2 font-xss text-grey-900 d-flex mb-0">
                                  Hurin Seary
                                  <span className="bg-primary text-white font-xsssss fw-600 ls-3 p-2 rounded-lg ml-auto">
                                    HOME
                                  </span>
                                </h4>
                                <h6 className="fw-500 font-xssss text-grey-600 lh-24 mb-0">
                                  Manikpur, Thakurpara PO Ital Gacha 2 no
                                  Airport Gate <br /> Thakur Para United Club,
                                  Kolkata <br /> West Bengal - 700079
                                </h6>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <h4 className="font-xsss text-grey-800 mb-4 fw-700">
                                Payment Method
                              </h4>
                              <div className="card-body bg-greylight rounded-lg p-3 pb-4">
                                <img
                                  src="assets/images/b-9.png"
                                  alt="card"
                                  className="w-55 d-inline-block float-left mr-3 mb-5"
                                />
                                <h4 className="fw-600 font-xsss mt-2 mb-1 text-grey-600">
                                  Paypal
                                </h4>
                                <p className="fw-600 font-xssss mt-0 mb-1 text-grey-600">
                                  4321 4432 6565 ****
                                </p>
                                <h6 className="fw-500 font-xssss text-grey-600 lh-24 mb-0">
                                  Thakur Para United Club, Kolkata <br /> West
                                  Bengal - 700079
                                </h6>
                              </div>
                            </div>
                          </div>
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

export default Adminorderview;
