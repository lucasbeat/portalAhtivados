import React from 'react'
import './styles.css'

function Header({ title }) {
    return (
        <div className="header-square">
            <h2 id='page-name'>{title}</h2>
        </div>
    )
}

export default Header;
