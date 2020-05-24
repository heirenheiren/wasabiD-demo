import React from 'react';
import ReactDOM from 'react-dom';
import "./random.css";


class Random extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="random">
          <div className="random-top">
            <div className="random-top-left">
              
            </div>
            <div className="random-top-right">
              <a className="random-top-right-btn" title="点击机选1注" data-click="random(1)" id="link146">机选1注</a>
              <a className="random-top-right-btn" title="点击机选5注" data-click="random(5)" id="link147">机选5注</a>
              <p className="random-top-right-btn-p">
						    <input type="text" value="10注"/>
						    <a className="random-top-right-btn" data-click="random(input)" id="link148">机选<s className="dn"></s></a> 
              </p>
              <a className="random-top-right-btn clear" title="点击清空列表" data-click="clearAll" id="link149">清空列表</a>
            </div>
          </div>
          <div className="random-bottom">
            <div className="random-bottom-left">倍数
              <div className="random-bottom-left-numsel"> 
                <span className="random-bottom-left-numsel_l"> - </span> 
                <span className="random-bottom-left-numsel_m">
                  <input type="text" value="1" id="list_bs"/>
                </span> 
                <span className="random-bottom-left-numsel_r"> + </span> 
              </div>
            </div>
            <span className="random-bottom-right">金额 <em className="red">2.00</em>元&nbsp;&nbsp;(<span data-html="zs">1</span>注)</span>
          </div>
       </div>
    );
  }
}

export default Random;