import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"


class Device extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
  
    return (
      <div className="body">
          <div className="header"></div>
          <div className="message">下次项目发布：2016.11.31 13:00:00</div>
          <div className="content">
            <div className="box_1">
              <div className="item_1">月月赚：16112331</div>
              <div className="item_2">剩余可投：<label  style={{color:"#E85B4D"}}>284,000元</label></div>
            </div>
            <div className="box_2">
              <div className="item_3">
                <div className="item_3_1">14.3%</div>
                <div className="item_3_2">往期年化收益率</div>
              </div>
              <div className="item_4">
                <div className="item_4_1">18个月</div>
                <div className="item_4_2">期限</div>
              </div>
              <div className="item_5"><label  className="item_5_1">80%</label></div>
            </div>
          </div>
          <div className="content">
            <div className="box_1">
              <div className="item_1">月月赚：16112331</div>
              <div className="item_2">剩余可投：<label  style={{color:"#E85B4D"}}>284,000元</label></div>
            </div>
            <div className="box_2">
              <div className="item_3">
                <div className="item_3_1">14.3%</div>
                <div className="item_3_2">往期年化收益率</div>
              </div>
              <div className="item_4">
                <div className="item_4_1">18个月</div>
                <div className="item_4_2">期限</div>
              </div>
              <div className="item_5"><label  className="item_5_1">70%</label></div>
            </div>
          </div>
          <div className="content">
            <div className="box_1">
              <div className="item_1">月月赚：16112331</div>
              <div className="item_2">剩余可投：<label  style={{color:"#E85B4D"}}>284,000元</label></div>
            </div>
            <div className="box_2">
              <div className="item_3">
                <div className="item_3_1">14.3%</div>
                <div className="item_3_2">往期年化收益率</div>
              </div>
              <div className="item_4">
                <div className="item_4_1">18个月</div>
                <div className="item_4_2">期限</div>
              </div>
              <div className="item_5"><label  className="item_5_1">60%</label></div>
            </div>
          </div>
          <div className="content">
            <div className="box_1">
              <div className="item_1">月月赚：16112331</div>
              <div className="item_2">剩余可投：<label  style={{color:"#E85B4D"}}>284,000元</label></div>
            </div>
            <div className="box_2">
              <div className="item_3">
                <div className="item_3_1">14.3%</div>
                <div className="item_3_2">往期年化收益率</div>
              </div>
              <div className="item_4">
                <div className="item_4_1">18个月</div>
                <div className="item_4_2">期限</div>
              </div>
              <div className="item_5"><label  className="item_5_1">50%</label></div>
            </div>
          </div>
          <div className="content">
            <div className="box_1">
              <div className="item_1">月月赚：16112331</div>
              <div className="item_2">剩余可投：<label  style={{color:"#E85B4D"}}>284,000元</label></div>
            </div>
            <div className="box_2">
              <div className="item_3">
                <div className="item_3_1">14.3%</div>
                <div className="item_3_2">往期年化收益率</div>
              </div>
              <div className="item_4">
                <div className="item_4_1">18个月</div>
                <div className="item_4_2">期限</div>
              </div>
              <div className="item_5"><label  className="item_5_1">80%</label></div>
            </div>
          </div>
          <div className="content">
            <div className="box_1">
              <div className="item_1">月月赚：16112331</div>
              <div className="item_2">剩余可投：<label  style={{color:"#E85B4D"}}>284,000元</label></div>
            </div>
            <div className="box_2">
              <div className="item_3">
                <div className="item_3_1">14.3%</div>
                <div className="item_3_2">往期年化收益率</div>
              </div>
              <div className="item_4">
                <div className="item_4_1">18个月</div>
                <div className="item_4_2">期限</div>
              </div>
              <div className="item_5"><label  className="item_5_1">80%</label></div>
            </div>
          </div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
       </div>
    );
  }
}

ReactDOM.render(<Device />, document.getElementById('root'));