import React from 'react'
import './styles.css'

function Header(props) {
    const titleChange = props.title;

   return (
        <div className="header-square">
            <h2 id='page-name'>{titleChange}</h2>
        </div>
    )
}

export default Header;
