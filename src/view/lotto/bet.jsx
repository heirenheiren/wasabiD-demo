import React from 'react'
import "./index.css"
import "./bet.css"

class Bet extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
    }
  }

  componentDidMount(){
    console.log("Bet")
  }

  remove=(e)=>{
    this.props.deleteOneBet(this.props.index)
  }

  render() {
    let b=this.handleRenderData(this.props.bet.bball),a=this.handleRenderData(this.props.bet.aball)
    return (
      <tr>
        <td><span className="list-del" title="删除" onClick={this.remove}>删除</span></td>
        <td className="random-top-left-table-td">
          <span className="orange">{b}</span>
          <span className="purple">{a}</span>
          <span className="list-num-info">[ 单式机选 1注 2元 ]</span>
        </td>
        <td><span className="list-modefy">修改</span></td>
        <td align="left"><label className="list-zj"><input className="hide" type="checkbox"/></label></td>
      </tr>
    );
  }

  handleRenderData(d){
    let a = new Array()
    for(let index=0;index<d.length;index++){
      if(d[index]<10){
        a.push("0"+d[index])
      }else{
        a.push(d[index])
      }
    }
    a.sort()

    // let b=""
    // for(let index=0;index<a.length;index++){
    //   if(index!=a.length-1){
    //     b+=a[index]+","
    //   }else{
    //     b+=a[index]
    //   }
    // }
    return a.join()
  }
}

export default Bet;