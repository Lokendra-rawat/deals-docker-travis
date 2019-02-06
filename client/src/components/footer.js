import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { Animated } from "react-animated-css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import './footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  render() {
    return (
      <footer className="footer container">
        <div className="newsletter row container-fluid">
          <div className="col-12 col-md-6 col-lg-7">
            <p className="lead m-0 text-center mt-3">
              Signup To Track the deals that you love
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 text-center">
            <form className="form-inline m-0 mt-2">
              <div className="text-center ml-auto mr-auto row p-0">
                <input className="form-control mb-2" id="inlineFormInputName2" placeholder="Enter email address" type="text" />
                <button style={{ marginLeft: 5 }} className="btn btn-primary" type="submit">
                  <b>Subscribe</b>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container-fluid row p-2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <h3>
              Festival Deals
      </h3>
            <ul>
              <li>
                <a href="https://freekaamaal.com/diwali-offers">
                  Diwali Offers
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/new-year-offers">
                  New Year Offers
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/republic-day-offers">
                  Republic Day Offers
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/holi-gifts-offers">
                  Holi Offers
          </a>
              </li>
              <li>
                <a href="/valentine-day-offers/">
                  Valentine's Day Offers
          </a>
              </li>
              <li>
                <a href="/rakshabandhan-offers/">
                  Rakhi Offers
          </a>
              </li>
              <li>
                <a href="/independence-day-offers/">
                  Independence Day Offers
          </a>
              </li>
              <li>
                <a href="/dussehra-offers/">
                  Dussehra Offers
          </a>
              </li>
              <li>
                <a href="/deals/amazon-great-indian-festive-sale/">
                  Amazon Great Indian Festive Sale
          </a>
              </li>
              <li>
                <a href="/deals/flipkart-big-billion-day-sale/">
                  Flipkart Big Billion Day Sale
          </a>
              </li>

            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <h3>
              Top Stores
      </h3>
            <ul>
              <li>
                <a href="https://freekaamaal.com/jabong">
                  Jabong Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/tatacliq-coupons">
                  TataCliq Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/shopclues">
                  Shopclues Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/koovs">
                  Koovs Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/paytm">
                  Paytm Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/biryaniblues">
                  Biryani Blues Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/zivame">
                  Zivame Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/abof">
                  Abof Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/goair">
                  Goair Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/justrelief">
                  Justrelief Coupons
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/zomato">
                  Zomato Coupons
          </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <h3>
              Need Help ?
      </h3>
            <ul>
              <li>
                <a href="https://freekaamaal.com/getting-started">
                  Getting Started
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/contact-us">
                  Contact Us
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/faq">
                  FAQ's
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/press">
                  Press
          </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <h3>
              About
      </h3>
            <ul>
              <li>
                <a href="https://freekaamaal.com/about-us">
                  About Us
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/advertise-with-us">
                  Advertising Opportunities
          </a>
              </li>
              <li>
                <a href="https://freekaamaal.com/contact-us">
                  Contact Us
          </a>
              </li>
              <li>
                <a href="http://careers.freekaamaal.com/">
                  Work With Us
          </a>
              </li>
              <li>
                <a href="http://blog.freekaamaal.com" target="_blank">
                  Blog
          </a>
              </li>
            </ul>
          </div>
          <div style={{ borderWidth: 1, }} className="col-12 col-md-12 col-lg-2 social-media text-center">
            <h3>Follow Us</h3>
            <ul className="d-block m-4">
              <div className="text-center">
                <li className="col d-inline mr-2">
                  <a href="//twitter.com/Offers.io" target="_blank">
                    {/* <!-- <img style="height:30px" src="images/social-media/twitter.svg" /> --> */}
                    <div className="twitter"></div>
                  </a>
                </li>
                <li className="col d-inline ml-2">
                  <a href="//www.youtube.com/user/Offers.io" target="_blank">
                    {/* <!-- <img style="height:30px" src="images/social-media/youtube.svg" /> --> */}
                    <div className="facebook"></div>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <br />
        <div className="row m-0 p-1">
          <div className="col text-center p-0">
            <span style={{ color: "#b2b1b1", paddingBottom: "10px" }}>
              <p><b>Supreme</b></p>
            </span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
