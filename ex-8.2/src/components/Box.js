import React, { Component } from 'react'
import './box.css'
class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            backGd: 'red',
            class: 'box'
        }
    }


    colorGenerator(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let val = `rgb(${r}, ${g}, ${b})`;
        return val;
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                backGd: this.colorGenerator(),
            })
        }, 1000);
        this.shape = setInterval(() => {    
            this.setState({
                class: 'circle'
            })
        }, 5000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="container">
                <div className={`${this.state.class}`} style={{backgroundColor: this.state.backGd}}>
                    
                </div>
            </div>
        )
    }   
}

export default Box;