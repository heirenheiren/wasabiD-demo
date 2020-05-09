import React from 'react';
import ReactDOM from 'react-dom';
import DaBox from "./dabox"
import Box_1 from "./box_1"
import Box_2 from "./box_2"
import Box_3 from "./box_3"
import Box_4 from "./box_4"
import Box_5 from "./box_5"
import Box_6 from "./box_6"
import Item from "./item"
import Br from "./br"
import "./index.css"

class FlexBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    
  }

  render() {
  
    return (
      <div className="mybody">
        <DaBox>
          <Box_1>
            <Item></Item>
          </Box_1> 
        </DaBox>
       
        <DaBox>
          <Box_2>
            <Item></Item>
            <Item></Item>
          </Box_2> 
        </DaBox>
        
        <DaBox>
          <Box_3>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Box_3> 
        </DaBox>
        
        <DaBox>
          <Box_4>
            <Br>
            <Item></Item>
            <Item></Item>
            </Br>
            <Br>
            <Item></Item>
            <Item></Item>
            </Br>
          </Box_4> 
        </DaBox>
       
        <DaBox>
          <Box_5>
            <Br>
            <Item></Item>
            <Item></Item>
            </Br>
            <Br>
            <Item></Item>
            </Br>
            <Br>
            <Item></Item>
            <Item></Item>
            </Br>
          </Box_5> 
        </DaBox>
        
        <DaBox>
          <Box_6>
            <Br>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            </Br>
          
            <Br>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            </Br>
          </Box_6> 
        </DaBox>
      </div>
    );
  }
}

ReactDOM.render(<FlexBox />, document.getElementById('root'));
