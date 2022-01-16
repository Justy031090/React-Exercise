import React, { Component } from 'react'
import {STORE} from './Store'
import { Link } from 'react-router-dom'

export class Products extends Component {
    state = {
        prod: ''
    }
    componentDidMount(){
        this.setState({prod: STORE})
    }
    renderItems = ()=> {
        return this.state.prod.map((el, i)=>{
            return (
                <span key={i} style={{padding: '1rem'}}>
                    <Link to={`/product/${el.id}`}> {el.title}</Link>
                </span>
                
            )
        })
    }
    render() {
        return (
            <div>
                {this.state.prod && this.renderItems()}
            </div>
        )
    }
}

export default Products
