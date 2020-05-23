import React from 'react';
import "./number.css";


export default class Number extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      //存储当前数组球的过渡值
      selfBeforNumber:[],
      selfAfterNumber:[]
    };
  }

  componentDidMount(){
    console.log("Number")
  }

  componentWillUnmount() {
    console.log("888888")
  }

  onClick(chooseNumber,event){
    let target = event.target;

    if(this.props.borderColor=="before"){
      console.log(this.state.chooseBeforeBallNumber)
      if(this.state.selfBeforNumber.includes(chooseNumber)){
        target.style.background="#fffffb";
        target.style.color="#555555";
      }else{
        target.style.background="#ff5b1a";
        target.style.color="#ffffff";
      }
      this.setState({
        selfBeforNumber:this.state.selfBeforNumber.includes(chooseNumber)?[]:[chooseNumber]
      })
    }
    if(this.props.borderColor=="after"){
      if(this.state.selfAfterNumber.includes(chooseNumber)){
        target.style.background="#f6fbff";
        target.style.color="#555555";
      }else{
        target.style.background="#6857ca";
        target.style.color="#ffffff";
      }
      this.setState({
        selfAfterNumber:this.state.selfAfterNumber.includes(chooseNumber)?[]:[chooseNumber]
      })
      // this.setState({
      //   chooseAfterBallNumber:this.state.chooseAfterBallNumber.concat([number])
      // })
      //this.state.chooseAfterBallNumber.push(number)
    }
    this.props.chooseBallBack(chooseNumber);
  }

  render() {
    return (
      <li className="number">
          <b className="ball" onClick={this.onClick.bind(this,this.props.number)} style={{borderColor:this.props.borderColor=="before"?"#f1f4d7":"#e2f0fb"}}>{this.props.number}</b>
          <em className="times">15</em>
      </li>
    );
  }
}