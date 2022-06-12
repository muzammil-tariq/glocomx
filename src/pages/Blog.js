import React, { Component, Fragment } from 'react';
import Pagenav from '../components/Pagenav';
import Header from '../components/Header';
import Upperheader from '../components/Upperheader';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

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
    title: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
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

class Blog extends Component {
  render() {
    return (
      <Fragment>
        <Upperheader />
        <Header />
        <Pagenav title="Default" subtitle="Blog" />

        <div className="blog-page pt-lg--7 pb-lg--7 pt-5 pb-5 bg-white">
          <div className="container">
            <div className="row">
              {blogList.map((value, index) => (
                // Start Single Demo
                <div
                  key={index}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4"
                >
                  <article className="post-article p-0 border-0 shadow-xss rounded-lg overflow-hidden">
                    <a href="/blog-single">
                      <img
                        src={`assets/images/${value.imageUrl}`}
                        alt="blog"
                        className="w-100"
                      />
                    </a>
                    <div className="post-content p-4">
                      <h6 className="font-xsss text-success fw-600 float-left text-capitalize">
                        {value.meta}
                      </h6>
                      <h6 className="font-xssss text-grey-500 fw-600 ml-3 float-left">
                        <i className="ti-time mr-2"></i> 24 May 2020
                      </h6>
                      <h6 className="font-xssss text-grey-500 fw-600 ml-3 float-left">
                        <i className="ti-user mr-2"></i> Jack Robin
                      </h6>
                      <div className="clearfix"></div>
                      <h2 className="post-title mt-2 mb-2 pr-3">
                        <a
                          href="blog-single"
                          className="lh-30 font-sm mont-font text-grey-800 fw-700"
                        >
                          {value.title}
                        </a>
                      </h2>
                      <p className="font-xsss fw-400 text-grey-500 lh-26 mt-0 mb-2 pr-3">
                        {value.des}
                      </p>
                      <a
                        href="/blog-single"
                        className="rounded-xl text-white bg-current w125 p-2 lh-32 font-xsss text-center fw-500 d-inline-block mb-0 mt-2"
                      >
                        Read More
                      </a>
                    </div>
                  </article>
                </div>
                // End Single Demo
              ))}

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

export default Blog;
