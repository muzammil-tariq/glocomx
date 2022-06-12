import React, { Component, Fragment } from 'react';

class Register extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrap">
          <div className="row">
            <div
              className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
              style={{
                backgroundImage: `url("https://via.placeholder.com/800x950.png")`,
              }}
            ></div>

            <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
              <div className="card shadow-none border-0 ml-auto mr-auto login-card">
                <div className="card-body rounded-0 text-left">
                  <h2 className="fw-700 display1-size display2-md-size mb-4">
                    Create <br />
                    your account
                  </h2>
                  <form>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-user text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Email Address"
                      />
                    </div>
                    <div className="form-group icon-input mb-3">
                      <input
                        type="Password"
                        className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                        placeholder="Password"
                      />
                      <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                    </div>
                    <div className="form-group icon-input mb-1">
                      <input
                        type="Password"
                        className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                        placeholder="Confirm Password"
                      />
                      <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                    </div>
                    <div className="form-check text-left mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input mt-2"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label font-xssss text-grey-500"
                        htmlFor="exampleCheck1"
                      >
                        Accept Term and Conditions
                      </label>
                    </div>
                  </form>

                  <div className="col-sm-12 p-0 text-left">
                    <div className="form-group mb-1">
                      <a
                        href="/register"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                      >
                        Register
                      </a>
                    </div>
                    <h6 className="text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32">
                      Already have account{' '}
                      <a href="/login" className="fw-700 ml-1">
                        Login
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
