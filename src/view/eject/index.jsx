import React from 'react';
import ReactDOM from 'react-dom';
import Cancle from "./cancle"
import Define from "./define"
import "./index.css";


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.updateEjectDisplay= this.updateEjectDisplay.bind(this);
    this.disableDisPlay= this.disableDisPlay.bind(this);
    this.changeBoxStyle= this.changeBoxStyle.bind(this);
    this.getInputValue= this.getInputValue.bind(this);
    this.moveBoxPointStyle= this.moveBoxPointStyle.bind(this);
    this.onMouseDown= this.onMouseDown.bind(this);
    this.onMouseUp= this.onMouseUp.bind(this);

    this.state = {
      hide:true,
      boxStyle:{cursor:"default",top:null,left:null},
      cursor:"default",
      moveCursor:"default",
      defineValue:{cursor:"not-allowed",value:null},
      ifOnMouseDown:false
    };
  }

  enableDisplay() {
    this.setState({
      hide:false
    })
  }

  disableDisPlay(event){
    //console.log(event);
    let position = this.refs.ejectbox.getBoundingClientRect();
    let top = position.top;
    let bottom = position.bottom;
    let right = position.right;
    let left = position.left;
  
    if(event.clientY<top||event.clientX<left||event.clientY>bottom||event.clientX>right){
      //console.log(1)
      this.setState({
        hide:true
      })
    }
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  updateEjectDisplay(value){
    //console.log(value);
    this.setState({
      hide:value
    })
  }

  changeBoxStyle(event){
    this.setState({
      cursor:"default"
    })
    let position = this.refs.ejectbox.getBoundingClientRect();
    //console.log(position.style)
    let offsetX = event.nativeEvent.offsetX;
    let offsetY = event.nativeEvent.offsetY;
    if(offsetX<=5 || position.width-offsetX<=5){
      if(offsetY<=5){
        this.setState({
          cursor:"nwse-resize"
        })
      }else if(position.height-offsetY<=5){
        this.setState({
          cursor:"nesw-resize"
        })
      }else{
        this.setState({
          cursor:"ew-resize"
        })
      }
    }else if(offsetY<=5 || position.height-offsetY<=5){
      //console.log("Y")
      this.setState({
        cursor:"ns-resize"
      })
    }else{
      this.setState({
        cursor:"default"
      })
    }

    
  }

  getInputValue(event){
    //console.log(event.target.value)
    if(event.target.value==""){
      this.setState({
        defineValue:{"cursor":"not-allowed","value":null}
      })
    }else{
      this.setState({
        defineValue:{"cursor":"pointer","value":event.target.value}
      })
    }
    
  }

  moveBoxPointStyle(event){
    let position = this.refs.ejectbox.getBoundingClientRect();
    let width = position.width;
    let height = position.height;
    let offsetX = event.nativeEvent.offsetX;
    let offsetY = event.nativeEvent.offsetY;
    if((offsetX>10&&offsetY>10)&&(width-10>offsetX&&height-10>offsetY)){
      //console.log("显示手抓光标可以拖动弹出框")
      this.setState({
        moveCursor:"grabbing"
      })
    }else{
      this.setState({
        moveCursor:"default"
      })
    }

    if(this.state.ifOnMouseDown==true){
      console.log("点击拖动弹出框");
      let clientX = event.clientX;
      let clientY = event.clientY;
      console.log(clientX,clientY);
      const boxStyle = Object.assign({}, this.state.boxStyle, {top:clientY+"px",left:clientX+"px"})
      this.setState({
        boxStyle:boxStyle
      })
    }
  }

  onMouseDown(event){
    this.setState({
      ifOnMouseDown:true
    })
    
  }

  onMouseUp(event){
    this.setState({
      ifOnMouseDown:false
    })
  }

  render() {
  
    return (
      <div className="body">
          <div className="open" onClick={this.enableDisplay.bind(this)}>点我点我</div>
          <div className="eject-body" style={{display:this.state.hide?"none":"block"}} onClick={this.disableDisPlay}>
            <div className="eject-box" ref="ejectbox" onMouseMove={this.changeBoxStyle} style={{cursor:this.state.cursor,top:this.state.boxStyle.top,left:this.state.boxStyle.left}}>
              <div className="eject-box-head" onMouseMove={this.moveBoxPointStyle} style={{cursor:this.state.moveCursor}} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}><span>主席，确定发射导弹吗？</span></div>
              <div className="eject-box-content">
                <input  className="eject-box-content-input" type="text" onChange={this.getInputValue}></input>
              </div>
              <div className="eject-box-tail">
                <Define changeDefinePointStyle={this.state.defineValue}></Define>
                <Cancle updateEjectDisplay={this.updateEjectDisplay}></Cancle>
              </div>
            </div>
          </div>
       </div>

    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));