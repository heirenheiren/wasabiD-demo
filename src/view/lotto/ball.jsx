import React from 'react';
import "./ball.css";


export default class Ball extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check:this.props.number.check
    };
  }
  
  componentDidMount(){
    console.log("Ball")
  }

  onClick=(e)=>{
    this.setState(preState=>({
      check:!preState.check
    }),()=>{
      this.props.chooseBallBack(this.props.number.value)
    })
  }

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