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
          
       </div>
    );
  }
}

export default Count;