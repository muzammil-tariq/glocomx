import React, { Component, Fragment } from 'react';

import Adminsidebar from '../components/Adminsidebar';
import AdminTopnav from '../components/AdminTopnav';
import Adminfooter from '../components/Adminfooter';

class Adminproductadd extends Component {
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
                  <div className="col-lg-12 d-flex mb-4">
                    <h2 className="text-grey-900 font-md fw-700">Add Course</h2>
                    <i className="ml-auto feather-command font-lg text-grey-500"></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="card border-0 px-4 pt-4 mt-2 rounded-lg admin-form">
                      <div className="card-body d-block">
                        <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">
                          Course Information
                        </h4>
                        <form
                          className="contact_form"
                          name="contact_form"
                          action="#"
                          method="post"
                          noValidate=""
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group mb30">
                                <label
                                  htmlFor="product_sku"
                                  className="form-label"
                                >
                                  Title
                                </label>
                                <input
                                  name="form_name"
                                  className="form-control form_control"
                                  type="text"
                                  placeholder="Property Title *"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group mb30">
                                <label
                                  htmlFor="product_sku"
                                  className="form-label"
                                >
                                  Category
                                </label>
                                <input
                                  name="form_type"
                                  className="form-control form_control"
                                  type="text"
                                  placeholder="Type"
                                />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label
                                  htmlFor="product_sku"
                                  className="form-label"
                                >
                                  Description
                                </label>
                                <textarea
                                  name="form_message"
                                  className="form-control h150"
                                  rows="6"
                                  placeholder="Course Description *"
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="form-group">
                                <label
                                  htmlFor="product_sku"
                                  className="form-label"
                                >
                                  Requirements
                                </label>
                                <textarea
                                  name="form_message"
                                  className="form-control h150"
                                  rows="6"
                                  placeholder="Course Requirements *"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="row gx-3">
                            <div className="col-md-4 mb-3">
                              <label
                                htmlFor="product_sku"
                                className="form-label"
                              >
                                Language
                              </label>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                htmlFor="product_color"
                                className="form-label"
                              >
                                Category
                              </label>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                htmlFor="product_size"
                                className="form-label"
                              >
                                Size
                              </label>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="card border-0 px-4 pt-4 mt-2 rounded-lg admin-form">
                      <div className="card-body d-block">
                        <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">
                          Upload video
                        </h4>
                        <div className="form-group mb30">
                          <div
                            className="file-upload-wrapper"
                            data-text="Select your file!"
                          >
                            <input
                              name="file-upload-field"
                              type="file"
                              className="file-upload-field"
                            />
                            <label
                              htmlFor="file"
                              className="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed theme-black-bg"
                            >
                              <i className="ti-cloud-down large-icon me-3 d-block"></i>
                              <span className="js-fileName">
                                Drag and drop or click to replace
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card border-0 p-4 mt-3 rounded-10 admin-form">
                      <div className="card-body d-block">
                        <h4 className="font-xss text-grey-800 mb-4 mt-0 fw-700">
                          Price
                        </h4>
                        <form
                          className="contact_form"
                          name="contact_form"
                          action="#"
                          method="post"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group mb30">
                                <label
                                  htmlFor="product_sku"
                                  className="form-label"
                                >
                                  Price
                                </label>
                                <input
                                  name="form_name"
                                  className="form-control form_control"
                                  type="text"
                                  placeholder="Price ($)"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group mb30">
                                <label
                                  htmlFor="product_sku"
                                  className="form-label"
                                >
                                  Prefix
                                </label>
                                <input
                                  name="form_name"
                                  className="form-control form_control"
                                  type="text"
                                  placeholder="Price Prefix"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group mb30">
                                <label
                                  htmlFor="product_sku"
                                  className="form-label"
                                >
                                  Suffix
                                </label>
                                <input
                                  name="form_name"
                                  className="form-control form_control"
                                  type="text"
                                  placeholder="Price Suffix"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label
                                  htmlFor="product_sku"
                                  className="form-label"
                                >
                                  Custom
                                </label>
                                <input
                                  name="form_name"
                                  className="form-control form_control"
                                  type="text"
                                  placeholder="Price Custom"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
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

export default Adminproductadd;
