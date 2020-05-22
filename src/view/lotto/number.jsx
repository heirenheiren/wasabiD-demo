import React from 'react';
import ReactDOM from 'react-dom';
import "./number.css";


class Number extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("Number")
  }

  render() {
    return (
      <div className="number">
          <b className="ball"></b>
      </div>
    );
  }
}

export default Number;