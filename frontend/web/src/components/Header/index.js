import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import sino from '../../assets/ic-bell.png';

function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo"/>
            </S.LeftSide>

            <S.RightSide>
                <a href="#"> HOME </a>
                <b > | </b>
                <a href="#"> +TASK </a>
                <b > | </b>
                <a href="#"> SYNC </a>
                <b > | </b>
                <a href="#" id="notification">
                    <img src={sino} alt="Notificação"></img>
                    <span>5</span>
                </a>
            </S.RightSide>
            
        </S.Container>


        

    )
}
export default Header;
