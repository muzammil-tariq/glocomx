import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import { Accordion } from 'react-bootstrap';

const iconList = [
  {
    title: 'Automatic Updates',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-layers',
    color: 'text-success',
    bgcolor: 'alert-success',
  },
  {
    title: 'Blazing Performance',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-award',
    color: 'text-danger',
    bgcolor: 'alert-danger',
  },
  {
    title: 'Free Updates',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-cpu',
    color: 'text-infong',
    bgcolor: 'alert-info',
  },
  {
    title: 'Unlimited Layouts',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-hard-drive',
    color: 'text-warning',
    bgcolor: 'alert-warning',
  },
  {
    title: 'Best Sellers',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-lock',
    color: 'text-secondary',
    bgcolor: 'alert-secondary',
  },
  {
    title: 'Branding Feture',
    des: 'Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue.',
    icon: 'feather-globe',
    color: 'text-success',
    bgcolor: 'alert-success',
  },
];

const priceList = [
  {
    color: 'border-primary',
    price: '49',
    title: 'Starter',
    des: 'For anyone validating Framer as a professional prototyping tool.',
    status: 'text-primary alert-primary',
  },
  {
    color: 'border-success',
    price: '99',
    title: 'Standard',
    des: 'For anyone validating Framer as a professional prototyping tool.',
    status: 'alert-success text-success',
  },
  {
    color: 'border-warning',
    price: '199',
    title: 'Premium',
    des: 'For anyone validating Framer as a professional prototyping tool.',
    status: 'alert-warning text-warning',
  },
];
const brandList = [
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
  { bimg: 'b-1.png' },
];

class Price extends Component {
  render() {
    const brandsettings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      centerMode: false,
      variableWidth: false,
      autoplay: true,
    };
    return (
      <Fragment>
        <Header />

        <div className="page-nav bg-greyblue pt-lg--7 pb-lg--7 pb-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h1 className="text-grey-800 fw-700 display2-size display4-md-size mb-3 ls-0">
                  Our pricing plan made simple
                </h1>
                <p className="font-xsss text-grey-500 fw-500 d-block mt-2 pl-lg-5 pr-lg-5 lh-30">
                  Human coronaviruses are common and are typically associated
                  with mild illnesses, similar to the common cold. We are
                  digital agency plan made simple.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="price-wrap bg-greyblue pb-lg--7 pb-5 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="row">
                  {priceList.map((value, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="card border-0 mb-4 bg-white shadow-xss shadow-xss rounded-lg">
                        <div
                          className={`card-body p-5 border-top-lg border-size-lg ${value.color}`}
                        >
                          <h1 className="display2-size fw-700">
                            € {value.price}
                            <span className="font-xssss text-grey-500 ml-2">
                              / month
                            </span>
                          </h1>
                          <h2 className=" font-xs fw-700 mt-3 mb-3">
                            {value.title}
                          </h2>
                          <h4 className=" fw-500 mb-4 lh-24 font-xssss text-grey-500">
                            {value.des}
                          </h4>
                          <h4 className=" font-xssss fw-600 text-grey-500 mb-3 ">
                            <i
                              className={`ti-check font-xssss mr-2 btn-round-xs ${value.status}`}
                            ></i>
                            Unlimited views
                          </h4>
                          <h4 className=" font-xssss fw-600 text-grey-500 mb-3 ">
                            <i
                              className={`ti-check font-xssss mr-2 btn-round-xs ${value.status}`}
                            ></i>
                            Everything in Free
                          </h4>
                          <h4 className=" font-xssss fw-600 text-grey-500 mb-4">
                            <i
                              className={`ti-check font-xssss mr-2 btn-round-xs ${value.status}`}
                            ></i>
                            Private share links
                          </h4>
                          <a
                            href="/"
                            className="btn btn-block border-0 w-100 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light mt-3"
                          >
                            Subscribe
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-wrapper pt-lg--7 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center mb-5">
                <h1 className="text-grey-800 fw-700 display2-size display4-md-size mb-3 ls-0">
                  Explore Feature
                </h1>
                <p className="font-xsss text-grey-500 fw-500 d-block mt-2 pl-lg-5 pr-lg-5 lh-30">
                  Human coronaviruses are common and are typically associated
                  with mild illnesses, similar to the common cold. We are
                  digital agency plan made simple.
                </p>
              </div>
            </div>

            <div className="row">
              {iconList.map((value, index) => (
                <div className="col-lg-4 col-md-4 mb-3">
                  <div className="card shadow-xss border-0 p-5 rounded-lg text-center">
                    <span
                      className={`btn-round-xxxl ml-auto mr-auto ${value.bgcolor}`}
                    >
                      <i className={`font-xl ${value.icon} ${value.color}`}></i>
                    </span>
                    <h2 className="fw-700 font-xss mt-4 mb-3 text-grey-900">
                      {value.title}
                    </h2>
                    <p className="font-xssss lh-26 text-grey-500 fw-500 mb-0">
                      {value.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="faq-wrapper pt-lg--7  pt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mb-5">
                <h1 className="text-grey-800 fw-700 display2-size display4-md-size mb-3 ls-0">
                  Frequently Asked Question
                </h1>
                <p className="font-xsss text-grey-500 fw-500 d-block mt-2 pl-lg-5 pr-lg-5 lh-30">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <Accordion defaultActiveKey="0" className="accordian mb-3">
                  <Accordion.Item
                    eventKey="0"
                    className="accordion-item border-0 mb-3 shadow-xss rounded-sm bg-white"
                  >
                    <Accordion.Header>
                      How do I make a yearly payment?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    className="accordion-item border-0 mb-3 shadow-xss rounded-6"
                  >
                    <Accordion.Header>
                      How this technology works?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="3"
                    className="accordion-item border-0 mb-3 shadow-xss rounded-6"
                  >
                    <Accordion.Header>
                      What is the comunity benefit?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="4"
                    className="accordion-item border-0 mb-3 shadow-xss rounded-6"
                  >
                    <Accordion.Header>
                      Technical or account support
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion className="accordian">
                  <Accordion.Item
                    eventKey="5"
                    className="accordion-item border-0 mb-3 shadow-xss rounded-6"
                  >
                    <Accordion.Header>
                      Focus critical developer resources
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="6"
                    className="accordion-item border-0 mb-3 shadow-xss rounded-6"
                  >
                    <Accordion.Header>
                      Improve conversion from international
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                        Energy Retailer For The People, Focusing On The
                        Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility
                        Services.Serenity Is Multi-Faceted Blockchain Based
                        Ecosystem, Energy Retailer For The People, Focusing On
                        The Promotion Of Sustainable Living, Renewable Energy
                        Production And Smart Energy Grid Utility Services.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div className="brand-wrapper pb-lg--7 pt-lg--7 pb-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Slider {...brandsettings}>
                  {brandList.map((value, index) => (
                    <div key={index}>
                      <img
                        src={`assets/images/${value.bimg}`}
                        alt="avater"
                        className="w100"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <Footer bgColor="bg-dark" />
      </Fragment>
    );
  }
}

export default Price;
