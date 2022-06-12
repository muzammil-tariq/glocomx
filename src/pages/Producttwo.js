import React, { Component, Fragment } from 'react';
import Upperheader from '../components/Upperheader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';

const productImages = [
  { imageUrl: 'product.png' },
  { imageUrl: 'product.png' },
  { imageUrl: 'product.png' },
  { imageUrl: 'product.png' },
];

const relatedList = [
  {
    imageUrl: 'product.png',
    name: 'Textured Sleeveless Camisole',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Adjustable Shoulder Straps',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Neck Strappy Camisole',
    price: '449',
  },
  {
    imageUrl: 'product.png',
    name: 'Scoop-Neck Strappy',
    price: '449',
  },
];

class Producttwo extends Component {
  render() {
    const productsettings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      margin: 15,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: false,
      autoplay: true,
    };
    return (
      <Fragment>
        <Upperheader />
        <Header />

        <div className="product-wrapper pt-lg--7 pt-5 pb-5 pb-lg--7 bg-greyblue">
          <div className="container">
            <div className="row">
              <div className="col-lg-1">
                <img
                  src="assets/images/product.png"
                  alt="product"
                  className="bg-white rounded-lg mb-2 w-100"
                />
                <img
                  src="assets/images/product.png"
                  alt="product"
                  className="bg-white rounded-lg mb-2 w-100"
                />
                <img
                  src="assets/images/product.png"
                  alt="product"
                  className="bg-white rounded-lg mb-2 w-100"
                />
                <img
                  src="assets/images/product.png"
                  alt="product"
                  className="bg-white rounded-lg mb-2 w-100"
                />
              </div>
              <div className="col-lg-5 mb-4 pl-0">
                <Slider {...productsettings}>
                  {productImages.map((value, index) => (
                    <div
                      key={index}
                      className="p-0 m-0 card border-0 bg-transparent"
                    >
                      <div className="card-body pt-lg--10 pb-lg--10 bg-white rounded-lg">
                        <img
                          src={`assets/images/${value.imageUrl}`}
                          alt="icon"
                          className="w-100 rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="col-lg-6  col-md-12 pad-top-lg-200 pad-bottom-lg-100 pad-top-100 pad-bottom-75 pl-md--5">
                <h4 className="text-danger font-xssss fw-700 ls-2">DNMX</h4>
                <h2 className="fw-700 text-grey-900 display1-size lh-3 porduct-title display2-md-size display2-md-size">
                  Camisole with Adjustable Straps
                </h2>
                <div className="star d-block w-100 text-left">
                  <img
                    src="assets/images/star.png"
                    alt="star"
                    className="w15 float-left"
                  />
                  <img
                    src="assets/images/star.png"
                    alt="star"
                    className="w15 float-left"
                  />
                  <img
                    src="assets/images/star.png"
                    alt="star"
                    className="w15 float-left"
                  />
                  <img
                    src="assets/images/star.png"
                    alt="star"
                    className="w15 float-left"
                  />
                  <img
                    src="assets/images/star-disable.png"
                    alt="star"
                    className="w15 float-left mr-2"
                  />
                </div>
                <p className="review-link font-xsss fw-400 text-grey-500 lh-3">
                  2 customer review
                </p>
                <div className="clearfix"></div>
                <p className="font-xsss fw-400 text-grey-500 lh-30 pr-lg--5 mt-3 mr-5">
                  ultrices justo eget, sodales orci. Aliquam egestas libero ac
                  turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut
                  sem laoreet, feugiat tellus at, hendrerit arcu.
                </p>

                <h6 className="display2-size fw-700 text-current ls-2 mb-2">
                  <span className="font-xl">$</span>449
                  <span className="font-xs text-grey-500">$699</span>
                </h6>
                <div className="clearfix"></div>
                <form action="#" className="form--action mt-4 mb-3">
                  <div className="product-action flex-row align-items-center">
                    <div className="quantity mr-3">
                      <input
                        type="number"
                        className="quantity-input"
                        name="qty"
                        id="qty"
                        defaultValue="1"
                        min="1"
                      />
                      <div className="dec qtybutton">-</div>
                      <div className="inc qtybutton">+</div>
                    </div>

                    <a
                      href="/single-product-3"
                      className="add-to-cart bg-dark text-white pl-lg-5 pr-lg-5 fw-700 text-uppercase font-xssss float-left border-dark border rounded-lg border-size-md d-inline-block mt-0 p-3 text-center ls-3 lh-26"
                    >
                      Add to cart
                    </a>
                    <a
                      href="/single-product-3"
                      className="btn-round-xl alert-dark text-white d-inline-block mt-0 ml-4 float-left"
                    >
                      <i className="ti-heart font-sm"></i>
                    </a>
                  </div>
                </form>
                <div className="clearfix"></div>
                <ul className="product-feature-list mt-5">
                  <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                    <b className="text-grey-900"> Category : </b>Furniture
                  </li>
                  <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                    Straight fit
                  </li>
                  <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                    <b className="text-grey-900">SKU : </b> REF. LA-107
                  </li>
                  <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                    Dry clean
                  </li>
                  <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                    <b className="text-grey-900">Tags : </b>Design, Toys
                  </li>
                  <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                    Cutton shirt
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* product info */}
        <div className="info-wrappper pt-5 pt-lg--7 pb-4 pb-lg--7">
          <div className="container">
            <div className="product-info">
              <div className="row">
                <div className="col-lg-12"></div>
                <div className="col-sm-12">
                  <Tabs
                    defaultActiveKey="des"
                    id="uncontrolled-tab-example"
                    className="nav nav-tabs list-inline mb-5 product-info-tab profile"
                  >
                    <Tab eventKey="des" title="DESCRIPTION">
                      <p className="font-xsss fw-400 text-grey-500 lh-30">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <ul className="disc-item mb-4">
                        <li className="font-xsss fw-400 text-grey-500 lh-30">
                          Nunc lacus elit, faucibus ac laoreet sed.
                        </li>
                        <li className="font-xsss fw-400 text-grey-500 lh-30">
                          Maecenas eu ante a elit tempus fermentum.
                        </li>
                        <li className="font-xsss fw-400 text-grey-500 lh-30">
                          Aliquam commodo tincidunt semper. Phasellus accumsan
                        </li>
                      </ul>
                      <p className="font-xsss fw-400 text-grey-500 lh-30">
                        Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi.
                        Maecenas eu ante a elit tempus fermentum. Aliquam
                        commodo tincidunt semper. Phasellus accumsan, justo ac
                        mollis pharetra, ex dui pharetra nisl, a scelerisque
                        ipsum nulla ac sem. Cras eu risus urna. Duis lorem
                        sapien, congue eget nisl sit amet, rutrum faucibus elit.
                      </p>
                    </Tab>
                    <Tab eventKey="info" title="ADDITIONAL INFORMATION">
                      <ul className="product-feature-list mt-5">
                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                          <b className="text-grey-900"> Category : </b>Furniture
                        </li>
                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                          Straight fit
                        </li>
                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                          <b className="text-grey-900">SKU : </b> REF. LA-107
                        </li>
                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                          Dry clean
                        </li>
                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                          <b className="text-grey-900">Tags : </b>Design, Toys
                        </li>
                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                          Cutton shirt
                        </li>
                      </ul>
                    </Tab>
                    <Tab eventKey="review" title="REVIEW"></Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product info */}

        {/* Leave a Comments */}
        <div className="recent-wrappper pt-5 pt-lg--7 pb-4 pb-lg--7 bg-greyblue">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="text-grey-900 font-xl fw-700 mt-0 mb-5">
                  Leave a review
                </h4>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control h60 border-0 text-grey-500"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control h60 border-0 text-grey-500"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control h60 border-0 text-grey-500"
                          placeholder="Location"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <textarea
                          className="w-100 form-control border-0 text-grey-500"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="form-check text-left mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input mt-2"
                          id="exampleCheck1"
                        />
                        <label
                          className="pt--1 form-check-label fw-500 font-xssss text-grey-500"
                          htmlFor="exampleCheck1"
                        >
                          Accept all the privacy and policy.
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <a
                        href="/single-product"
                        className="form-control h60 rounded-lg bg-current text-white text-center font-xss fw-500 border-2 border-0 p-0 w-100 d-block"
                      >
                        Submit
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Leave a Comments */}

        {/* Related Products */}
        <div className="product-wrapper pt-lg--7 pt-5 pb-lg--7 pb-7">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-0">
                <h2 className="text-grey-900 fw-700 font-xl display2-md-size pb-3 mb-0 d-block">
                  Related Products
                </h2>
                <p className="fw-400 font-xssss lh-28 text-grey-500">
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dol ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="row">
              {relatedList.map((value, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="card w-100 border-0 mt-4">
                    <div className="card-image w-100 p-0 text-center bg-greylight rounded-lg mb-2">
                      <a href="/shop-1">
                        <img
                          src={`assets/images/${value.imageUrl}`}
                          alt="product"
                          className="w-100 mt-0 mb-0 p-5"
                        />
                      </a>
                    </div>
                    <div className="card-body w-100 p-0 text-center">
                      <h2 className="mt-2 mb-1">
                        <a
                          href="single-product"
                          className="text-black fw-600 font-xsss lh-26"
                        >
                          {value.name}
                        </a>
                      </h2>
                      <h6 className="font-xsss fw-600 text-grey-500 ls-2">
                        {value.price}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Related Products */}

        <Footer bgColor="bg-dark" />
      </Fragment>
    );
  }
}

export default Producttwo;
