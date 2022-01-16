import React from 'react';

class App extends React.Component {
    state={
      count:0,
    }

    increment = ()=>{
      if (this.state.count < 10)
        this.setState ({count: this.state.count + 1})
    }
    deccrement = ()=>{
      if (this.state.count > -10){
        this.setState ({count: this.state.count -1})
      }
    }
    render(){

      const changecolor = ()=>{
        if(this.state.count > 0){
          return 'green'
        }
        if(this.state.count < 0){
          return 'red'
        }
        if(this.state.count === 0){
          return 'black'
        }
      }
      return (
        <div >
          <button onClick={this.increment}>+</button>
          <h2 style={{color: changecolor()}}> {this.state.count}</h2>
          <button onClick={this.deccrement}>-</button>
        </div>
    )
  }
}

export default App;