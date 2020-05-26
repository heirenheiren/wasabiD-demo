import React from 'react'
import Bet from './bet'
import {cmn} from './tools'
import "./random.css"


class Random extends React.Component {
  constructor(props) {
    super(props);
    this.randomNumber = this.randomNumber.bind(this);
    this.deleteOneBet = this.deleteOneBet.bind(this);

    this.state = {
      betNum:10,
      times:1,
      betList:[],
      account:0,
      price:2.00
    };
  }

  componentDidMount(){
    console.log("Random")
  }

  renderBets(bs,as){
    if(bs.length>=5&&as.length>=2){
      let br = cmn(bs,5)
      let ar = cmn(as,2)

      let rs = new Array()

      for(let i=0;i<=br.length;i++){
        for(let j=0;j<=ar.length;j++){
          let r={"bball":br[i],"aball":ar[j]}
          console.log(r)
          rs.push(r)
          if(rs.length==10)break
        }
      }

      // this.setState({
      //   betList:rs.concat(this.state.betList)
      // })
    }
  }

  changeTimes=(type,event)=>{
    let input = this.refs.times
    let value = input.value 
    if(type=="add") value++
    if(type=="sub") value--
    
    let times=0
    if(type=="self"){
      times = event.target.value>999?999:event.target.value
    }else{
      times = value>999?999:value
    }
    times = times<=1?1:times
    this.setState({
      times:times,
      account:this.state.betList.length*2*times,
      price:2*times
    })
  }

  randomBall(n,length){
    let a = new Array()
    if(n==0) return a
    while(true){
      let r = Math.random()*length|0
      r++
      if(a.includes(r)){
        continue
      }
      a.push(r);
      if(a.length==n) break
    }
    //console.log(a)
    return a
  }

  onChangeBet=(e)=>{
    this.setState({
      betNum:this.refs.bet.value
    })
  }

  randomNumber(t){
    let rs = this.state.betList
    let l = rs.length//初始长度
    while(true){
      let bball = this.randomBall(5,35)
      let aball = this.randomBall(2,12)

      let flag = false
      //rs.every((item,index)=>{
      for(let item of rs){
        let br = item.bball
        let ar = item.aball

        let bn=0
        bball.forEach(m=>{
          br.forEach(n=>{
            if(m==n){
              bn++
            }
          })
        })

        let an=0
        aball.forEach(m=>{
          ar.forEach(n=>{
            if(m==n){
              an++
            }
          })
        })

        if(bn==5&&an==2){
          flag = true
          break
        }
      }

      if(flag) continue
      
      let r={"bball":bball,"aball":aball}
      rs.push(r)

      if(rs.length-l==t) break
    }
    //console.log(rs)
    return rs
  }

  random=(t,event)=>{
    window.onselectstart = function(){return false}
    if(t==10){//特殊处理
      t = this.refs.bet.value
    }
    //let betList = this.state.betList.concat(this.randomNumber(t))机选去重处理不再需要拼接
    let betList = this.randomNumber(t)
    this.setState({
      betList:betList,
      account:betList.length*2*this.state.times
    })
  }

  clearBet=(event)=>{
    window.onselectstart = function(){return false}
    this.setState({
      betList:[],
      account:0
    })
  }

  deleteOneBet(i){
    let betList = this.state.betList.filter((value,index,self)=>{
      return index!=i
    })
    this.setState({
      betList:betList,
      account:betList.length*this.state.price
    })
  }
  
  render() {
    return (
      <div className="random">
          <div className="random-top">
            <div className="random-top-left">
              <table className="random-top-left-table">
                <tbody>
                  {this.state.betList.map((bet,index)=><Bet key={index} index={index} bet={bet} deleteOneBet={this.deleteOneBet}></Bet>)}
                </tbody>
              </table>
            </div>
            <div className="random-top-right">
              <a className="random-top-right-btn" title="点击机选1注" onClick={this.random.bind(this,1)} id="link146">机选1注</a>
              <a className="random-top-right-btn" title="点击机选5注" onClick={this.random.bind(this,5)} id="link147">机选5注</a>
              <p className="random-top-right-btn-p">
                <input type="text" onChange={this.onChangeBet} ref="bet" value={this.state.betNum}></input>
						    <a className="random-top-right-btn" onClick={this.random.bind(this,10)} id="link148">机选</a>
              </p>
              <a className="random-top-right-btn clear" title="点击清空列表" onClick={this.clearBet} id="link149">清空列表</a>
            </div>
          </div>
          <div className="random-bottom">
            <div className="random-bottom-left">倍数
              <div className="random-bottom-left-numsel"> 
                <span className="random-bottom-left-numsel_l" onClick={this.changeTimes.bind(this,"sub")}> - </span> 
                <span className="random-bottom-left-numsel_m">
                  <input type="text" ref="times" onChange={this.changeTimes.bind(this,"self")} value={this.state.times}/>
                </span> 
                <span className="random-bottom-left-numsel_r" onClick={this.changeTimes.bind(this,"add")}> + </span> 
              </div>
            </div>
            <span className="random-bottom-right">金额 <em className="red">{this.state.price}</em>元&nbsp;&nbsp;(<span>1</span>注) &nbsp;&nbsp;共 <em className="red">{this.state.account}</em> 元</span>
          </div>
       </div>
    );
  }
}

export default Random;