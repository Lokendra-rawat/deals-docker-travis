import React, { Component } from 'react';
// import ReactTooltip from 'react-tooltip';
import { Animated } from "react-animated-css";
import Loader from 'react-loader-spinner'
import Popup from "reactjs-popup";

import './content.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 0,
      loading: false,
      deals: [],
      open: false,
      modaldata: null
    }
    this.getData = this.getData.bind(this);
  }

  getData(back) {
    if (back) {
      this.setState({ loading: true, pageNo: this.state.pageNo === 1 ? 1 : this.state.pageNo -= 1 })
    } else {
      this.setState({ loading: true, pageNo: this.state.pageNo += 1 })
    }

    fetch("/api/hello/" + this.state.pageNo)
      .then(data => data.json())
      .then(data => {
        this.setState({ deals: data, loading: false })
      })
    window.scrollTo(0, 0)
  }

  _handleClick = (x) => {
    this.setState({ open: true, modaldata: x })
  }

  componentDidMount() {
    this.getData()

    setTimeout(() => {
      this.setState({ open: true })
    }, 5000);
  }

  render() {
    var view
    const { modaldata } = this.state

    if (this.state.loading) {
      return (
        <Animated animationOut="fadeOut" animateOnMount={true} isVisible={true}>
          <div id="content-box">
            <div id="loader">
              <Loader
                type="Puff"//puff
                // color="#34373c"
                color="#34373c"
                height="100"
                width="100"
              />
            </div>
          </div>
        </Animated>
      )
    }

    if (this.state.deals && this.state.deals.length > 0) {
      view = this.state.deals.map((x, i) => (
        <Animated animationIn="fadeIn" animationOut="jello" animationInDelay={i * 10} animateOnMount={true} isVisible={true} key={x._id} className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 outer-box">
          {/* <div className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 outer-box"> */}
          <div className="box" onClick={() => this._handleClick(x)}>
            <div className="image border">
              <img onError={e => { console.log(e); e.src = 'https://ryanacademy.ie/wp-content/uploads/2017/08/placeholder-Copy.png' }} data-original={x.smallImageUrl} src={x.smallImageUrl} />
            </div>
            <div className="">
              {/* <ReactTooltip id={x._id} /> */}
              <p className="dealname" data-tip={x.dealName} data-effect="solid" data-delay-show={80} data-for={x._id} data-place="top">
                {x.spinName ? x.spinName : x.dealName}
              </p>
              <div className="box-text">
                <div className="price">
                  <div className="">
                    <del className="cutprice">
                      <small>
                        {x.cutPrice}
                      </small>
                    </del>
                    <span className="mainprice">
                      ${x.mainPrice}
                    </span>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="text-left">
                    <a className="storename float-left mt-2" href={x.storename}>
                      {x.storeName}
                    </a>
                    <a className="getdeal btn btn-primary btn-sm float-right" data-tip={"Get this Deal for $" + x.mainPrice} data-delay-show={80} data-for={x._id} data-effect="solid" href={x.dealUrl}>
                      Get deal
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Animated>
      ))
    }

    return (
      <div className="text-center">
        {/* <p className="text-secondary" style={{ padding: 10 }}>On Page {this.state.pageNo}</p> */}
        <br />
        <div className="text-center ml-auto mr-auto">
          {this.state.pageNo > 1 && <button style={{ borderRadius: "2rem", marginRight: "10px" }} className="btn btn-secondary" onClick={() => { this.getData('back') }}>
            Previous Deals
            </button>}
          <button style={{ borderRadius: "2rem" }} className="btn btn-secondary" onClick={() => { this.getData() }}>
            View More Deals
            </button>
        </div>
        <br />
        <br />

        <div className="container">
          {this.state.deals && <Animated animationIn="fadeIn" animationOut="jello" animationInDelay={300} animateOnMount={true} isVisible={true} className="row m-0" id="content-box">
            {view}
          </Animated>}
          <br />
          <br />
          <br />
          <div className="text-center ml-auto mr-auto">
            {this.state.pageNo > 1 && <button style={{ borderRadius: "2rem", marginRight: "10px" }} className="btn btn-secondary" onClick={() => { this.getData('back') }}>
              Previous Deals
            </button>}
            <button style={{ borderRadius: "2rem" }} className="btn btn-secondary" onClick={() => { this.getData() }}>
              View More Deals
            </button>
          </div>

          {modaldata !== null && <Popup
            open={this.state.open}
            onClose={() => { this.setState({ open: false }) }}>
            <div className="box">
              <div className="image border p-4">
                <img style={{ maxWidth: 350, maxHeight: 450 }} onError={e => { e.src = 'images/supreme1.jpg' }} data-original={modaldata.bigImageUrl} src={modaldata.bigImageUrl} />
              </div>
              <div className="box">
                {/* <ReactTooltip id={modaldata._id} /> */}
                <p className="dealname" data-tip={modaldata.dealName} data-effect="solid" data-delay-show={80} data-for={modaldata._id} data-place="top">
                  {modaldata.spinName ? modaldata.spinName : modaldata.dealName}
                </p>
                <div className="box-text">
                  <div className="price">
                    <div className="">
                      <del className="cutprice">
                        <small>
                          {modaldata.cutPrice}
                        </small>
                      </del>
                      <span className="mainprice">
                        ${modaldata.mainPrice}
                      </span>
                    </div>
                  </div>
                  <div className="clearfix">
                    <div className="text-left">
                      <a className="storename float-left mt-2" href={modaldata.storename}>
                        {modaldata.storeName}
                      </a>
                      <a className="getdeal btn btn-primary btn-sm float-right" data-tip={"Get this Deal for $" + modaldata.mainPrice} data-delay-show={80} data-for={modaldata._id} data-effect="solid" href={modaldata.dealUrl}>
                        Get deal
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popup>}
        </div>
      </div>
    )
  }
}

export default Content;
