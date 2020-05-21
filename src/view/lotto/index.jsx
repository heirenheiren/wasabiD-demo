import React from 'react';
import ReactDOM from 'react-dom';
import Before from './before'
import After from './after'
import Count from './count'
import Random from './random'
import "./index.css";


class Index extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("Index")
  }

  render() {
    return (
      <div className="global">
          <div className='choose'>
            <Before></Before>
            <After></After>
          </div>
          <Count></Count>
          <Random></Random>
       </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));