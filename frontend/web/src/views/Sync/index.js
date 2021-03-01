import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';

// Componentes:
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function Sync() {
    const [mac,setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function SaveMac(){
        if(!mac){
            alert('Phone verification code required')
        }else{
            await localStorage.setItem('@momentum/macaddress', mac);
            setRedirect(true);
            window.location.reload();
        }   
    }
    return(
        <S.Container>
            {redirect && <Redirect to="/"/>}
            <Header/>


            <S.Content>
                <h1>CAPTURE THE QRCODE</h1>
                
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={500}/>
                </S.QrCodeArea>
                
                <p>Your data will be automatically synced from the web to your phone.</p>

                <S.AuthCode>
                    <span>Type in the numeric code on your phone:</span>
                    <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                    <button type="button" onClick={SaveMac}>SYNC</button>
                </S.AuthCode>
            </S.Content>
            <Footer/>
        </S.Container>
    )
}

export default Sync;
