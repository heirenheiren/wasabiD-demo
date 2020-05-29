import React from "react"
import * as Action from "../action"
import {connect} from "react-redux"

function Count (title,add,reduce,value){
    return <div>
        {title}值：{value}\
        <button onClick={add}>+</button>
        <button onClick={add}>-</button>
    </div>
}

function mapStateToProps()

function mapDispa()