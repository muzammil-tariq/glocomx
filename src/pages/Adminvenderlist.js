import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Adminsidebar from '../components/Adminsidebar';
import AdminTopnav from '../components/AdminTopnav';
import Adminfooter from '../components/Adminfooter';
import Pagination from '../components/Pagination';

const channelList = [
  {
    imageUrl: 'user.png',
    title: 'Mobile Product Design',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'FULL TIME',
    tag2: 'DESINER',
    tag3: '30 MIN',
  },
  {
    imageUrl: 'user.png',
    title: 'HTML Developer',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: '',
    tag2: 'DESINER',
    tag3: '30 MIN',
  },
  {
    imageUrl: 'user.png',
    title: 'Advanced CSS and Sass',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'FULL TIME',
    tag2: 'DEVELOPER',
    tag3: '21 HOUR',
  },
  {
    imageUrl: 'user.png',
    title: 'Modern React with Redux',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'HALF TIME',
    tag2: 'DESINER',
    tag3: '5 HOUNRS',
  },
  {
    imageUrl: 'user.png',
    title: 'Node JS',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'HALF TIME',
    tag2: 'CODER',
    tag3: '45 MIN',
  },
  {
    imageUrl: 'user.png',
    title: 'Mobile Product Design',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'FULL TIME',
    tag2: 'DESINER',
    tag3: '30 MIN',
  },
];

class Adminvenderlist extends Component {
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
                      <div className="card-body d-flex px-4 pt-4 pb-0">
                        <h4 className="font-xss text-grey-800 mt-3 fw-700">
                          Channel List
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
                                  Last Login
                                </th>

                                <th scope="col" className="text-end border-0">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {channelList.map((value, index) => (
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
                                  <td className="product-thumbnail text-start pl-0">
                                    <img
                                      src={`assets/images/${value.imageUrl}`}
                                      alt="product"
                                      className="p-2 w75 rounded-lg bg-lightblue"
                                    />
                                  </td>

                                  <td>
                                    <b>{value.title}</b>
                                  </td>
                                  <td>
                                    <p className="fw-500 font-xssss text-grey-500 mt-0 mb-0 lh-24">
                                      {value.des}
                                    </p>
                                  </td>

                                  <td>
                                    {value.tag1 ? (
                                      <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mb-1 mr-1">
                                        {value.tag1}
                                      </span>
                                    ) : (
                                      ''
                                    )}
                                    {value.tag2 ? (
                                      <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 bg-lightblue d-inline-block text-grey-800 mb-1 mr-1">
                                        {value.tag2}
                                      </span>
                                    ) : (
                                      ''
                                    )}
                                    {value.tag3 ? (
                                      <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-info d-inline-block text-info mb-1">
                                        {value.tag3}
                                      </span>
                                    ) : (
                                      ''
                                    )}
                                  </td>

                                  <td className="product-remove text-end">
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
                    <Pagination divclassName="pagination justify-content-center mt-5" />
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

export default Adminvenderlist;
