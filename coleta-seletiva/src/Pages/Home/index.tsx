import React from 'react';
 import './styles.css';
import { FiLogIn } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const index: React.FC= () => {
  
    return (
      <div id="page-home">
        <div className="content">
            <header>
              <img src={logo} alt="Reciclagem" />
            </header>
            <main>
              <h1>Coleta Seletiva e reciclagem em geral.</h1>
              <p>Reciclagem de materiais diversos, tais como, papel, plástico, metais, entre outros</p>
              <Link to="/create-location">
                <span>
                  <FiLogIn />
                </span>
                <strong>Cadastrar novo local de coleta</strong>
              </Link>
            </main>
        </div>
        
      </div>
    );
  
}

export default index;