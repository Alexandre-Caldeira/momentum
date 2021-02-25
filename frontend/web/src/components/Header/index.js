import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';
import sino from '../../assets/ic-bell.png';

function Header({lateCount, bellClick}) {
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
                <Link to='/sync'> SYNC </Link>
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
