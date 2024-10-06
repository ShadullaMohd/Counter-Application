import React from "react";
import "./App.css"

class App extends React.Component{
    constructor(props)
    {
        super(props)
        this.state= {
            count: 0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count: this.state.count-1})
    }
    reset=()=>{
        this.setState ({count:0})
    }
    
   
    
        render(){
            return(
                <>
                <div id="main container">
                    <h1 id="counter">Counter Application</h1>
                <div id="div">
                    <h1 id="count">{this.state.count}</h1>
                    <button id="btn" onClick={this.increment}>+ </button>
                    <button onClick={this.decrement}> -</button>
                    <button onClick={this.reset}> reset</button>
                    </div>
                    </div>
                    
                </>
            )
        }
    }
    

export default App

