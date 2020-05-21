import React from 'react';
import ReactDOM from 'react-dom';
import "./before.css";


class Before extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("Before")
  }

  render() {
    return (
      <div className="before">
          
       </div>
    );
  }
}

ReactDOM.render(<Before />, document.getElementById('root'));