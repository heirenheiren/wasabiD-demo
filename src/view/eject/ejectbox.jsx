import React from 'react';
import Cancle from "./cancle"

class EjectBox extends React.Component {
  constructor(props) {
    super(props);
    this.updateEjectDisplay= this.updateEjectDisplay.bind(this);
    this.state = {
      
    };
  }

  updateEjectDisplay(value){
    //console.log(value);
    this.setState({
      hide:value
    })
  }

  render() {
  
    return (
      <div className="eject-box" ref="ejectbox">
        <div className="eject-box-head"><span>主席，确定发射导弹吗？</span></div>
        <div className="eject-box-content"><span>主席，你冷静点，导弹发出去就回不来了！主席，你冷静点，导弹发出去就回不来了！</span></div>
        <div className="eject-box-tail">
          <div className="eject-box-tail-define"><span>确定</span></div>
          <Cancle updateEjectDisplay={this.updateEjectDisplay}></Cancle>
        </div>
      </div>
    );
  }
}

export default EjectBox;