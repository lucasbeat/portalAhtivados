import React, { useState } from 'react'
import './styles.css'

function Header(props) {
    const tileChange = props.title;

   return (
        <div className="header-square">
            <h2 id='page-name'>{tileChange}</h2>
        </div>
    )
}

export default Header;
