import React from 'react'
import ReactDOM from 'react-dom'
import Before from './before'
import After from './after'
import Count from './count'
import Random from './random'
import "./index.css"
import {cmn} from './tools'


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
    chooseNumbers.sort()
    let count=0
    if(area=="before"){
      this.setState({
        chooseBeforeNumbers:chooseNumbers.length
      })
      if(chooseNumbers.length>=5&&this.state.chooseAfterNumbers>=2){
        count = this.combinatorialNumber(chooseNumbers.length,5)*this.combinatorialNumber(this.state.chooseAfterNumbers,2)
        //todo选中号码的打印功能
        //let betNum = Number.parseInt("01")
        //console.log(chooseNumbers,area)
        let b = this.combin(chooseNumbers,5)
        
        console.log(b)
       
      }
    }

    if(area=="after"){
      this.setState({
        chooseAfterNumbers:chooseNumbers.length
      })
      if(chooseNumbers.length>=2&&this.state.chooseBeforeNumbers>=5){
        count = this.combinatorialNumber(chooseNumbers.length,2)*this.combinatorialNumber(this.state.chooseBeforeNumbers,5)
        //todo选中号码的打印功能
      }
    }
    this.setState({
      count:count.toFixed(0)
    })
  }

  combin(data,n,currentIndex=0,chooseArr=[],result=[],m=1){
    for(let i = currentIndex;i<data.length;i++){
          if(m===n){
                result.push([...chooseArr,data[i]])
          }
          if(m>n){
            break
          }
          this.combin(data,n,i+1,[...chooseArr,data[i],result,m+1])
    }
    return result
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
    //console.log(this.factorial(m),this.factorial(m-n)*this.factorial(n))
    return this.factorial(m)/(this.factorial(m-n)*this.factorial(n))
  }
  //n的阶乘
  factorial(n){
    if(n<=1)return 1;
    return n*this.factorial(n-1)
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));