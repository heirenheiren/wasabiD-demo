import React,{Component} from 'react';
import { string, object } from 'prop-types'
import "./ball.css";


export default class Ball extends Component {
  state = {expanded:15}
  
  constructor(props) {
    super(props);

    this.state = {
      check:this.props.number.check
    };
  }
  
  componentDidMount(){
    console.log("Ball")
  }

  //点击球，并把号码传给父组件
  onClick=(e)=>{
    this.setState(preState=>({
      check:!preState.check
    }),()=>{
      this.props.chooseBallBack(this.props.number.value)
    })
  }

  //改变球的状态，供调用方使用
  checkBall(check){
    this.setState({
      check:check
    },()=>{

    })
  }

  render() {
    //console.log(this.props.number.value)
    let cn = this.state.check?this.props.style:""
    return (
      <li className="number">
          <b className={`ball ${cn}`} onClick={this.onClick.bind(this)}>{this.props.number.value}</b>
          <em className="times">15</em>
      </li>
    );
  }
}