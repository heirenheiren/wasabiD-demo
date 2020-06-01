import React from 'react'
import Ball from './ball'
import "./before.css"

class Before extends React.Component {
  constructor(props) {
    super(props)
    this.chooseBallBack= this.chooseBallBack.bind(this)

    this.state = {
      chooseBeforeBallNumbers:[],
      selectNumber:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
      //beforeBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"]
      beforeBallNumber:[{"value":"01","check":false},{"value":"02","check":false},{"value":"03","check":false},{"value":"04","check":false},
                        {"value":"05","check":false},{"value":"06","check":false},{"value":"07","check":false},{"value":"08","check":false},
                        {"value":"09","check":false},{"value":"10","check":false},{"value":"11","check":false},{"value":"12","check":false},
                        {"value":"13","check":false},{"value":"14","check":false},{"value":"15","check":false},{"value":"16","check":false},
                        {"value":"17","check":false},{"value":"18","check":false},{"value":"19","check":false},{"value":"20","check":false},
                        {"value":"21","check":false},{"value":"22","check":false},{"value":"23","check":false},{"value":"24","check":false},
                        {"value":"25","check":false},{"value":"26","check":false},{"value":"27","check":false},{"value":"28","check":false},
                        {"value":"29","check":false},{"value":"30","check":false},{"value":"31","check":false},{"value":"32","check":false},
                        {"value":"33","check":false},{"value":"34","check":false},{"value":"35","check":false}]
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

  //清理选中的号码，并把号码的状态还原，把父组件的号码也清理
  onClearClick=(e)=>{
    this.setState(({chooseBeforeBallNumbers})=>(
      {
        beforeBallNumber:this.state.beforeBallNumber.map(item=>{
          this.refs[item.value].checkBall(false)
          return item;
        }),
        chooseBeforeBallNumbers:[]
      }
    ),()=>{
      //setState改变值并触发调用render刷新之后会走这里
      this.props.chooseBallBackToIndex(this.state.chooseBeforeBallNumbers,"before");
    })
  }

  //前面三十个随机，大于30则随机生成大于三十的号码并抛弃剩余就是需要的号码，重置state选中的号码和状态，并把状态传给子组件，把选中的号码传给父组件
  onChooseClick=(e)=>{
    window.onselectstart = function(){return false}
    var myselect=document.getElementById("selectBefore")
    var index=myselect.selectedIndex 
    let v = myselect.options[index].value
    let a = v<30?this.randomNumber(v):this.randomNumber(this.state.beforeBallNumber.length-v)

    let newChooseBeforeBallNumbers = new Array()
    let newbeforeBallNumber = this.state.beforeBallNumber.map((item,i)=>{
      let check=false
      if(v<30){
        if(a.includes(i)){
          newChooseBeforeBallNumbers.push(item.value)
          check=true
        }
      }else{
        if(!a.includes(i)){
          newChooseBeforeBallNumbers.push(item.value)
          check=true
        }
      }
      //更新子组件状态
      this.refs[item.value].checkBall(check)
      return item
    })

    this.setState({
      chooseBeforeBallNumbers:newChooseBeforeBallNumbers,
      beforeBallNumber:newbeforeBallNumber
    },()=>{
      this.props.chooseBallBackToIndex(this.state.chooseBeforeBallNumbers,"before")
    })
  }

  //随机生成入参个数的号码
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
              {this.state.beforeBallNumber.map(number=><Ball key={number.value} ref={number.value} number={number} style="before" chooseBallBack={this.chooseBallBack}></Ball>)}
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