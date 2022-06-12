import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import Chart from 'react-apexcharts';

const blueChart = {
  series: [
    {
      name: '',
      data: [18, 34, 44, 58, 38],
    },
  ],

  options: {
    colors: '#0d66ff',
    chart: {
      height: '50%',
      type: 'bar',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
  },
};

const purpleChart = {
  series: [
    {
      name: '',
      data: [28, 34, 64, 18, 38],
    },
  ],

  options: {
    colors: '#6C5DD3',
    chart: {
      height: '50%',
      type: 'bar',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
  },
};

const pinkChart = {
  series: [
    {
      name: '',
      data: [16, 19, 23, 58, 38],
    },
  ],

  options: {
    colors: '#FFB7F5',
    chart: {
      height: '50%',
      type: 'bar',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
  },
};

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

const candleChart = {
  series: [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ],
  options: {
    chart: {
      type: 'candlestick',
      height: 350,
      // stacked: true,
      toolbar: {
        show: false,
      },
    },

    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  },
};

const pieChart = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
          stacked: true,
          toolbar: {
            show: false,
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  },
};

const multipleChart = {
  series: [44, 55, 67],
  options: {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            color: '#FFF',
            show: false,
          },
          value: {
            // offsetY: -1,
            color: '#000',
            fontWeight: '700',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
  },
};

const roundChart = {
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  options: {
    chart: {
      type: 'polarArea',
      width: '100%',
      height: '250%',
    },
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    legend: {
      show: false,
    },
  },
};

class Defaultanalytics extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />

            <div className="middle-sidebar-bottom theme-dark-bg">
              <div className="middle-sidebar-left">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card w-100 bg-lightblue p-lg-5 p-4 border-0 rounded-lg d-block float-left">
                      <img
                        src="https://via.placeholder.com/150x150.png"
                        alt="world"
                        className="sm-mt-2 w75 position-relative top--10 float-left mr-2 mt--1 rounded-circle "
                      />
                      <h2 className="display1-size display2-md-size d-inline-block float-left mb-0 text-grey-900 fw-700">
                        <span className="font-xssss fw-600 text-grey-500 d-block mb-2 ml-1">
                          Welcome back
                        </span>
                        Hi, Sandeep have got 123 points!
                      </h2>
                      <img
                        src="https://via.placeholder.com/200x130.png"
                        alt="banner"
                        className="w250 right-15 top-0 position-absolute d-none d-xl-block"
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-12 ">
                    <div className="card w-100 p-1 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-7">
                            <h4 className="fw-700 text-success font-xssss mt-0 mb-0 ">
                              +45%
                            </h4>
                            <h2 className="text-grey-900 fw-700 display1-size mt-2 mb-2 ls-3 lh-1">
                              4563
                            </h2>
                            <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0">
                              UNITS SALE
                            </h4>
                          </div>
                          <div className="col-5 text-left">
                            <Chart
                              options={blueChart.options}
                              series={blueChart.series}
                              type="bar"
                              width="100%"
                              height="50%"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-12 ">
                    <div className="card w-100 p-1 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-7">
                            <h4 className="fw-700 text-success font-xssss mt-0 mb-0 ">
                              -27%
                            </h4>
                            <h2 className="text-grey-900 fw-700 display1-size mt-2 mb-2 ls-3 lh-1">
                              3325
                            </h2>
                            <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0">
                              UNITS SALE
                            </h4>
                          </div>
                          <div className="col-5 text-left">
                            <Chart
                              options={pinkChart.options}
                              series={pinkChart.series}
                              type="bar"
                              width="100%"
                              height="50%"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-12 ">
                    <div className="card w-100 p-1 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                      <div className="card-body p-4">
                        <div className="row">
                          <div className="col-7">
                            <h4 className="fw-700 text-success font-xssss mt-0 mb-0 ">
                              -15%
                            </h4>
                            <h2 className="text-grey-900 fw-700 display1-size mt-2 mb-2 ls-3 lh-1">
                              4455
                            </h2>
                            <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0">
                              UNITS SALE
                            </h4>
                          </div>
                          <div className="col-5 text-left">
                            <Chart
                              options={purpleChart.options}
                              series={purpleChart.series}
                              type="bar"
                              width="100%"
                              height="50%"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="card w-100 p-3 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                      <Chart
                        options={lineChart.options}
                        series={lineChart.series}
                        type="bar"
                        width="100%"
                        height="350"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card w-100 p-3 border-0 mt-4 rounded-10 bg-white shadow-xs overflow-hidden">
                      <div className="card-body d-flex pb-0">
                        <h4 className="font-xss text-grey-800  mt-1 lh-22 fw-700">
                          Statistics
                        </h4>
                        <h5 className="ml-auto mr-3 mt-2 text-grey-600 font-xssss fw-700">
                          <span className="btn-round-xss bg-warning mr-1"></span>
                          Sale
                        </h5>
                        <h5 className="mt-2 text-grey-600 font-xssss fw-700">
                          <span className="btn-round-xss bg-success mr-1"></span>
                          Earn
                        </h5>
                      </div>
                      <Chart
                        options={pieChart.options}
                        series={pieChart.series}
                        type="donut"
                      />
                      <div className="row mt-2">
                        <div className="col-6 mb-1 text-center">
                          <h2 className="font-md mb-1 text-grey-900 fw-700 ls-lg">
                            44.2k
                          </h2>
                          <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase">
                            <span className="mr-2 bg-facebook btn-round-xss d-inline-block mt-0 me-2 rounded-circle"></span>
                            this week
                          </h4>
                        </div>
                        <div className="col-6 mb-1 text-center">
                          <h2 className="font-md mb-1 text-grey-900 fw-700 ls-lg">
                            54m
                          </h2>
                          <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase">
                            <span className="mr-2 bg-instagram btn-round-xss d-inline-block mt-0 me-2 rounded-circle"></span>
                            this month
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card w-100 p-3 border-0 mt-4 rounded-10 bg-white shadow-xs overflow-hidden">
                      <div className="card-body d-flex pb-0">
                        <h4 className="font-xss text-grey-800  mt-1 lh-22 fw-700">
                          Customer
                        </h4>
                        <h5 className="ml-auto mr-3 mt-2 text-grey-600 font-xssss fw-700">
                          <span className="btn-round-xss bg-warning mr-1"></span>
                          New
                        </h5>
                        <h5 className="mt-2 text-grey-600 font-xssss fw-700">
                          <span className="btn-round-xss bg-success mr-1"></span>
                          Existing
                        </h5>
                      </div>
                      <Chart
                        options={roundChart.options}
                        series={roundChart.series}
                        type="polarArea"
                        height="360"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card w-100 p-3 border-0 mt-4 rounded-10 bg-white shadow-xs overflow-hidden">
                      <div className="card-body d-flex pb-0">
                        <h4 className="font-xss text-grey-800  mt-1 lh-22 fw-700">
                          Score
                        </h4>
                        <h5 className="ml-auto mr-3 mt-2 text-grey-600 font-xssss fw-700">
                          <span className="btn-round-xss bg-warning mr-1"></span>
                          Sale
                        </h5>
                        <h5 className="mt-2 text-grey-600 font-xssss fw-700">
                          <span className="btn-round-xss bg-success mr-1"></span>
                          Earn
                        </h5>
                      </div>
                      <Chart
                        options={multipleChart.options}
                        series={multipleChart.series}
                        type="radialBar"
                      />
                      <div className="row">
                        <div className="col-4 text-center">
                          <h2 className="font-lg text-grey-900 fw-700 ls-lg">
                            44%
                          </h2>
                          <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase">
                            Week
                          </h4>
                        </div>
                        <div className="col-4 text-center">
                          <h2 className="font-lg text-grey-900 fw-700 ls-lg">
                            55%
                          </h2>
                          <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase">
                            Month
                          </h4>
                        </div>
                        <div className="col-4 text-center">
                          <h2 className="font-lg text-grey-900 fw-700 ls-lg">
                            67%
                          </h2>
                          <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase">
                            Day
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="card w-100 p-3 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                      <Chart
                        options={candleChart.options}
                        series={candleChart.series}
                        type="candlestick"
                        width="100%"
                        height="350"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle-sidebar-right scroll-bar">
                <div className="middle-sidebar-right-content">
                  <Profile />
                  <Myclass />
                  <Subscribe />
                </div>
              </div>
            </div>
          </div>

          <Appfooter />
        </div>
      </Fragment>
    );
  }
}

export default Defaultanalytics;
