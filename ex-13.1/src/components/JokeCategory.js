import React, { Component } from 'react'
import axios from 'axios';

export class JokeCategory extends Component {
    state = {
        categories: [],
        isLoading: false,
        random: ''
    }
async componentDidMount(){
    this.setState({ isLoading: true });
    const jokeCategories = await axios.get('https://api.chucknorris.io/jokes/categories');
    this.setState({categories: jokeCategories.data, isLoading:false})
    
}
renderCategories =  ()=>{
    return this.state.categories.map((category, i)=>{
        return (
            <button onClick={()=>this.randomCategory(category)} key={i}>{category}</button>
        )
    })
}
randomCategory = async (category)=> {
    this.setState({ isLoading: true });
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    console.log(response)
    this.setState({random: response.data.value})
}
    render() {
        return (
            <div>
                <h2>{this.state.random}</h2>
                {this.state.categories.length && this.renderCategories()}
                <div className="isLoading">{this.state.isLoading && this.isLoading}</div>
            </div>
        )
    }
}

export default JokeCategory
