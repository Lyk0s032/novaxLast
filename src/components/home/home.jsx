import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav/nav';

const Home = () => {
  return (
    <div className="home-container">
      <div className='home'>
          <div className='container-msj'>
              <div className='msj'>
                <h1>NovaX</h1>
                <h3>Somos un innovador punto de encuentro</h3>
                <span>Donde la suerte se conecta con el espiritu emprendedor</span>
              </div>
          </div>
      </div>
      <div className='home-2'>
        <div className='izquierda'>
            <img src="https://i.pinimg.com/474x/9d/49/b2/9d49b20a3ad8ce69195f5b098da5b80b.jpg" />
        </div>
        <div className='derecha'>
          <div className='conta'>
            <h1 className='whoami'>¿Quienes somos?</h1>
            <span >
              NovaX, nos sumergimos en el emocionante mundo del azar y la financiación empresarial. Somos un innovador punto de encuentro
              donde la suerte se une con el espirítu emprendedor. <br /><br /> Nuestro objetivo principal es recaudar fondo para impulsar el crecimiento de empresas,
              proporcionando a nuestros jugadores la oportunidad de ganar grandes premios mientras apoyan proyectos empresariales. <br /><br />Con juegos apasionantes, un enfoque transparante y la 
              emoción de las posibilidades infinitas, NovaX ofrece una experiencia única que combina la diversión del azar con el propósito de fomentar el éxito empresarial.
            </span>
          </div>
        </div>
      </div>

      <div className='home-2'>
        <div className='derecha'>
          <div className='vis' style={{alignContent:'flex-start'}}>
            <h1 className='whoami'>Nuestra misión</h1>
            <span> 
                Facilitar oportunidades de éxito empresarial a través del azar.
            </span>
          </div>
        </div>
        <div className='derecha'>
          <div className='vis'>
            <h1 className='whoami'>Nuestra Visión</h1>
            <span>
                Convertirnos en la empresa número 1, enfocada en la financiación y desarrollo empresarial a través del azar.
            </span>
          </div>
        </div>
      </div>
      <div className='bottom-home'>
            <img src="src\assets\NovaX.png" /> 
      </div>
      
      {/* <Link to="/login" className="login-button">Iniciar sesión</Link> */}
    </div>
  );
};

export default Home;
