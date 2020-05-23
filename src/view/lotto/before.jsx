import React from 'react';
import Number from './number';
import "./index.css";
import "./before.css";


class Before extends React.Component {
  constructor(props) {
    super(props);
    this.chooseBallBack= this.chooseBallBack.bind(this);

    this.state = {
      chooseBeforeBallNumbers:[],
      beforeBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"]
    };
  }

  componentDidMount(){
    //console.log("Before:componentDidMount")
  }

  componentDidUpdate(){
    //console.log("Before:componentDidUpdate")
  }

  chooseBallBack(chooseNumber){
    this.setState(({chooseBeforeBallNumbers})=>(
      {
        chooseBeforeBallNumbers:chooseBeforeBallNumbers.includes(chooseNumber)?chooseBeforeBallNumbers.filter(item=>item!==chooseNumber):[...chooseBeforeBallNumbers,chooseNumber]
      }
    ),()=>{
      this.props.chooseBallBackToIndex(this.state.chooseBeforeBallNumbers,"before");
    })
  }

  render() {
    return (
      <div className="before">
          <div className="before-header">
            <div className="before-header-left">— <span className="orange">前区</span> —　至少选<em className="red">5</em>个</div>
            <div className="before-header-right"></div>
          </div>
          <div className="before-number">
            <ul>
              {this.state.beforeBallNumber.map(number=><Number key={number} number={number} borderColor="before" chooseBallBack={this.chooseBallBack}></Number>)}
            </ul>
          </div>
          <div className="before-choose">
            <div className="before-choose-left">滚动</div>
            <div className="before-choose-middle">选择前区</div>
            <div className="before-choose-right">清</div>
          </div>
       </div>
    );
  }
}

export default Before;