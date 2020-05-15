import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"


class Freedom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
  
    return (
      <div className="body">
          <div className="ball"></div>
          <div className="ball"></div>
          
       </div>
    );
  }
}

ReactDOM.render(<Freedom />, document.getElementById('root'));