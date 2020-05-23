import React from 'react';
import Number from './number';
import "./index.css";
import "./after.css";


class After extends React.Component {
  constructor(props) {
    super(props);
    this.chooseBallBack= this.chooseBallBack.bind(this);
  
    this.state = {
      clearBackground:false,
      chooseAfterBallNumbers:[],
      afterBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12"]
    };
  }

  chooseBallBack(chooseNumber){
    this.setState(({chooseAfterBallNumbers})=>(
      {
        chooseAfterBallNumbers:chooseAfterBallNumbers.includes(chooseNumber)?chooseAfterBallNumbers.filter(item=>item!==chooseNumber):[...chooseAfterBallNumbers,chooseNumber]
      }
    ),()=>{
      this.props.chooseBallBackToIndex(this.state.chooseAfterBallNumbers,"after");
    })
  }

  onClick=(e)=>{
    this.setState(({chooseBeforeBallNumbers})=>(
      {
        clearBackground:true,
        chooseAfterBallNumbers:[]
      }
    ),()=>{
      //setState改变值并触发调用render刷新之后会走这里
      this.props.chooseBallBackToIndex(this.state.chooseAfterBallNumbers,"after");
    })
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
              {this.state.afterBallNumber.map(number=><Number key={number} clearBackground={this.state.clearBackground} number={number} borderColor="after" chooseBallBack={this.chooseBallBack}></Number>)}
            </ul>
          </div>
          <div className="after-choose">
            <select className="after-choose-left">...</select>
            <span className="after-choose-middle">选择后区</span>
            <span className="after-choose-right" onClick={this.onClick}>清</span>
          </div>
       </div>
    );
  }
}

export default After;