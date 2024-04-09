// eslint-disable-next-line no-unused-vars
import React from 'react';
import './AppDownload.css'
import appStore from '../../assets/app_store.png';
import playStore from '../../assets/play_store.png';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>Sua Melhor Experiencia em Aplicativo <br /> <h1>SaborArt <span>Açai</span> </h1> App </p>
            <div className='app-download-platforms'>
                <img src={playStore} />
                <img src={appStore} />
            </div>
        </div>
    )
}

export default AppDownload;