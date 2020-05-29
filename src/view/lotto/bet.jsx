import React from 'react'
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
    return (
      <tr>
        <td><span className="list-del" title="删除" onClick={this.remove}>删除</span></td>
        <td className="random-top-left-table-td">
          <span className="orange">{this.props.bet.bball.join()}</span>
          <span className="purple">{this.props.bet.aball.join()}</span>
          <span className="list-num-info">[ 单式机选 1注 2元 ]</span>
        </td>
        <td><span className="list-modefy">修改</span></td>
        <td align="left"><label className="list-zj"><input className="hide" type="checkbox"/></label></td>
      </tr>
    );
  }
}

export default Bet;