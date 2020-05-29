import React from 'react'
import ReactDOM from 'react-dom'
import Before from './before'
import After from './after'
import Count from './count'
import Random from './random'
import "./index.css"
import Tools from './tools'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.chooseBallBackToIndex = this.chooseBallBackToIndex.bind(this);
    
    this.state = {
      chooseBeforeNumber:[],
      chooseAfterNumber:[],
      chooseBeforeCount:0,
      chooseAfterCount:0,
      count:0,
      betList:[]
    };
  }

  componentDidMount(){
    console.log("Index")
  }

  chooseBallBackToIndex(chooseNumbers,area){
    chooseNumbers.sort()
    let count=0
    let betList=[]
    if(area=="before"){
      this.setState({
        chooseBeforeCount:chooseNumbers.length,
        chooseBeforeNumber:chooseNumbers.length>=5?Tools.combin(chooseNumbers,5):[]
      })
      if(chooseNumbers.length>=5&&this.state.chooseAfterCount>=2){
        count = this.combinatorialNumber(chooseNumbers.length,5)*this.combinatorialNumber(this.state.chooseAfterCount,2)
        //todo选中号码的打印功能
        //let betNum = Number.parseInt("01")
        let b = Tools.combin(chooseNumbers,5)
        betList = this.renderBets(b,this.state.chooseAfterNumber)
      }
    }

    if(area=="after"){
      this.setState({
        chooseAfterCount:chooseNumbers.length,
        chooseAfterNumber:chooseNumbers.length>=2?Tools.combin(chooseNumbers,2):[]
      })
      if(chooseNumbers.length>=2&&this.state.chooseBeforeCount>=5){
        count = this.combinatorialNumber(chooseNumbers.length,2)*this.combinatorialNumber(this.state.chooseBeforeCount,5)
        //todo选中号码的打印功能
        let a = Tools.com(chooseNumbers,2)
        betList = this.renderBets(a,this.state.chooseBeforeNumber)
      }
    }
    this.setState({
      count:count.toFixed(0),
      betList:betList
    })
  }

  renderBets(bs,as){
    let rs = new Array()
    for(let i=0;i<bs.length;i++){
      for(let j=0;j<as.length;j++){
        console.log(bs[i],as[j])
        rs.push({"bball":bs[i],"aball":as[j]})
        if(rs.length==10) break
      }
    }
    return rs
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