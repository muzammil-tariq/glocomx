import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Upperheader from '../components/Upperheader';
import Footer from '../components/Footer';

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contacttwo extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  render() {
    return (
      <Fragment>
        <Upperheader />
        <Header />
        <div className="page-nav bg-lightblue pt-lg--7 pb-4 pt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h1 className="text-grey-800 fw-700 display3-size mb-3 display4-md-size">
                  Get in touch with us{' '}
                  <span className="font-xsss text-grey-500 fw-600 d-block mt-3 pl-lg-5 pr-lg-5 lh-28">
                    Ask us a question by email and we will respond within a few
                    days. Ask us a question by email and we will respond within
                    a few days.{' '}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-wrapp pb-lg--10 pb-5 bg-lightblue pt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 md-mb-2">
                <div className="card shadow-xss border-0 p-5 rounded-lg">
                  <span className="btn-round-xxxl alert-success">
                    <i className="feather-mail text-success font-xl"></i>
                  </span>
                  <h2 className="fw-700 font-sm mt-4 mb-3 text-grey-900">
                    Email us
                  </h2>
                  <p className="font-xsss text-grey-500 fw-500 mb-3">
                    Ask us a question by email and we will respond within a few
                    days.
                  </p>
                  <a
                    href="mailto:support@gmail.com"
                    className="fw-700 font-xsss text-primary"
                  >
                    Send Email
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 md-mb-2">
                <div className="card shadow-xss border-0 p-5 rounded-lg">
                  <span className="btn-round-xxxl alert-primary">
                    <i className="feather-map-pin text-primary font-xl"></i>
                  </span>
                  <h2 className="fw-700 font-sm mt-4 mb-3 text-grey-900">
                    Contact us
                  </h2>
                  <p className="font-xsss text-grey-500 fw-500 mb-3">
                    Ask us a question by email and we will respond within a few
                    days.
                  </p>
                  <a
                    href="tel:893432323"
                    className="fw-700 font-xsss text-primary"
                  >
                    Get Direction
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 md-mb-2">
                <div className="card shadow-xss border-0 p-5 rounded-lg">
                  <span className="btn-round-xxxl alert-danger">
                    <i className="feather-phone text-danger font-xl"></i>
                  </span>
                  <h2 className="fw-700 font-sm mt-4 mb-3 text-grey-900">
                    Call us
                  </h2>
                  <p className="font-xsss text-grey-500 fw-500 mb-3">
                    Ask us a question by email and we will respond within a few
                    days.
                  </p>
                  <a
                    href="tel:893432323"
                    className="fw-700 font-xsss text-primary"
                  >
                    Make a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-wrapper pt-lg--10 pt-5 pb-lg--10 pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="contact-wrap bg-white shadow-lg rounded-lg position-relative top-0">
                  <h1 className="text-grey-900 fw-700 display3-size mb-5 lh-1">
                    Contact us
                  </h1>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control style2-input bg-color-none text-grey-700"
                            defaultValue="Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control style2-input bg-color-none text-grey-700"
                            defaultValue="Email"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group mb-3 md-mb-2">
                          <textarea className="w-100 h125 style2-textarea p-3 form-control">
                            Message
                          </textarea>
                        </div>
                        <div className="form-check text-left mt-3 float-left md-mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input mt-2"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label font-xsss text-grey-500 fw-500"
                            htmlFor="exampleCheck1"
                          >
                            I agree to the term of this{' '}
                            <a href="/contact" className="text-grey-600 fw-600">
                              Privacy Policy
                            </a>
                          </label>
                        </div>
                        <div className="form-group">
                          <a
                            href="/contact"
                            className="rounded-lg style1-input float-right bg-current text-white text-center font-xss fw-500 border-2 border-0 p-0 w175"
                          >
                            Submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-wrapper">
          <div style={{ height: '600px', width: '100%' }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default Contacttwo;
