import styled from 'styled-components';

export const Container = styled.div `
    width: 333px; 
    height: 75px;
    background: #5BCBFB;
    margin: 20px;
    border-radius: 37px;
    opacity: 0.5;

    diplay: flex;
    flex-direction: column;
    

    img{
        height:38%;
        margin: 5px;
        padding-left: 20px;
        padding-top: 5px; 
    }

    #nomeFiltro {
        font-size: 23px;
        font-weight: bold;
        font-family: Lucida Sans;
        padding-left: 60%;
    }

    &: hover{
        background: #755AFC
    }

    `