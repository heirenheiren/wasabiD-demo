import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
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
          <p className="count-gray">您选择了 <em className="orange">3</em> 个前区号码， <em className="purple">0</em> 个后区号码，共 <em className="red">0</em> 注，共 <em className="red">0.00</em> 元</p>
       </div>
    );
  }
}

export default Count;