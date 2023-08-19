import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Server from '../server';
import CuatroCeroCuatro from '../CuatroCeroCuatro';

export default function Facture(){

    const params = useParams();
    // Datos de cargando...
    const [loading, setLoading] = useState(false);
    // Datos del sorteo...
    const [sorteo, setSorteo] = useState(null);

    // Axiones
    const axiosData = async () => {
        console.log('Acción disparada.');
        setLoading(true);
        const axiosPeticion = axios.get(`https://novax.up.railway.app/app/lottery/ticket/get/${params.factura}`)
        .then(res => {
            setLoading(false);
            if(res.status == 200){
                console.log(res.data);
                setSorteo(res.data);
            }
        }).catch(err => {
            setLoading(false);
            if(err.request.status == 404){
                setSorteo(404);
            }else if(err.request == 501 || !err.request){
                setSorteo(501)
            }
        })
    }
    const navigate = useNavigate();
    // Cuando el componente se cargue, dispara.
    useEffect(() => {
        axiosData();
    }, [])
    return (
        loading == true || !sorteo ?
        <div className='login' style={{width:'100%', textAlign:'center', marginTop:'10%'}}>
            <img style={{width:'50%'}} src="https://thumbs.gfycat.com/PepperyMediumBrahmancow-max-1mb.gif" />
        </div>
        : sorteo == 500 ?
            <Server />
        : sorteo == 404 ?
            <CuatroCeroCuatro />
        :
        <div className='home-container'> 
            <div className='factura'>
                <div className='tiquete'>
                    <div className='header'>
                        <strong>Novax</strong><br />
                        <span>Más allá de la suerte, diseñando el futuro.</span>
                    </div>
                    <div className='details'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Número de referencia</th>
                                    <th className='result'>{sorteo.reference}</th>
                                </tr>
                                <tr>
                                    <th>Sorteo</th>
                                    <th className='result'>{sorteo.lottery.name}</th>
                                </tr>
                                <tr>
                                    <th>A nombre de </th>
                                    <th className='result'>{sorteo.nameUser}</th>
                                </tr>
                                <tr>
                                    <th>Número de teléfono</th>
                                    <th className='result'>{sorteo.phoneUser}</th>
                                </tr>
                                <tr>
                                    <th>Fecha de compra</th>
                                    <th className='result'>{`${sorteo.dia} / ${sorteo.mes} / ${sorteo.year}`}</th>
                                </tr>
                                <tr>
                                    <th>Atendido por </th>
                                    <th className='result'>{sorteo.salesperson.name}</th>
                                </tr>
                                <tr>
                                    <th>Cantidad de números </th>
                                    <th className='result'>{sorteo.numeros.length}</th>
                                </tr>
                                <tr>
                                    <th>Precio individual </th>
                                    <th className='result'>{new Intl.NumberFormat().format(sorteo.lottery.price)} COP</th>
                                </tr>
                                <tr>
                                    <th>Valor total </th>
                                    <th className='result'>{new Intl.NumberFormat().format(sorteo.valor)} COP</th>
                                </tr> 
                            </tbody>
                        </table>
                        <div className='numeros'>
                            <span className='title-numeros'>
                                Números
                            </span>
                            {
                                sorteo.numeros.map((nro, i) => { 
                                    return (
                                        <div className='n' key={i+1}>
                                            <h1>{nro.numero}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='accion'>
                            <button onClick={() => navigate(`/sort/${sorteo.lottery.id}`)}>Ir al sorteo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}