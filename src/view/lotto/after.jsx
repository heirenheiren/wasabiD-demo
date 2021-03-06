import React from 'react'
import Ball from './ball'
import "./after.css"

class After extends React.Component {
  constructor(props) {
    super(props)
    this.chooseBallBack= this.chooseBallBack.bind(this)
  
    this.state = {
      chooseAfterBallNumbers:[],
      selectNumber:[2,3,4,5,6,7,8,9,10,11,12],
      //afterBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12"]
      afterBallNumber:[{"value":"01","check":false},{"value":"02","check":false},
                       {"value":"03","check":false},{"value":"04","check":false},
                       {"value":"05","check":false},{"value":"06","check":false},
                       {"value":"07","check":false},{"value":"08","check":false},
                       {"value":"09","check":false},{"value":"10","check":false},
                       {"value":"11","check":false},{"value":"12","check":false}]
    }
  }

  componentDidMount(){
    console.log("After")
  }

  chooseBallBack(chooseNumber){
    this.setState(({chooseAfterBallNumbers})=>(
      {
        chooseAfterBallNumbers:chooseAfterBallNumbers.includes(chooseNumber)?chooseAfterBallNumbers.filter(item=>item!==chooseNumber):[...chooseAfterBallNumbers,chooseNumber]
      }
    ),()=>{
      this.props.chooseBallBackToIndex(this.state.chooseAfterBallNumbers,"after")
    })
  }

  onClearClick=(e)=>{
    this.setState(({chooseBeforeBallNumbers})=>(
      {
        afterBallNumber:this.state.afterBallNumber.map(item=>{
          this.refs[item.value].checkBall(false)
          return item
        }),
        chooseAfterBallNumbers:[]
      }
    ),()=>{
      //setState改变值并触发调用render刷新之后会走这里
      this.props.chooseBallBackToIndex(this.state.chooseAfterBallNumbers,"after")
    })
  }

  onChooseClick=(e)=>{
    window.onselectstart = function(){return false}
    var myselect=document.getElementById("selectAfter")
    var index=myselect.selectedIndex
    let v = myselect.options[index].value
    let a = v<10?this.randomNumber(v):this.randomNumber(this.state.afterBallNumber.length-v)

    let newChooseAfterBallNumbers = new Array()
    let newAfterBallNumber = this.state.afterBallNumber.map((item,i)=>{
      let check=false
      if(v<10){
        if(a.includes(i)){
          newChooseAfterBallNumbers.push(item.value)
          check=true
        }
      }else{
        if(!a.includes(i)){
          newChooseAfterBallNumbers.push(item.value)
          check=true
        }
      }

      this.refs[item.value].checkBall(check)
      return item
    })

    this.setState({
      chooseAfterBallNumbers:newChooseAfterBallNumbers,
      afterBallNumber:newAfterBallNumber
    },()=>{
      this.props.chooseBallBackToIndex(this.state.chooseAfterBallNumbers,"after")
    })
  }

  randomNumber(v){
    let a = new Array()
    if(v==0)return a
    while(true){
      let r = Math.random()*this.state.afterBallNumber.length|0
      if(a.includes(r)){
        continue
      }
      a.push(r);
      if(a.length==v) break
    }
    return a
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
              {this.state.afterBallNumber.map(number=><Ball key={number.value} ref={number.value} number={number} style="after" chooseBallBack={this.chooseBallBack}></Ball>)}
            </ul>
          </div>
          <div className="after-choose">
            <select id="selectAfter" className="after-choose-left" onChange={this.onChooseClick}>
              {
                this.state.selectNumber.map((item,i)=>{
                  return(
                    <option key={i} index={i} value={item}>{item}</option>
                  )
                })
              }
            </select>
            <span className="after-choose-middle" onClick={this.onChooseClick}>选择后区</span>
            <span className="after-choose-right" onClick={this.onClearClick}>清</span>
          </div>
       </div>
    );
  }
}

export default After;