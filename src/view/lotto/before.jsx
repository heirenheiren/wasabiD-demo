import React from 'react';
import ReactDOM from 'react-dom';
import Number from './number';
import "./index.css";
import "./before.css";


class Before extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("Before")
  }

  render() {
    return (
      <div className="before">
          <div className="before-header">
            <div className="before-header-left">— <span className="orange">前区</span> —　至少选<em className="red">5</em>个</div>
            <div className="before-header-right"></div>
          </div>
          <div className="before-number">
            <Number></Number>
          </div>
          <div className="before-choose">
            <div className="before-choose-left"></div>
            <div className="before-choose-right"></div>
          </div>
       </div>
    );
  }
}

export default Before;