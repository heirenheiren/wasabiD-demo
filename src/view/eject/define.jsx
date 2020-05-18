import React from 'react';


class Define extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    console.log("define")
  }

  onClick(){
    let value = this.props.changeDefinePointStyle.value;
    if(value!=null){
      alert(value)
    }
    
  }

  render() {
  
    return (
      <div className="eject-box-tail-define" onClick={this.onClick.bind(this)} style={{cursor:this.props.changeDefinePointStyle.cursor}}><span>确定</span></div>
    );
  }
}

export default Define;