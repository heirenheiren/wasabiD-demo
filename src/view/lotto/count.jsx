import React from 'react';
import "./count.css";


class Count extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("Count")
  }

  render() {
    return (
      <div className="count">
          <p className="count-gray">您选择了 <em className="orange">{this.props.choose.chooseBeforeCount}</em> 个前区号码， <em className="purple">{this.props.choose.chooseAfterCount}</em> 个后区号码，共 <em className="red">{this.props.choose.count}</em> 注，共 <em className="red">{this.props.choose.count==0?'0.00':this.numFormat(this.props.choose.count*2)}</em> 元</p>
       </div>
    );
  }

  //数字格式处理，保留两位小数，每三位逗号隔离没实现
  numFormat(num) {
    let f = Number(num).toFixed(2)
    var c = (f.toString().indexOf ('.') !== -1) ? f.toLocaleString() : f.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return c;
  }
}

export default Count;