import React, { useState } from 'react';

const MenuLateral = () => {
  const [activeOption, setActiveOption] = useState(1);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <aside className="menu-lateral">
      <nav className="opciones-laterales">
        <ul className="opciones-superiores">
          <li className={activeOption === 1 ? 'active' : ''} onClick={() => handleOptionClick(1)}>Inicio</li>
          <li className={activeOption === 2 ? 'active' : ''} onClick={() => handleOptionClick(2)}>Usuarios</li>
          <li className={activeOption === 3 ? 'active' : ''} onClick={() => handleOptionClick(3)}>Vendedores</li>
          <li className={activeOption === 4 ? 'active' : ''} onClick={() => handleOptionClick(4)}>Sorteos</li>
          <li className={activeOption === 5 ? 'active' : ''} onClick={() => handleOptionClick(5)}>Configurar</li>
        </ul>
        <div className="divider"></div>
        <ul className="opciones-inferiores">
          <li>Configurar</li>
          <li>Ayuda</li>
          <li>Cerrar sesión</li>
        </ul>
      </nav>
    </aside>
  );
};

export default MenuLateral;
