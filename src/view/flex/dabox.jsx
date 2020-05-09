import React from 'react';


class DaBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    
  }

  render() {
  
    return (
      <div className="dabox">
          {this.props.children}

       </div>
    );
  }
}

export default DaBox;