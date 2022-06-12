import React, { Component, Fragment } from 'react';
import Pagenav from '../components/Pagenav';
import Header from '../components/Header';
import Upperheader from '../components/Upperheader';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

const RecentList = [
  {
    imageUrl: 'blog.png',
    title: 'You work your way to creative thinking',
    meta: 'Lifestyle',
    date: '24 May 2020',
  },
  {
    imageUrl: 'blog.png',
    title: 'If you do it right, it will last ever forever',
    meta: 'Food',
    date: '24 May 2020',
  },
  {
    imageUrl: 'blog.png',
    title: 'It’s no secret that the digital industry is booming',
    meta: 'Lifestyle',
    date: '24 May 2020',
  },
  {
    imageUrl: 'blog.png',
    title: 'Ways your mother lied to you about food stuffs',
    meta: 'Lifestyle',
    date: '24 May 2020',
  },
  {
    imageUrl: 'blog.png',
    title: 'Good design is obvious and transparent',
    meta: 'Tech',
    date: '24 May 2020',
  },
];

const blogList = [
  {
    imageUrl: 'blog.png',
    title: 'Aenean  Dieting Strategies That Almost Always Backfire',
    meta: 'Lifestyle',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'The doner is a Turkish creation of meat, often lamb.',
    meta: 'Food',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'The only nutrition program follow & supremely effective',
    meta: 'Lifestyle',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'Neque porro quisquam est, qui dolorem ipsum quia dolor',
    meta: 'Lifestyle',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'Steak salad with goat cheese and arugula for your family?',
    meta: 'Tech',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'Egg salad sandwich with avocado and watercress chip pancakes',
    meta: 'Lifistyle',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'Broad beans, tomato, garlic & mozzarella cheese bruschetta',
    meta: 'Fashion',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'Steak salad with goat cheese and arugula for your family?',
    meta: 'Food',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
  {
    imageUrl: 'blog.png',
    title: 'Egg salad sandwich with avocado and watercress chip pancakes',
    meta: 'Lifistyle',
    des: 'Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are digital agency.',
  },
];

class BlogSidebar extends Component {
  render() {
    return (
      <Fragment>
        <Upperheader />
        <Header />
        <Pagenav title="Blog Sidebar" subtitle="Blog" />

        <div className="blog-page pt-lg--7 pb-lg--7 pt-5 pb-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                  <div className="form-group mb-1">
                    <label className="fw-700 text-grey-900">
                      Search by Keyword
                    </label>
                  </div>
                  <div className="form-group icon-input mb-0">
                    <input
                      type="text"
                      className="form-control style1-input pl-5 border-size-md border-light font-xsss"
                    />
                    <i className="ti-search text-grey-500 font-xs"></i>
                  </div>
                </div>

                <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                  <div className="form-group mb-0">
                    <label className="fw-700 text-grey-900">Categories</label>
                  </div>
                  <ul className="recent-post mt-2 list-style-disc pl-4">
                    <li>
                      <a
                        href="/blog-sidebar"
                        className="fw-500 lh-24 font-xsss text-grey-500 "
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog-sidebar"
                        className="fw-500 lh-24 font-xsss text-grey-500 "
                      >
                        Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog-sidebar"
                        className="fw-500 lh-24 font-xsss text-grey-500 "
                      >
                        Job Seeking
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog-sidebar"
                        className="fw-500 lh-24 font-xsss text-grey-500 "
                      >
                        Travel
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog-sidebar"
                        className="fw-500 lh-24 font-xsss text-grey-500 "
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog-sidebar"
                        className="fw-500 lh-24 font-xsss text-grey-500 "
                      >
                        Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog-sidebar"
                        className="fw-500 lh-24 font-xsss text-grey-500 "
                      >
                        Job Seeking
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog-sidebar"
                        className="fw-500 lh-24 font-xsss text-grey-500 "
                      >
                        Travel
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                  <div className="form-group mb-3">
                    <label className="fw-700 text-grey-900">Recent Posts</label>
                  </div>

                  {RecentList.map((value, index) => (
                    <div
                      key={index}
                      className="card w-100 shadow-none bg-transparent border-0 mb-3"
                    >
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={`assets/images/${value.imageUrl}`}
                            alt="blog"
                            className="img-fluid rounded-lg"
                          />
                        </div>
                        <div className="col-8 pl-1">
                          <h6 className="font-xssss text-grey-500 fw-600 mt-0">
                            {' '}
                            {value.date}
                          </h6>
                          <h2 className="fw-600 text-grey-800 font-xssss lh-4">
                            {value.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="/blog-sidebar">
                  <img
                    src="https://via.placeholder.com/370x200.png"
                    alt="add"
                    className="img-fluid rounded-lg mb-3 mt-3"
                  />
                </a>
              </div>

              <div className="col-lg-8">
                <div className="row">
                  {blogList.map((value, index) => (
                    // Start Single Demo

                    <div
                      key={index}
                      className="col-lg-12 col-md-12 col-sm-12 mb-4"
                    >
                      <article className="post-article p-0 border-0 shadow-xss rounded-lg overflow-hidden">
                        <div className="row">
                          <div className="col-6 col-xs-12">
                            <a href="/blog-single">
                              <img
                                src={`assets/images/${value.imageUrl}`}
                                alt="blog"
                                className="w-100"
                              />
                            </a>
                          </div>
                          <div className="col-6 col-xs-12 pl-md--0">
                            <div className="post-content p-4 pb-0">
                              <h6 className="font-xssss text-success fw-600 float-left">
                                {value.meta}
                              </h6>
                              <h6 className="font-xsssss text-grey-500 fw-600 ml-3 float-left">
                                <i className="ti-time mr-2"></i> 24 May 2020
                              </h6>
                              <h6 className="font-xsssss text-grey-500 fw-600 ml-3 float-left">
                                <i className="ti-user mr-2"></i> Jack Robin
                              </h6>
                              <div className="clearfix"></div>
                              <h2 className="post-title mt-0 mb-2 pr-3">
                                <a
                                  href="blog-single.html"
                                  className="lh-28 font-xss mont-font text-grey-800 fw-700"
                                >
                                  {value.title}
                                </a>
                              </h2>
                              <p className="font-xssss fw-400 text-grey-500 lh-24 mt-0 mb-0 pr-3">
                                {value.des}
                              </p>
                              <a
                                href="/blog-single"
                                className="rounded-xl text-white bg-current w125 p-2 lh-32 font-xsss text-center fw-500 d-inline-block mb-0 mt-2"
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    // End Single Demo
                  ))}
                </div>
              </div>

              <div className="col-lg-12">
                <Pagination divClass="pagination justify-content-center mt-5" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default BlogSidebar;
