import React from 'react';
import { Link } from 'react-router-dom';

const Download = () => { 
  const download = 'https://expo.dev/artifacts/eas/vp82gT6eYLprrPhiwxjpsH.apk';
  return (
    <div className="home-container">
      <div className='home'>
          <div className='container-msj'>
              <div className='msj'>
                <h1>NovaX</h1>
                <h3>Haz parte de nuestra gran comunidad</h3>
                <span>Donde la suerte se conecta con el espiritu emprendedor</span>
                <br /><br />
                <button className='download' onClick={() => {
                    location.href = download;
                }}>Descargar</button>
              </div>
          </div>
      </div>
      <div className='home-2'>
        <div className='izquierda'>
            <img src="https://i.pinimg.com/474x/9d/49/b2/9d49b20a3ad8ce69195f5b098da5b80b.jpg" />
        </div>
        <div className='derecha'>
          <div className='conta'>
            <h1 className='whoami'>Nuestra comunidad</h1>
            <span>
                Nos caracterizamos por tener una comunidad transparante, comprometida en el desarrollo y beneficio de nuestra sociedad. <br /><br />

                En NovaX creemos fielmente que el desarrollo de nuestra sociedad, se debe construir a base de grandes sueños y pequeñas acciones.  <br /><br />

                Creemos en el desarrollo individual, sin olvidarnos del desarrollo colectivo. Y trabajamos en el desarrollo social, sin olvidarnos de los sueños, metas y anhelos
                indiviuales. <br /><br />

                En NovaX, le apostamos por el desarrollo social, a través del desarrollo individual.
            </span>
          </div>
        </div>
      </div>

      <div className='home-2'>
        <div className='derecha'>
          <div className='vis' style={{alignContent:'flex-start'}}>
            <h1 className='whoami'>¿Cómo usar NovaX App?</h1>
            <span> 
                1-  Descarga la aplicación. <br /><br />
                2-  Crea tu cuenta personal. <br /><br />
                3-  Espera la confirmación de tu cuenta <br /><br />
                4-  Selecciona un sorteo que llame tu atención. <br /><br />
                5-  Comienza a ganar dinero a través de excelentes comisiones.
            </span>
          </div>
        </div>
        <div className='derecha'>
          <div className='vis'>
            <h1 className='whoami'>¿Necesito permiso para ser miembro?</h1>
            <span>
                Si. Para ser parte de la comunidad NovaX puedes comunicarte con el equipo de NovaX a través de los siguientes números<br /><br />
                +57 321 220 7563 <br />
                (602) 437 1651 <br /><br />
                Se te entregará toda la información y requisitos que debes cumplir para hacer parte de nuestra comunidad.  <br /><br />
                El equipo de NovaX, realizará el estudio para ver que todos los requisitos esten en perfecto estado. La respuesta puedes
                tardar hasta 32 horas.
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

export default Download;
