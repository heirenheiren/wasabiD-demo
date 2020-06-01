import React from 'react'
import Bet from './bet'
import "./random.css"


class Random extends React.Component {
  constructor(props) {
    super(props);
    this.randomNumber = this.randomNumber.bind(this);
    this.deleteOneBet = this.deleteOneBet.bind(this);
    this.updateBetList = this.updateBetList.bind(this);

    this.state = {
      beforeBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"],
      afterBallNumber:["01","02","03","04","05","06","07","08","09","10","11","12"],
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

  //由父类调用更新下注数组，并去重
  updateBetList(bets){
    let betArr = new Array()
    if(this.state.betList.length!=0){
      for(let X of bets){
        let bx = X.bball
        let ax = X.aball

        let flag
        for(let Y of this.state.betList){
          let by = Y.bball
          let ay = Y.aball

          let bn=0
          bx.forEach(m=>{
            by.forEach(n=>{
              if(m==n){
                bn++
              }
            })
          })

          let an=0
          ax.forEach(m=>{
            ay.forEach(n=>{
              if(m==n){
                an++
              }
            })
          })

          if(bn==5&&an==2){
            console.log(X,Y)
            flag = true
            break
          }
        }
        if(flag) continue
        betArr.push(X)
      }
    }
    let betList = this.state.betList.length==0?bets:betArr.concat(this.state.betList)
    this.setState({
      betList:betList,
      account:betList.length*2*this.state.times
    })
  }

  //下注金额的倍数，加一减一和自动输入，不能大于999小于1，并更新总金额
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

  //机选改变输入框的值
  onChangeBet=(e)=>{
    this.setState({
      betNum:this.refs.bet.value
    })
  }

  //从一个数组随机选取N个数字
  randomBall(n,baseBall){
    let a = new Array()
    if(n==0) return a
    while(true){
      let r = baseBall[Math.random()*(baseBall.length)|0]
      if(a.includes(r)){
        continue
      }
      a.push(r);
      if(a.length==n) break
    }
    //console.log(a)
    return a
  }

  //随机生成一注，并跟现有的投注做比较是否有重复，前面5个数字和后面两个数字单独比较，如果都相等则跳过，继续随机生成下一注，直到数组元素打到入参要求的个数
  randomNumber(t){
    let rs = this.state.betList
    let l = rs.length//初始长度
    while(true){
      let bball = this.randomBall(5,this.state.beforeBallNumber)
      let aball = this.randomBall(2,this.state.afterBallNumber)

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
      
      let r={"bball":bball.sort(),"aball":aball.sort()}
      rs.push(r)

      if(rs.length-l==t) break
    }
    //console.log(rs)
    return rs
  }

  //传入多少个随机生成多少注
  random=(t,event)=>{
    window.onselectstart = function(){return false}//防止鼠标选中文字变绿色
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

  //清理投注的彩票，号码列表和金额都清空
  clearBet=(event)=>{
    window.onselectstart = function(){return false}
    this.setState({
      betList:[],
      account:0
    })
  }

  //子组件调用的方法，把选中的投注ID从号码列表删除，并更新总金额
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
    //<input type="text" defaultValue="10注" ref={input => this.input = input}></input>
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