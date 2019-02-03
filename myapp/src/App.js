import React, { Component } from 'react';
// import ReactTooltip         from 'react-tooltip';
import Popup from "reactjs-popup";

import { Animated } from "react-animated-css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

import './App.scss';

import Header from './components/header';
import Content from './components/content';
import Search from './components/search';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      var: 'hello',
      loaded: false,
      open: false
    }
  }

  componentDidMount() {
    // this.setState ({ loaded: true });
    // setTimeout(d() => {
    //   this.setState({ open: true })
    // }, 5000);
  }

  componentWillMount() {

  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/skills' component={Search} />
            <Route exact path='/' component={Content} />
          </Switch>
          <Footer />

          <Popup
            open={this.state.open}
            // closeOnDocumentClick
            // 
            // closeOnDocumentCli ck={false}
            onClose={() => { this.setState({ open: false }) }}>

            <div className="modalm p-2">
              <div className="newsletter row container-fluid">
                <div className="col-12 col-md-6 col-lg-7">
                  <p className="lead m-0 text-center mt-3">Signup To Track the deals that you love</p>
                </div>
                <div className="col-12 col-md-6 col-lg-5 text-center">
                  <form className="form-inline m-0 mt-2">
                    <div className="text-center ml-auto mr-auto row p-0">
                      <input className="form-control mb-2" id="inlineFormInputName2" style={{ padding: 10 }} placeholder="Enter email address" type="text" />
                      <button style={{ marginLeft: 5 }} className="btn btn-primary" type="submit">
                        <b>Subscribe</b>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Popup>

        </div>
      </Router>
    )
  }
}

// export default hot(module)(App);
export default App;