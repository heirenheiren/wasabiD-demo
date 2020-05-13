import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"


class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
  
    return (
      <div className="body">
          <div className="heart">
          
          </div>
          
       </div>
    );
  }
}

ReactDOM.render(<Center />, document.getElementById('root'));