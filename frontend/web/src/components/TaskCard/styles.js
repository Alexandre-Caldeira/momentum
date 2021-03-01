import styled from 'styled-components';

export const Container = styled.div `
    width: 300px; 
    height: 200px;

    border-radius: 15px;
    margin: 18px 36px;

    background: #FFF;

    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.7);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover {
        opacity: 0.5;
    }
    
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: ${props => props.done ? 0.5 : 1};
`

export const TopCard = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        height: 100px;
        width: 100px;
        padding-top: 18px;
    }

    h1 {
        font-size: 23px;
        font-family: Lucida Sans;
        color: #707070;
    }
`

export const BottomCard = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 23px;
    font-family: Lucida Sans;
    padding-bottom: 13px;

    strong {
        color:#F69B60
    }

    span {
        color: #707070
    }
`