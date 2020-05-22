import React from 'react';
import ReactDOM from 'react-dom';
import "./number.css";


export default class Number extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      chooseBeforeBallNumber:[],
      chooseAfterBallNumber:[]
    };
  }

  componentDidMount(){
    console.log("Number")
  }

  onClick(number,event){
    let target = event.target;
    target.style.color="#ffffff";
    if(this.props.borderColor=="before"){
      this.setState(({chooseBeforeBallNumber})=>(
        {
          chooseBeforeBallNumber:chooseBeforeBallNumber.includes(number)?chooseBeforeBallNumber.filter(item=>item!==number):[...chooseBeforeBallNumber,number]
        }
      ))
      target.style.background="#ff5b1a";
    }
    if(this.props.borderColor=="after"){
      // let arr = this.state.chooseAfterBallNumber.concat([target.textContent]);
      // this.setState({
      //   chooseAfterBallNumber:arr
      // })
      this.state.chooseAfterBallNumber.push(number)
      target.style.background="#6857ca";
    }
    //console.log([1].concat([2]))
  }

  render() {
    const chooseBeforeBallNumber = this.state
    console.log(chooseBeforeBallNumber)
    return (
      <li className="number">
          <b className="ball" id="getBallId" data-num={this.props.number} onClick={this.onClick.bind(this,this.props.number)} style={{borderColor:this.props.borderColor=="before"?"#f1f4d7":"#e2f0fb"}}>{this.props.number}</b>
          <em className="times">15</em>
      </li>
    );
  }
}