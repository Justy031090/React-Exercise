
import React, { Component } from 'react'

export class Textarea extends Component {
    constructor(props){
    super(props);
    this.state = {
        toCopy: ''
    }
    this.textRef = React.createRef();
    this.buttonRef = React.createRef();
    }
    componentDidMount(e){
        this.textRef.current.focus()
    }
    copySomeText =  ()=>{
        navigator.clipboard.writeText(this.state.toCopy)
    }



    render() {
        return (
            <div style={{display:'flex', flexDirection:'column'}}>
                <textarea
                onChange={(e)=>this.setState({toCopy: e.target.value})} 
                cols="30" rows="10" ref={this.textRef}></textarea>  
                <button ref={this.buttonRef}
                onClick={this.copySomeText}
                >Press to Copy</button>
            </div>
        )
    }
}

export default Textarea
