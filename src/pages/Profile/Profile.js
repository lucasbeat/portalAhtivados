import React from 'react'
import './styles.css';
import '../../App.css';

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/sideBar';
import gutts from './img/berserk.jpg'


import aura from './medals/aura (1).png';
import king from './medals/imperial-crown.png'
import rank1 from './medals/rank-1.png';
import rank2 from './medals/rank-2.png';
import rank3 from './medals/rank-3.png';
import trophy from './medals/trophy-cup.png';
import sport from './medals/sport-medal.png';
import sandTime from './medals/sands-of-time.png';
import graduate from './medals/graduate-cap.png';
import king2 from './medals/king.png';
import diploma from './medals/diploma.png';
import medal from './medals/medal.png';
import calculator from './medals/calculator.png';


function Profile() {
    return (
        <>
        <SideBar />
        <div className='content'>
        <Header title="Perfil"/>
        <main className='main'>
        <div className="container">
           <div className="card">
             <header className="header">
           <img className="photo" src={gutts}  alt="photo1"></img>
           </header>
           <footer className="footer">
              <h1 className="h1">Lucas silva</h1>
              <p className="p">Analista de service desk nível 2</p>
              </footer>
           </div>
         </div>
         <div className="square">
         <div className="square-1">
        <header className="titulo-box">
        <h1 className="titulo">Quadro de conquistas</h1>
        </header>
        <div className="medals">
        <div className="medal">
          <img src={aura} alt="aura"></img>
        </div>
        <div className="medal">
        <img src={king} alt="aura"></img>
        </div>
        <div className="medal">
        <img src={rank1} alt="aura"></img>
        </div>
        <div className="medal">
        <img src={rank2} alt="aura"></img>
        </div>
        <div className="medal">
        <img src={rank3} alt="aura"></img>
        </div>
        <div className="medal">
          <img src={trophy} alt="photo1"></img>
        </div>
        <div className="medal">
          <img src={sport} alt="photo1"></img>
        </div>
        <div className="medal">
        <img src={sandTime} alt="photo1"></img>
        </div>
        <div className="medal">
        <img src={graduate} alt="photo1"></img>
        </div>
        <div className="medal">
        <img src={king2} alt="photo1"></img>
        </div>
        <div className="medal">
        <img src={diploma} alt="photo1"></img>
        </div>
        <div className="medal">
        <img src={medal} alt="photo1"></img>
        </div>
        <div className="medal">
        <img src={calculator} alt="photo1"></img>
        </div>
        <div className="medal"></div>
        <div className="medal"></div>
        <div className="medal"></div>
        <div className="medal"></div>
        <div className="medal"></div>
        <div className="medal"></div>
        <div className="medal"></div>
        <div className="medal"></div>
        <div className="medal"></div>
        <div className="medal"></div>
        <div className="medal"></div>
        </div>
      </div>
      </div>
        </main>
        </div>
        </>
    )
}

export default Profile
