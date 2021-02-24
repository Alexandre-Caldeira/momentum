import styled from 'styled-components';

export const Container = styled.div `
    width: 200px; 
    height: 60px;
    background: ${props => props.active ? '#755AFC':'#5BCBFB'} ;
    margin: 18px;
    border-radius: 37px;
    cursor: pointer;

    diplay: flex;
    flex-wrap: wrap;
    position:relative;
    

    img{
        position:absolute;
        height:20px;
        margin: 5px;
        padding-left: 23px;
        padding-top: 16px;
        top:0;
        left:0;
    }

    #nomeFiltro {
        position:absolute;
        font-size: 23px;
        font-weight: bold;
        font-family: Lucida Sans;
        padding-top: 18px;
        top:0;
        right:20px;
    }

    &: hover{
        background: #755AFC
    }

    `