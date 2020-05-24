import React from 'react'
import Number from './number'
import "./index.css"
import "./after.css"

class After extends React.Component {
  constructor(props) {
    super(props);
    this.chooseBallBack= this.chooseBallBack.bind(this);
  
    this.state = {
      clearAll:false,
      chooseAfterBallNumbers:[],
      selectNumber:[2,3,4,5,6,7,8,9,10,11,12],
      //afterBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12"]
      afterBallNumber:[{"value":"01","background":"#f6fbff","color":"#555555"},{"value":"02","background":"#f6fbff","color":"#555555"},
                       {"value":"03","background":"#f6fbff","color":"#555555"},{"value":"04","background":"#f6fbff","color":"#555555"},
                       {"value":"05","background":"#f6fbff","color":"#555555"},{"value":"06","background":"#f6fbff","color":"#555555"},
                       {"value":"07","background":"#f6fbff","color":"#555555"},{"value":"08","background":"#f6fbff","color":"#555555"},
                       {"value":"09","background":"#f6fbff","color":"#555555"},{"value":"10","background":"#f6fbff","color":"#555555"},
                       {"value":"11","background":"#f6fbff","color":"#555555"},{"value":"12","background":"#f6fbff","color":"#555555"}]
    };
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
          item.value=item.value
          item.background="#f6fbff"
          item.color="#555555"
          return item
        }),
        chooseAfterBallNumbers:[],
        clearAll:true
      }
    ),()=>{
      //setState改变值并触发调用render刷新之后会走这里
      this.props.chooseBallBackToIndex(this.state.chooseAfterBallNumbers,"after")
    })
  }

  onChooseClick=(e)=>{
    var myselect=document.getElementById("selectAfter")
    var index=myselect.selectedIndex
    let v = myselect.options[index].value
    let a = v<10?this.randomNumber(v):this.randomNumber(this.state.afterBallNumber.length-v)

    let newChooseAfterBallNumbers = new Array()
    let newAfterBallNumber = this.state.afterBallNumber.map((item,i)=>{
      if(v<10){
        if(a.includes(i)){
          newChooseAfterBallNumbers.push(item.value)
          item.background="#6857ca"
          item.color="#ffffff"
        }else{
          item.background="#f6fbff"
          item.color="#555555"
        }
      }else{
        if(a.includes(i)){
          item.background="#f6fbff"
          item.color="#555555"
        }else{
          newChooseAfterBallNumbers.push(item.value)
          item.background="#6857ca"
          item.color="#ffffff"
        }
      }
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
              {this.state.afterBallNumber.map(number=><Number key={number.value} clearAll={this.state.clearAll} number={number} borderColor="after" chooseBallBack={this.chooseBallBack}></Number>)}
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