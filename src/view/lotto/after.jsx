import React from 'react';
import ReactDOM from 'react-dom';
import "./after.css";


class After extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("After")
  }

  render() {
    return (
      <div className="after">
          <div className="after-header">
            <div className="after-header-left">— 后区 —　至少选2个</div>
            <div className="after-header-right"></div>
          </div>
          <div className="after-number"></div>
          <div className="after-choose">
            <div className="after-choose-left"></div>
            <div className="after-choose-right"></div>
          </div>
       </div>
    );
  }
}

export default After;