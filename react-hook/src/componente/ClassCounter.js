import React, { Component } from 'react'
export default class ClassCounter extends Component {
    state ={
        count:0
    }
    increment = ()=>{
        this.setState(priv => ({count:priv.count +1}))
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>count {this.state.count}</button>
            </div>
        )
    }
}
