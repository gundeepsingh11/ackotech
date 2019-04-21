import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../lib/withStyles';
import styles from './Footer.style';
import Button from '../../atoms/Button';

const Footer = props => {
  const { className } = props;
  console.log(props);
  return (
    <footer className={`footer-content ${className}`}>
      <div className="container ">
        <div className="footer-top">
          <h2>
            <a className="navbar-brand" href="/">
              <span className="fa fa-angellist" /> <p>Ackotech</p>
            </a>
          </h2>
          <div className="contact-form">
            <form method="post" action="#">
              <div className="row subscribe-sec">
                <div className="col-md-9 con-gd">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email here..."
                    name="email"
                    required=""
                  />
                </div>
                <div className="col-md-3 con-gd">
                  <Button type="submit" className="btn btn-default">
                    Subscribe
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="footer-links">
              <h3 className="mb-3 title">Links</h3>
              <hr />
              <ul className="list-info">
                <li>
                  <a href="about.html">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Latest Posts
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Explore
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Find us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="footer-links">
              <h3 className="mb-3 title">Navigation</h3>
              <hr />
              <ul className="list-info">
                <li>
                  <a href="index.html">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html">
                    <span className="icon-ctrl" aria-hidden="true" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="single.html">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Single Page
                  </a>
                </li>
                <li>
                  <a href="about.html">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Team
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="footer-links">
              <h3 className="mb-3 title">Customer Care</h3>
              <hr />
              <ul className="list-info">
                <li>
                  <a href="about.html">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Latest Posts
                  </a>
                </li>
                <li>
                  <span className="icon-ctrl" aria-hidden="true" />
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="contact.html">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Find us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-ctrl" aria-hidden="true" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="footer-links">
              <h3 className="mb-3 title">Contact Us</h3>
              <hr />
              <div className="last-w3layouts-contact">
                <p>
                  <a href="mailto:example@email.com">info@example.com</a>
                </p>
              </div>
              <div className="last-w3layouts-contact my-2">
                <p>+ 456 123 7890</p>
              </div>
              <div className="last-w3layouts-contact">
                <p>
                  + 90 nsequursu dsdesdc,
                  <br />
                  xxx Honey Street 049436
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default withStyles(Footer, styles);

export { Footer as FooterVanilla };
