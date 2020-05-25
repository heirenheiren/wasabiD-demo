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

  render() {
    let b=this.handleRenderData(this.props.bet.bball),a=this.handleRenderData(this.props.bet.aball)
    
    return (
      <tr>
        <td><span className="list-del" title="删除" data-click="remove($el)">删除</span></td>
        <td className="random-top-left-table-td">
          <span className="orange">{b}</span>
          <span className="purple">{a}</span>
          <span className="list-num-info">[ 单式机选 1注 2元 ]</span>
        </td>
        <td><span class="list-modefy">修改</span></td>
        <td align="left"><label class="list-zj"><input class="hide" type="checkbox"/></label></td>
      </tr>
    );
  }

  handleRenderData(d){
    let b=""
    for(let index=0;index<d.length;index++){
      if(d[index]<10){
        b=b+"0"+d[index]
      }else{
        b=b+d[index]
      }
      if(index!=d.length-1) b+=","
    }
    return b
  }
}

export default Bet;