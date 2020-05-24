import React from 'react';
import ReactDOM from 'react-dom';
import Before from './before'
import After from './after'
import Count from './count'
import Random from './random'
import "./index.css";


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.chooseBallBackToIndex = this.chooseBallBackToIndex.bind(this);
    
    this.state = {
      chooseBeforeNumbers:0,
      chooseAfterNumbers:0,
      count:0
    };
  }

  componentDidMount(){
    console.log("Index")
  }

  chooseBallBackToIndex(chooseNumbers,area){
    //console.log(chooseNumbers,area)
    let count=0
    if(area=="before"){
      this.setState({
        chooseBeforeNumbers:chooseNumbers.length
      })
      if(chooseNumbers.length>=5&&this.state.chooseAfterNumbers>=2){
        count = this.combinatorialNumber(chooseNumbers.length,5)*this.combinatorialNumber(this.state.chooseAfterNumbers,2)
      }
    }

    if(area=="after"){
      this.setState({
        chooseAfterNumbers:chooseNumbers.length
      })
      if(chooseNumbers.length>=2&&this.state.chooseBeforeNumbers>=5){
        count = this.combinatorialNumber(chooseNumbers.length,2)*this.combinatorialNumber(this.state.chooseBeforeNumbers,5)
      }
    }
    this.setState({
      count:count
    })
  }

  render() {
    return (
      <div className="global">
          <div className='choose'>
            <Before chooseBallBackToIndex={this.chooseBallBackToIndex}></Before>
            <After chooseBallBackToIndex={this.chooseBallBackToIndex}></After>
          </div>
          <Count choose={this.state}></Count>
          <Random></Random>
       </div>
    );
  }

  //m中取n个的组合数
  combinatorialNumber(m,n){
    if(m==0)return 0;
    return this.factorial(m)/(this.factorial(m-n)*this.factorial(n))
  }
  //n的阶乘
  factorial(n){
    if(n<=1)return 1;
    return n*this.factorial(n-1)
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));