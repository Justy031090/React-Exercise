import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div style={{backgroundColor: 'grey' , padding:'1rem'}}>
            <Link to='/' ><span style={{padding: '1rem'}}>Home</span>
            </Link>
            <Link to='/products'>
            <span>Prodcuts</span>
            </Link>
        </div>
    )
}

export default Header
