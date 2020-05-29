import React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux"
import store from "./store"
import Count from "./component/count"
import Sum from "./component/sum"

 class Index extends React.Component{
     constructor(props){
         super(props)
     }
     render(){
         <Provider store={store}>
            <Count tille={"first"}></Count>
            <Count tille={"second"}></Count>
            <Count tille={"third"}></Count>
            <Sum></Sum>
         </Provider>
     }
 }
  ReactDom.render(<Index/>,document.getElementById("root"))