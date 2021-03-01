import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const QrCodeArea = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Content = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lucida Sans';
    margin-top: 5%;

    h1{
        font-size:48;
        color:#FF578E;
    }

    p{
        font-size:34;
        color: #707070;
    }
`
export const AuthCode = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        text-transform: uppercase;
        font-weight: bold;
    }

    input {    
        font-family: "Lucida Sans";
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button{        
        /* width: 75px;
        height: 40px; */
        margin-top: 10px;
        padding: 10px;
        font-family: "Lucida Sans";
        font-size: 20px;
        color: #000;
        border: 1px solid #707070;
        border-radius: 20px;
        outline: none;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }

    }
`