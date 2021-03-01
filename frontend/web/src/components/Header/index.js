import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';
import sino from '../../assets/ic-bell.png';

import api from '../../services/api';

import isConnected from '../../utils/isConnected';

function Header({bellClick}) {
    const [lateCount, setLateCount] = useState();

    async function Logout(){
        localStorage.removeItem('@momentum/macaddress');
        window.location.reload();
    }

    async function checkLate(){
        await api.get(`/task/filter/late/${isConnected}`)
                    .then(response => {
                        setLateCount(response.data.length)
                    })
    }

    useEffect(()=>{
        checkLate();
    })

    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo"/>
            </S.LeftSide>

            <S.RightSide>
                <Link to='/'> HOME </Link>
                <b > | </b>
                <Link to='/task'> +TASK </Link>
                <b > | </b>
                {!isConnected ? <Link to='/sync'> SYNC </Link> :
                <button type="button" onClick={Logout}>SAIR</button>}
                <b > | </b>
                <Link to='/' onClick={bellClick} id="notification">
                    <img src={sino} alt="Notificação"></img>
                    <span>{lateCount}</span>
                </Link>
            </S.RightSide>
            
        </S.Container>


        

    )
}
export default Header;
