import React from 'react';
import ReactDOM from 'react-dom';
import "./random.css";


class Random extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("Random")
  }

  render() {
    return (
      <div className="glrandomobal">
          
       </div>
    );
  }
}

ReactDOM.render(<Random />, document.getElementById('root'));