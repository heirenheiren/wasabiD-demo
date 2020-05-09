import React from 'react';


class Br extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="br">
        {this.props.children}
       </div>
    );
  }
}

export default Br;