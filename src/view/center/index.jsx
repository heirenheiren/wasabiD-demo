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
          
          <div className="transition">
          
          </div>

          <div class="chest">
              <div class="buti left side top"></div>
              <div class="buti center">&hearts;</div>
              <div class="buti right side"></div>
          </div>
       </div>
    );
  }
}

ReactDOM.render(<Center />, document.getElementById('root'));