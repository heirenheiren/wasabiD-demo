import React from 'react';
import ReactDOM from 'react-dom';
import Cancle from "./cancle"
import Define from "./define"
import "./index.css";


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.enableEjectBodyDisplay= this.enableEjectBodyDisplay.bind(this);
    this.updateEjectBodyDisplay= this.updateEjectBodyDisplay.bind(this);
    this.disableEjectBodyDisplay= this.disableEjectBodyDisplay.bind(this);
    this.changeEjectBoxCursor= this.changeEjectBoxCursor.bind(this);
    this.getInputValue= this.getInputValue.bind(this);
    this.moveEjectBox= this.moveEjectBox.bind(this);
    this.onMouseDown= this.onMouseDown.bind(this);
    this.onMouseUp= this.onMouseUp.bind(this);

    this.state = {
      hide:true,
      cursor:"default",
      defineValue:{cursor:"not-allowed",value:null},
      ifOnMouseDown:false
    };
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  updateEjectBodyDisplay(value){
    this.setState({
      hide:value
    })
  }
  
  enableEjectBodyDisplay() {
    this.setState({
      hide:false
    })
  }

  disableEjectBodyDisplay(event){
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

  changeEjectBoxCursor(event){
    this.getDirection(this.refs.ejectbox,event);
  }

  //获取方向
  getDirection(targetElement,event) {
    let position=targetElement.getBoundingClientRect();//获取div的位置信息
    //此处计算方向与光标图形分开，
    //当缩小时，要将方向向里多计算一点，否则缩小不流畅
    let  xPos, yPos, width, height, left, top, offsetX, offsetY, offset;

    width = position.width;//弹出框长宽
    height = position.height;

    left = position.left;//弹出框到浏览器边框距离
    top = position.top;

    xPos = event.clientX;//鼠标到浏览器边框距离
    yPos = event.clientY;

    offsetX = event.nativeEvent.offsetX;//鼠标到弹出框边框距离
    offsetY = event.nativeEvent.offsetY;

    offset = 5;

    let cursor = "";
    if ((xPos <= width + left + offset && xPos >= width + left - offset)
          || (xPos <= left + offset && xPos >= left - offset)) {
        cursor += "ew";
    }
    if ((yPos <= height + top + offset && yPos >= height + top - offset)
          || (yPos <= top + offset && yPos >= top - offset)) {
        cursor += "ns";
    }
    
    cursor = cursor == "ewns" ? "nwse" : cursor;

    //把东北和西南角单独处理
    if(((xPos <= width + left + offset && xPos >= width + left - offset) && (yPos <= top + offset && yPos >= top - offset))
        || ((xPos <= left + offset && xPos >= left - offset) && (yPos <= height + top + offset && yPos >= height + top - offset))){
      cursor = "nesw";
    }

    targetElement.style.cursor = cursor ? cursor + "-resize" : "default";//设置鼠标样式
    return cursor;
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

  moveEjectBox(event){
    window.onselectstart = function(){return false;}
    if(this.ifOnMouseDown==true){
      let moveX = event.clientX-this.clientX;
      let moveY = event.clientY-this.clientY;
      
      let position = this.refs.ejectbox;
      let left = position.offsetLeft;
      let top = position.offsetTop;

      this.refs.ejectbox.style.top=(top+moveY)+"px";
      this.refs.ejectbox.style.left=(left+moveX)+"px";
      //必须重置，否则鼠标定位会越位
      this.clientX = event.clientX;
      this.clientY = event.clientY;
    }
  }

  onMouseDown(event){
    this.clientX = event.clientX;
    this.clientY = event.clientY; 
    this.ifOnMouseDown=true;
  }

  onMouseUp(event){
    this.ifOnMouseDown=false;
  }

  render() {
    return (
      <div className="body">
          <div className="open" onClick={this.enableEjectBodyDisplay}>点我点我</div>
          <div className="eject-body" onClick={this.disableEjectBodyDisplay} onMouseMove={this.moveEjectBox} onMouseUp={this.onMouseUp} style={{display:this.state.hide?"none":"block"}}>
            <div className="eject-box" ref="ejectbox" onMouseMove={this.changeEjectBoxCursor} style={{cursor:this.state.cursor}}>
              <div className="eject-box-head" onMouseDown={this.onMouseDown}><span>主席，确定发射导弹吗？</span></div>
              <div className="eject-box-content">
                <textarea  className="eject-box-content-input" onChange={this.getInputValue}></textarea>
              </div>
              <div className="eject-box-tail">
                <Define changeDefinePointStyle={this.state.defineValue}></Define>
                <Cancle updateEjectBodyDisplay={this.updateEjectBodyDisplay}></Cancle>
              </div>
            </div>
          </div>
       </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));