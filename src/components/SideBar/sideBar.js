import React from 'react';
import {  Link } from 'react-router-dom';

import './styles.css';

import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import logo2 from './img/logo2.jpg';

function sideBar() {
    const icons = {
        painel: <HomeIcon />,
        profile: <AccountCircleIcon />,
        ranking: <StarIcon />,
        challenges: <EmojiEventsOutlinedIcon />,
        analytics: <EqualizerIcon />
    }

    return (
        <aside id='aside'>
            <div id='menu-aside'>
            <header className='menu-header'>
                <img className='company-logo' src={logo2} alt='logo'></img>
            </header>

            <div className='menu-app'>
                <i className='pc-icon'>{}</i>
                <span></span>
                <div className='shadow'></div>
            </div>

            <div id='menu-nav' className='menu-nav-class'>
                <Link to='/' className='menu-nav-item-painel' >
                <i className='icn-painel-icon'>{icons.painel}</i>
                <span className='painel-span'>Página Inicial</span>
                </Link>

                <Link to='/profile' className='menu-nav-item-profile'>
                <i className='icn-painel-icon'>{icons.profile}</i>
                <span className='painel-span'>Perfil</span>
                </Link>

                <Link to='/ranking' className='menu-nav-item-ranking'>
                <i className='icn-painel-icon'>{icons.ranking}</i>
                <span className='painel-span'>Ranking</span>
                </Link>

                <Link to='/challenges' className='menu-nav-item-challenges'>
                <i className='icn-painel-icon'>{icons.challenges}</i>
                <span className='painel-span'>Desafios</span>
                </Link>

                <Link to='/analytics'  className='menu-nav-item-analytics'>
                <i className='icn-painel-icon'>{icons.analytics}</i>
                <span className='painel-span'>Relatórios</span>
                </Link>
            </div>
                <footer></footer>
             </div>
            
        </aside>
    )
}

export default sideBar;
