import React from 'react';
import ReactDOM from 'react-dom';
import "./after.css";


class After extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("After")
  }

  render() {
    return (
      <div className="after">
          
       </div>
    );
  }
}

ReactDOM.render(<After />, document.getElementById('root'));