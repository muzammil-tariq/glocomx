import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navheader extends Component {
  render() {
    return (
      <nav className="navigation scroll-bar">
        <div className="container pl-0 pr-0">
          <div className="nav-content">
            <div className="nav-top">
              <Link to="/">
                <i className="feather-slack text-success display1-size mr-3 ml-3"></i>
                <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0">
                  Elomoas.
                </span>
              </Link>
              <Link to="/" className="close-nav d-inline-block d-lg-none">
                <i className="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i>
              </Link>
            </div>
            <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span>New </span>Feeds
            </div>
            <ul className="mb-3">
              <li className="logo d-none d-xl-block d-lg-block"></li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/default"
                  className="nav-content-bttn open-font"
                  data-tab="chats"
                >
                  <i className="feather-tv mr-3"></i>
                  <span>Course Feed</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/default-follower"
                  className="nav-content-bttn open-font"
                  data-tab="friends"
                >
                  <i className="feather-shopping-bag mr-3"></i>
                  <span>Followers</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/default-channel"
                  className="nav-content-bttn open-font"
                  data-tab="favorites"
                >
                  <i className="feather-globe mr-3"></i>
                  <span>Explore Channel</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/default-live-stream"
                  className="nav-content-bttn open-font"
                  data-tab="favorites"
                >
                  <i className="feather-play-circle mr-3"></i>
                  <span>Live Stream</span>
                </NavLink>
              </li>
              <li className="flex-lg-brackets">
                <NavLink
                  activeClassName="active"
                  to="/default-user-profile"
                  data-tab="archived"
                  className="nav-content-bttn open-font"
                >
                  <i className="feather-video mr-3"></i>
                  <span>Saved Course</span>
                </NavLink>
              </li>
            </ul>

            <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span>Following </span>Author
            </div>
            <ul className="mb-3">
              <li>
                <Link
                  to="/default-author-profile"
                  className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                  data-tab="chats"
                >
                  <img
                    src="assets/images/user.png"
                    alt="user"
                    className="w40 mr-2"
                  />
                  <span>Surfiya Zakir </span>
                  <span className="circle-icon bg-success mt-3"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/default-author-profile"
                  className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                  data-tab="chats"
                >
                  <img
                    src="assets/images/user.png"
                    alt="user"
                    className="w40 mr-2"
                  />
                  <span>Vincent Parks </span>
                  <span className="circle-icon bg-warning mt-3"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/default-author-profile"
                  className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                  data-tab="chats"
                >
                  <img
                    src="assets/images/user.png"
                    alt="user"
                    className="w40 mr-2"
                  />
                  <span>Richard Bowers </span>
                  <span className="circle-icon bg-success mt-3"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/default-author-profile"
                  className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                  data-tab="chats"
                >
                  <img
                    src="assets/images/user.png"
                    alt="user"
                    className="w40 mr-2"
                  />
                  <span>John Lambert </span>
                  <span className="circle-icon bg-success mt-3"></span>
                </Link>
              </li>
            </ul>
            <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span></span> Account
            </div>
            <ul className="mb-3">
              <li className="logo d-none d-xl-block d-lg-block"></li>
              <li>
                <Link
                  to="/default-settings"
                  className="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i className="font-sm feather-settings mr-3 text-grey-500"></i>
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/default-analytics"
                  className="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i className="font-sm feather-pie-chart mr-3 text-grey-500"></i>
                  <span>Analytics</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/message"
                  className="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i className="font-sm feather-message-square mr-3 text-grey-500"></i>
                  <span>Chat</span>
                  <span className="circle-count bg-warning mt-0">23</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navheader;
