import React from 'react';


class Cancle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    
  }

  cancle(){
    console.log("cancle")
    this.props.updateEjectDisplay(true)
  }

  render() {
  
    return (
      <div className="eject-box-tail-cancle"><span  onClick={this.cancle.bind(this)}>取消</span></div>
    );
  }
}

export default Cancle;