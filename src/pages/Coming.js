import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Upperheader from '../components/Upperheader';
import Footer from '../components/Footer';

class Coming extends Component {
  render() {
    return (
      <Fragment>
        <Upperheader />
        <Header />
        <div className="main-wrap">
          <div className="row">
            <div
              className="col-xl-6 d-none d-xl-block p-0 vh-100 bg-image-contain bg-image-center bg-no-repeat"
              style={{
                backgroundImage: `url("https://via.placeholder.com/800x950.png")`,
              }}
            ></div>

            <div className="col-xl-6 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
              <div className="card shadow-none border-0 pl-lg--5 mr-auto coming-soon-card">
                <div className="card-body rounded-0 text-left">
                  <div className="timer w-100 mb-3 bg-grey-time">
                    <div className="time-count">
                      <span className="text-time">00</span>{' '}
                      <span className="text-day">Day</span>
                    </div>{' '}
                    <div className="time-count">
                      <span className="text-time">00</span>{' '}
                      <span className="text-day">Hours</span>{' '}
                    </div>{' '}
                    <div className="time-count">
                      <span className="text-time">00</span>{' '}
                      <span className="text-day">Min</span>{' '}
                    </div>{' '}
                    <div className="time-count">
                      <span className="text-time">00</span>{' '}
                      <span className="text-day">Sec</span>{' '}
                    </div>{' '}
                  </div>
                  <h2 className="fw-700 text-grey-900 display3-size display4-md-size lh-2">
                    We're under{' '}
                    <span className="text-primary">construction.</span> Check
                    back for an update soon.
                  </h2>
                  <div className="form-group mt-4 p-1 border p-2 bg-white rounded-lg">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="form-group icon-input mb-0">
                          <i className="ti-email font-xs text-grey-400"></i>
                          <input
                            type="text"
                            className="style1-input bg-transparent border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>

                      <div className="col-lg-5">
                        <a
                          href="/"
                          className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                        >
                          Notify
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Coming;
