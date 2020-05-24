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

  UNSAFE_componentWillMount(){}

  componentDidMount(){
    console.log("Number")
  }

  UNSAFE_componentWillReceiveProps(props){
    if(props.borderColor=="before"&&props.clearAll==true){
      this.setState({
        selfBeforNumber:[],
        selfAfterNumber:this.state.selfAfterNumber
      },()=>{
        console.log(this.state.selfBeforNumber)
      })
    }
    if(props.borderColor=="after"&&props.clearAll==true){
      this.setState({
        selfBeforNumber:this.state.selfBeforNumber,
        selfAfterNumber:[]
      },()=>{
        console.log(this.state.selfAfterNumber)
      })
    }
  }

  shouldComponentUpdate(props){return true}

  UNSAFE_componentWillUpdate(props){}

  onClick(chooseNumber,event){
    //let target = event.target;

    if(this.props.borderColor=="before"){
      if(this.state.selfBeforNumber.includes(chooseNumber)){
        //target.style.background="#fffffb";
        //target.style.color="#555555";
        this.props.number.background="#fffffb";
        this.props.number.color="#555555";
      }else{
        //target.style.background="#ff5b1a";
        //target.style.color="#ffffff";
        this.props.number.background="#ff5b1a";
        this.props.number.color="#ffffff";
      }
      this.setState({
        selfBeforNumber:this.state.selfBeforNumber.includes(chooseNumber)?[]:[chooseNumber]
      })
    }
    if(this.props.borderColor=="after"){
      if(this.state.selfAfterNumber.includes(chooseNumber)){
        //target.style.background="#f6fbff";
        //target.style.color="#555555";
        this.props.number.background="#f6fbff";
        this.props.number.color="#555555";
      }else{
        //target.style.background="#6857ca";
        //target.style.color="#ffffff";
        this.props.number.background="#6857ca";
        this.props.number.color="#ffffff";
      }
      this.setState({
        selfAfterNumber:this.state.selfAfterNumber.includes(chooseNumber)?[]:[chooseNumber]
      })
      //this.state.chooseAfterBallNumber.concat([number])
      //this.state.chooseAfterBallNumber.push(number)
    }
    this.props.chooseBallBack(chooseNumber);
  }

  render() {
    //console.log(this.props.number)
    return (
      <li className="number">
          <b className="ball" onClick={this.onClick.bind(this,this.props.number.value)} style={{

            borderColor:this.props.borderColor=="before"?"#f1f4d7":"#e2f0fb",
            background:this.props.number.background,
            color:this.props.number.color

            }}>{this.props.number.value}</b>
          <em className="times">15</em>
      </li>
    );
  }

  componentDidUpdate(){}

  componentWillUnmount() {}
}