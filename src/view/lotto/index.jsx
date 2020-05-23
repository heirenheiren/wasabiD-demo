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
    this.chooseBallBackToIndex = this.chooseBallBackToIndex.bind(this);
    this.state = {
      chooseNumbers:null,
      area:null
    };
  }

  componentDidMount(){
    //console.log("Index:componentDidMount")
  }

  shouldComponentUpdate(nextProps,nextState){
    //console.log("Index:shouldComponentUpdate",nextProps,nextState)
    return true;
  }

  chooseBallBackToIndex(chooseNumbers,area){
    console.log(chooseNumbers,area)
      this.setState({
        chooseNumbers:chooseNumbers,
        area:area
      })
  }

  render() {
    //console.log(this.state)
    return (
      <div className="global">
          <div className='choose'>
            <Before chooseBallBackToIndex={this.chooseBallBackToIndex}></Before>
            <After chooseBallBackToIndex={this.chooseBallBackToIndex}></After>
          </div>
          <Count choose={this.state}></Count>
          <Random></Random>
       </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));