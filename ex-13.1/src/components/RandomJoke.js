import axios from 'axios';
import React, { Component } from 'react'

export class RandomJoke extends Component {
    state = {
        data:'',
    }
    gettingStuff = async () =>{
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    this.setState({data : response.data.value})
    }

    render() {
        return (
            <div>
                <h2>{this.state.data}</h2>
                <button onClick={this.gettingStuff}>Generate a radom Chuck Joke ! =)</button>
            </div>
        )
    }
}

export default RandomJoke

