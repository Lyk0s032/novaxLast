import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../home/nav/nav';
import axios from 'axios';
import Server from '../server';
import CuatroCeroCuatro from '../CuatroCeroCuatro';

const Home = () => {
    const params = useParams();
    // Datos de cargando...
    const [loading, setLoading] = useState(false);
    // Datos del sorteo...
    const [sorteo, setSorteo] = useState(null);


    const axiosData = async () => {
        console.log('Acción disparada.');
        setLoading(true);
        const axiosPeticion = axios.get(`https://novax.up.railway.app/app/clients/game/${params.sorteo}`)
        .then(res => {  
            setLoading(false);
            if(res.status == 200){
                setSorteo(res.data);
            }
        }).catch(err => {
            setLoading(false);
            console.log('error');
            if(err.request.status == 404){
                setSorteo(404);
            }else if(err.request == 501 || !err.request){
                setSorteo(501)
            }
        })
    }

    useEffect(() => {
        axiosData();
    }, [])
    return (
        loading || !sorteo ? 
        <div className='login' style={{width:'100%', textAlign:'center', marginTop:'10%'}}>
            <img style={{width:'50%'}} src="https://thumbs.gfycat.com/PepperyMediumBrahmancow-max-1mb.gif" />
        </div>
        : sorteo == 500 ?
            <Server />
        : sorteo == 404 ?
            <CuatroCeroCuatro />
        :
        <div className="home-container">
            {
                console.log(sorteo)
            }
            <div className='sorteo'>
                <div className='general-sorteo'>
                    <div className='container-big-img'>
                        <img src={`${sorteo.game.img}`} />
                    </div>
                    <div className='small-images'>
                        <ul>
                            {
                                sorteo.game.imagenes ?
                                    sorteo.game.imagenes.map((imagen, i) => {
                                        return (
                                            <li>
                                                <img src={`${imagen.img}`} alt="" />
                                            </li>
                                        )
                                    })
                                :
                                    <span>No hay imagenes</span>
                            }
                        </ul>
                    </div>
                </div>
                <div className='small-sorteo'>
                    <div className='information-all'>
                        <div className='title'>
                            <h1>{sorteo.game.name}</h1>
                        </div>
                        <div className='description'>
                            <span>
                                {
                                    sorteo.game.description
                                }
                            </span>
                            <div className='datails'>
                                <h3>Se juega el día: <span> 
                                    { `${sorteo.game.finish.split('-')[0]} de  ${new Date(`${sorteo.game.finish.split('-')[2]}-${sorteo.game.finish.split('-')[1]}-3`).toLocaleDateString('default', { month: 'long'})} `}
                                    </span></h3>
                                <h3>Juega con: <span> Chontico noche</span></h3>
                                {
                                    sorteo.game.state == 'active' ?
                                    <h3>Estado: <span> Juega muy pronto</span></h3>
                                    :
                                    <h3>Estado: <span>Finalizo</span></h3>

                                }
                                <div className='money'>
                                    <span>Precio del tiquete</span>
                                    <h1>{new Intl.NumberFormat().format(sorteo.game.price)} <span>COP </span></h1>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nro'>
                <h1>Número ganador</h1>

                <div>
                    {                       
                        sorteo.game.winner ? 
                            <ul>
                                {
                                    sorteo.game.winner.split('').map((nro, i) => {
                                        return (
                                            <li key={i+1}>
                                                {nro}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        :
                        <ul>
                            <li>?</li>
                            <li>?</li>
                            <li>?</li>
                            <li>?</li>
                        </ul>
                    }
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
