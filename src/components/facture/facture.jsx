import React from 'react';

export default function Facture(){
    return (
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
                                    <th className='result'>111_E3212207563</th>
                                </tr>
                                <tr>
                                    <th>Sorteo</th>
                                    <th className='result'>¡GRAN TTR SPORT 200!</th>
                                </tr>
                                <tr>
                                    <th>A nombre de </th>
                                    <th className='result'>Kevin Andrés Bolaños Orrego</th>
                                </tr>
                                <tr>
                                    <th>Número de teléfono</th>
                                    <th className='result'>3212207563</th>
                                </tr>
                                <tr>
                                    <th>Fecha de compra</th>
                                    <th className='result'>06 / 05 / 2023</th>
                                </tr>
                                <tr>
                                    <th>Atendido por </th>
                                    <th className='result'>Jeanmaire Nicole Sayago</th>
                                </tr>
                                <tr>
                                    <th>Cantidad de números </th>
                                    <th className='result'>3</th>
                                </tr>
                                <tr>
                                    <th>Precio individual </th>
                                    <th className='result'>2.000 COP</th>
                                </tr>
                                <tr>
                                    <th>Valor total </th>
                                    <th className='result'>6.000 COP</th>
                                </tr> 
                            </tbody>
                        </table>
                        <div className='numeros'>
                            <span className='title-numeros'>
                                Números
                            </span>
                            <div className='n'>
                                <h1>7520</h1>
                            </div>
                            <div className='n'>
                                <h1>1012</h1>
                            </div>
                            <div className='n'>
                                <h1>0229</h1>
                            </div>
                        </div>
                        <div className='accion'>
                            <button>Ir al sorteo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}