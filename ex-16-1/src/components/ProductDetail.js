import React from 'react'
import {STORE} from './Store'
import { Link } from 'react-router-dom';

class ProductDetail extends React.Component {
    state = {
        display: STORE,
        currentItem: null
    };
    
        componentDidMount() {
            const id = Number(this.props.match.params.id);
            const findItem = this.state.display.find((item) => {
                return id === item.id;
            });
            this.setState({ currentItem: findItem });
        }
        render() {
        const { currentItem } = this.state;
            return (
                <div>
                    <div>{currentItem && currentItem.title}</div>
                    <div>{currentItem && currentItem.price}</div>
                    <div>{currentItem && <img src={currentItem.imageUrl} alt="Not Found" />}</div>
                    <Link to='/products'><button>Go back</button></Link>
                </div>
            )
        }
}


export default ProductDetail
