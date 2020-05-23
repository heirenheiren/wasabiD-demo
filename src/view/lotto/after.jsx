import React from 'react';
import Number from './number';
import "./index.css";
import "./after.css";


class After extends React.Component {
  constructor(props) {
    super(props);
    this.chooseBallBack= this.chooseBallBack.bind(this);
  
    this.state = {
      chooseAfterBallNumbers:[],
      afterBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12"]
    };
  }

  componentDidMount(){
    //console.log("After:componentDidMount")
  }

  //react函数每次更新组件（或者数据）都需要this.setState(state)来进行，这里补充每次调用setState()结束之后都会自动调用componentDidUpdate()钩子，因此，如果有每次更新都要进行的行动都可以写在这个钩子中。
  componentDidUpdate(){
    //console.log("After:componentDidUpdate")
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

  render() {
    return (
      <div className="after">
          <div className="after-header">
            <div className="after-header-left">— <span className="purple">后区</span> —　至少选<em className="red">2</em>个</div>
            <div className="after-header-right"></div>
          </div>
          <div className="after-number">
            <ul>
              {this.state.afterBallNumber.map(number=><Number key={number} number={number} borderColor="after" chooseBallBack={this.chooseBallBack}></Number>)}
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