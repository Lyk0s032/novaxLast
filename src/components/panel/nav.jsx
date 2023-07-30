import React from 'react';

const MenuSuperior = () => {
  return (
    <header className="menu-superior">
      <div className="logo-container">
        <img src="ruta-del-logo.png" alt="Logo de la empresa" className="logo" />
      </div>
      <nav className="opciones-navegacion">
        <ul>
          <li><a href="/">Kevin</a></li>
          <li><a href="/">Opciones</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuSuperior;
