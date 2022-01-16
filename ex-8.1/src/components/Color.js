import React, { Component } from 'react'

export default class Color extends Component {
    state = {favoriteColor: 'purple'}
    componentDidMount =  (prevState) => {
        setTimeout(() => {
            if (this.state.favoriteColor === 'purple'){
            this.setState({favoriteColor : 'red'})
            }
        }, 1000)
    }
    shouldComponentUpdate = () => {
        if (this.state.favoriteColor === 'purple')
        return true;
    }

    updatedComp = () => {
        if(this.state.favoriteColor === 'red')
        document.querySelector('#myDiv').innerHTML =
        `<h1>the updated favorite color is ${this.state.favoriteColor}</h1>`
    }
    render() {
        this.updatedComp()
        return (
            <div id="myDiv">
                <h1>My favorite color is {`${this.state.favoriteColor}`}</h1>
            </div>
        )
    }
}
