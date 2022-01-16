import React from 'react';

class Num extends React.Component {
    constructor(props){
    super(props)
    this.state = {num: 1};
    this.clickHandle.bind(this)
    }
    clickHandle = () => {
        this.setState({num: this.state.num +1})
    }
    render(){
        return (
            <div>
            <button onClick={this.clickHandle}>increment</button>
            <span>{this.state.num}</span>
            </div>
        )
    }
}
export default Num;