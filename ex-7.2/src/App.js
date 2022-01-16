import React from 'react';
import ShowHideDiv from "./components/ShowHideDiv";



class App extends React.Component {
  state = {display: true}

  displayHandler = () =>{
    this.setState({display:!this.state.display})
  }
    render(){
      return (
        <div >
          <button onClick={this.displayHandler} >Hide/Show</button>
          {this.state.display && <ShowHideDiv/>}
        </div>
    )
  }
}

export default App;