import React from 'react';


class Eject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
  
    return (
      <div className="eject-box-tail-cancle" onClick={this.cancle.bind(this)}><span>取消</span></div>
    );
  }
}

export default Eject;