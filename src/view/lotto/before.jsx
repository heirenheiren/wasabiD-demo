import React from 'react';
import ReactDOM from 'react-dom';
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
            <div className="before-header-left">— 前区 —　至少选5个</div>
            <div className="before-header-right"></div>
          </div>
          <div className="before-number"></div>
          <div className="before-choose">
            <div className="before-choose-left"></div>
            <div className="before-choose-right"></div>
          </div>
       </div>
    );
  }
}

export default Before;