import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


class Freedom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  covercircle() {
    this.refs.cover.style.display='block';
    this.refs.await.style.display='block';
    this.times=setTimeout(() => {
      this.stop();
    }, 3000);
  }

  stop(){
    this.refs.cover.style.display='none';
    this.refs.await.style.display='none';
  }

  componentWillMount(){
    clearTimeout(this.times)
  }

  render() {
  
    return (
      <div className="body">
          <div className="open" onClick={this.covercircle.bind(this)}>打开弹框</div>
          <div>
            <div className="cover" ref="cover"></div>
            <div className="await" ref="await"></div>
          </div>
       </div>

    );
  }
}

ReactDOM.render(<Freedom />, document.getElementById('root'));