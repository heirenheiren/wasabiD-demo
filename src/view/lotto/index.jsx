import React from 'react';
import ReactDOM from 'react-dom';
import Cancle from "./cancle"
import Define from "./define"
import "./index.css";


class Index extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  render() {
    return (
      <div className="global">
          
       </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));