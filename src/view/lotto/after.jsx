import React from 'react';
import ReactDOM from 'react-dom';
import Number from './number';
import "./index.css";
import "./after.css";


class After extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      afterBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12"]
    };
  }

  componentDidMount(){
    console.log("After")
  }

  render() {
    return (
      <div className="after">
          <div className="after-header">
            <div className="after-header-left">— <span className="purple">后区</span> —　至少选<em className="red">2</em>个</div>
            <div className="after-header-right"></div>
          </div>
          <div className="after-number">
            <ul>
              {this.state.afterBallNumber.map(number=><Number key={number} number={number} borderColor="after"></Number>)}
            </ul>
          </div>
          <div className="after-choose">
            <div className="after-choose-left">选择后区</div>
            <div className="after-choose-right">清</div>
          </div>
       </div>
    );
  }
}

export default After;