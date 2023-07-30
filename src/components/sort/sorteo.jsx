import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../home/nav/nav';

const Home = () => {
  return (
    <div className="home-container">
        <div className='sorteo'>
            <div className='general-sorteo'>
                <div className='container-big-img'>
                    <img src='https://ttr.aktmotos.com/wp-content/uploads/right-1.jpg' />
                </div>
                <div className='small-images'>
                    <ul>
                        <li>
                            <img src='https://ttr.aktmotos.com/wp-content/uploads/right-1.jpg' />
                        </li>
                        <li>
                            <img src='https://ttr.aktmotos.com/wp-content/uploads/right-1.jpg' />
                        </li>
                        <li>
                            <img src='https://ttr.aktmotos.com/wp-content/uploads/right-1.jpg' />
                        </li>
                        <li>
                            <img src='https://ttr.aktmotos.com/wp-content/uploads/right-1.jpg' />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='small-sorteo'>
                <div className='information-all'>
                    <div className='title'>
                        <h1>¡Gran sorteo TTR SPORT 200!</h1>
                    </div>
                    <div className='description'>
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sint, tenetur ullam praesentium asperiores natus nihil dolorem quia hic quasi possimus voluptas sunt delectus? Alias ipsam ducimus dignissimos ratione illo.
                        </span>
                        <div className='datails'>
                            <h3>Se juega el día: <span> 1 de Septiembre</span></h3>
                            <h3>Juega con: <span> Chontico noche</span></h3>
                            <h3>Se juega el día: <span> 1 de Septiembre</span></h3>
                            <div className='money'>
                                <span>Precio del tiquete</span>
                                <h1>2.000 <span>COP </span></h1>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='nro'>
            <h1>Número ganador</h1>

            <div>
                <ul>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                </ul>
            </div>
        </div>
      <div className='bottom-home'>
            <img src="https://i.pinimg.com/474x/9d/49/b2/9d49b20a3ad8ce69195f5b098da5b80b.jpg" /> 
      </div>
      
      {/* <Link to="/login" className="login-button">Iniciar sesión</Link> */}
    </div>
  );
};

export default Home;
