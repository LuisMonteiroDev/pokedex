// Navbar.js
import React from 'react';
import './navbar.css';
import { SiPokemon } from 'react-icons/si'; // Importe o ícone de Pokebola

const Navbar = ({ onSearch, searchPokemon }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <SiPokemon size={100} className="pokeball-icon"/>
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar Pokémon..."
            value={searchPokemon}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
