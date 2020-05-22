import React from 'react';
import ReactDOM from 'react-dom';
import "./count.css";


class Count extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("Count")
  }

  render() {
    return (
      <div className="count">
          您选择了 0 个前区号码， 0 个后区号码，共 0 注，共 0.00 元
       </div>
    );
  }
}

export default Count;