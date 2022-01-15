import React from 'react'
import './styles.css';

import Header from '../../components/Header/Header';
import construcao from './img/construcao.png'


function Profile() {
    return (
        <>
        <Header title="Perfil"/>
        <div className="square">
            <img className='page-construcao' src={construcao} alt='construcao'></img>
        </div>
        </>
    )
}

export default Profile
