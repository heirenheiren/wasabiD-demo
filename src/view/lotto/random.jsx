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
    console.log("Random")
  }

  render() {
    return (
      <div className="random">
          <div className="random-top">
            <div className="random-top-left"></div>
            <div className="random-top-right"></div>
          </div>
          <div className="random-bottom">
            <div className="random-bottom-left"></div>
            <div className="random-bottom-right"></div>
          </div>
       </div>
    );
  }
}

export default Random;