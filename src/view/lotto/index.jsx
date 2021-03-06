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
      count:0
    };
  }

  componentDidMount(){
    console.log("Index")
  }

  //接收子组件选择的号码，更新state的选中号码个数和这些球的所有组合，当前后个数都符合要求则计算前后号码的组合组成的所有投注和数量，并把所有可能的投注传给子组件展示
  chooseBallBackToIndex(chooseNumbers,area){
    chooseNumbers.sort()
    let count=0
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
        this.refs.random.updateBetList(this.renderBets(b,this.state.chooseAfterNumber))
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
        this.refs.random.updateBetList(this.renderBets(this.state.chooseBeforeNumber,a))
      }
    }

    this.setState({
      count:count.toFixed(0)
    })
  }

  //把投注前后号码的组合再组成所有的投注
  renderBets(bs,as){
    let rs = new Array()
    for(let i=0;i<bs.length;i++){
      for(let j=0;j<as.length;j++){
        rs.push({"bball":bs[i],"aball":as[j]})
        //if(rs.length==10) break
      }
    }
    //console.log(rs)
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
          <Random ref="random"></Random>
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