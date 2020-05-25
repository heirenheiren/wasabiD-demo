import React from 'react'
import Number from './number'
import "./index.css"
import "./before.css"

class Before extends React.Component {
  constructor(props) {
    super(props)
    this.chooseBallBack= this.chooseBallBack.bind(this)

    this.state = {
      chooseBeforeBallNumbers:[],
      selectNumber:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
      //beforeBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"]
      beforeBallNumber:[{"value":"01","background":"#fffffb","color":"#555555"},{"value":"02","background":"#fffffb","color":"#555555"},{"value":"03","background":"#fffffb","color":"#555555"},{"value":"04","background":"#fffffb","color":"#555555"},
                        {"value":"05","background":"#fffffb","color":"#555555"},{"value":"06","background":"#fffffb","color":"#555555"},{"value":"07","background":"#fffffb","color":"#555555"},{"value":"08","background":"#fffffb","color":"#555555"},
                        {"value":"09","background":"#fffffb","color":"#555555"},{"value":"10","background":"#fffffb","color":"#555555"},{"value":"11","background":"#fffffb","color":"#555555"},{"value":"12","background":"#fffffb","color":"#555555"},
                        {"value":"13","background":"#fffffb","color":"#555555"},{"value":"14","background":"#fffffb","color":"#555555"},{"value":"15","background":"#fffffb","color":"#555555"},{"value":"16","background":"#fffffb","color":"#555555"},
                        {"value":"17","background":"#fffffb","color":"#555555"},{"value":"18","background":"#fffffb","color":"#555555"},{"value":"19","background":"#fffffb","color":"#555555"},{"value":"20","background":"#fffffb","color":"#555555"},
                        {"value":"21","background":"#fffffb","color":"#555555"},{"value":"22","background":"#fffffb","color":"#555555"},{"value":"23","background":"#fffffb","color":"#555555"},{"value":"24","background":"#fffffb","color":"#555555"},
                        {"value":"25","background":"#fffffb","color":"#555555"},{"value":"26","background":"#fffffb","color":"#555555"},{"value":"27","background":"#fffffb","color":"#555555"},{"value":"28","background":"#fffffb","color":"#555555"},
                        {"value":"29","background":"#fffffb","color":"#555555"},{"value":"30","background":"#fffffb","color":"#555555"},{"value":"31","background":"#fffffb","color":"#555555"},{"value":"32","background":"#fffffb","color":"#555555"},
                        {"value":"33","background":"#fffffb","color":"#555555"},{"value":"34","background":"#fffffb","color":"#555555"},{"value":"35","background":"#fffffb","color":"#555555"}]
    }
  }

  componentDidMount(){
    console.log("Before")
  }

  chooseBallBack(chooseNumber){
    this.setState(({chooseBeforeBallNumbers})=>(
      {
        chooseBeforeBallNumbers:chooseBeforeBallNumbers.includes(chooseNumber)?chooseBeforeBallNumbers.filter(item=>item!==chooseNumber):[...chooseBeforeBallNumbers,chooseNumber]
      }
    ),()=>{
      //setState改变值并触发调用render刷新之后会走这里
      this.props.chooseBallBackToIndex(this.state.chooseBeforeBallNumbers,"before");
    })
  }

  onClearClick=(e)=>{
    this.setState(({chooseBeforeBallNumbers})=>(
      {
        beforeBallNumber:this.state.beforeBallNumber.map(item=>{
          item.background="#fffffb"
          item.color="#555555"
          this.refs[item.value].clearAll()
          return item;
        }),
        chooseBeforeBallNumbers:[]
      }
    ),()=>{
      //setState改变值并触发调用render刷新之后会走这里
      this.props.chooseBallBackToIndex(this.state.chooseBeforeBallNumbers,"before");
    })
  }

  onChooseClick=(e)=>{
    var myselect=document.getElementById("selectBefore")
    var index=myselect.selectedIndex 
    let v = myselect.options[index].value
    let a = v<30?this.randomNumber(v):this.randomNumber(this.state.beforeBallNumber.length-v)

    let newChooseBeforeBallNumbers = new Array()
    let newbeforeBallNumber = this.state.beforeBallNumber.map((item,i)=>{
      if(v<30){
        if(a.includes(i)){
          newChooseBeforeBallNumbers.push(item.value)
          item.background="#ff5b1a"
          item.color="#ffffff"
        }else{
          item.background="#fffffb"
          item.color="#555555"
        }
      }else{
        if(a.includes(i)){
          item.background="#fffffb"
          item.color="#555555"
        }else{
          newChooseBeforeBallNumbers.push(item.value)
          item.background="#ff5b1a"
          item.color="#ffffff"
        }
      }
      
      return item
    })

    this.setState({
      chooseBeforeBallNumbers:newChooseBeforeBallNumbers,
      beforeBallNumber:newbeforeBallNumber
    },()=>{
      this.props.chooseBallBackToIndex(this.state.chooseBeforeBallNumbers,"before")
    })
  }

  randomNumber(v){
    let a = new Array()
    if(v==0)return a
    while(true){
      let r = Math.random()*this.state.beforeBallNumber.length|0
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
      <div className="before">
          <div className="before-header">
            <div className="before-header-left">— <span className="orange">前区</span> —　至少选<em className="red">5</em>个</div>
            <div className="before-header-right"></div>
          </div>
          <div className="before-number">
            <ul>
              {this.state.beforeBallNumber.map(number=><Number key={number.value} ref={number.value} number={number} borderColor="before" chooseBallBack={this.chooseBallBack}></Number>)}
            </ul>
          </div>
          <div className="before-choose">
            <select id="selectBefore" className="before-choose-left" onChange={this.onChooseClick}>
              {
                this.state.selectNumber.map((item,i)=>{
                  return(
                    <option key={i} index={i} value={item}>{item}</option>
                  )
                })
              }
            </select>
            <span className="before-choose-middle" onClick={this.onChooseClick}>选择前区</span>
            <span className="before-choose-right" onClick={this.onClearClick}>清</span>
          </div>
       </div>
    );
  }
}

export default Before;