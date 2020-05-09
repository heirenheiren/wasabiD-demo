import React from 'react';


class Box_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    
  }

  render() {
  
    return (
      <div className="box_1">
          {this.props.children}

       </div>
    );
  }
}

export default Box_1;