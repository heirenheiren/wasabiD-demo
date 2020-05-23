import React from 'react';
import ReactDOM from 'react-dom';
import "./random.css";


class Random extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    //console.log("Random:componentDidMount")
  }

  render() {
    return (
      <div className="random">
          <div className="random-top">
            <div className="random-top-left"></div>
            <div className="random-top-right"></div>
          </div>
          <div className="random-bottom">
            <div className="random-bottom-left">倍数</div>
            <div className="random-bottom-right">金额 2.00元  (1注)</div>
          </div>
       </div>
    );
  }
}

export default Random;