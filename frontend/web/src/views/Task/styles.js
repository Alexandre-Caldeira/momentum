import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Form = styled.div `
    width: 52%;
    margin-left: 18px;
    margin-top: 18px;
    // background: rgba(0,0,0,0.4);

`

export const IconList = styled.div `
    width: 100%;
    display: relative;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    .inactive {
        opacity: 0.5;
    }

    button {
        background: none;
        border: none;
        outline: none;
    }

    img {
        cursor: pointer;
        height: 42pt;
        margin: 2px;
        
        &:hover {
            opacity: 1;
        }
    }
`

export const Input = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 10px;

    span {
        font-size: 23px;
        font-family: Lucida Sans;
        color: #707070;
    }

    input {
        font-size: 23px;
        font-family: Lucida Sans;
        color: #707070;
        padding: 8px;
        border: none;
        border-bottom: 1px solid #707070;
        margin-bottom: 10px;
    }
`
export const TextArea = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    
    span {
        font-size: 23px;
        font-family: Lucida Sans;
        color: #707070;
        margin-bottom: 5px;
    }

    textarea {
        font-size: 23px;
        font-family: Lucida Sans;
        padding: 8px;
        border: 1px solid #707070;
        border-radius: 12px 12px 0px 12px;
    }
`

export const Options = styled.div `
    width: 100%;
    font-size: 23px;
    font-family: Lucida Sans;
    display: flex;
    margin-top: 25px;
    flex-direction: row;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        font-size: 23px;
        font-family: Lucida Sans;
        font-weight: bold;
        color: #707070;
    }
    
    button {
        font-size: 23px;
        color: #707070;
        font-family: Lucida Sans;
        font-weight: bold;
        border: none;
        background: none;

        &:hover{
            opacity: 0.7;
        }
    }
`

export const Save = styled.div `
    width:100%;
    margin-top: 100px;
    display:flex;
    justify-content:center;
    align-items: center; 

    button{
        width: 152px;
        height: 52px;
        font-size: 18px;
        font-family: Lucida Sans;
        border-radius: 100px;
        box-shadow: none;
        background: #FFF;
        border: 1pt solid #707070;
        outline:none;
        cursor: pointer;

        &:hover{
            background:rgba(0,0,0,0.15);
             /* rgba(225,87,142,0.2); */
        }
    }

    
`