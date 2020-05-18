import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


class Freedom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide:true
    };
  }

  covercircle() {
    // this.refs.cover.style.display='block';
    // this.refs.await.style.display='block';
    this.setState({
      hide:false
    })
    
    //打开状态才用定时器
    if(this.state.hide){
      this.times=setTimeout(() => {
        this.stop();
      }, 3000);
    }
    
  }

  stop(){
    // this.refs.cover.style.display='none';
    // this.refs.await.style.display='none';
    this.setState({
      hide:true
    })
  }

  componentWillMount(){
    clearTimeout(this.times)
  }

  render() {
  
    return (
      <div className="body">
          <div className="open" onClick={this.covercircle.bind(this)}>打开弹框</div>
          <div className="cover" style={{display:this.state.hide?"none":"block"}}>  
            <div className="await"></div>
          </div>
       </div>

    );
  }
}

ReactDOM.render(<Freedom />, document.getElementById('root'));