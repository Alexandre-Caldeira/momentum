import styled from 'styled-components';

export const Container = styled.div `
    width: 100; 
    `

export const FilterArea = styled.div `
    width: 100; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    button {
        background: none;
        border: none;
        outline: none;
        box-shadow: none;
    }
`
export const Content = styled.div `
    width: 100; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 58.1px;

    a {
        text-decoration: none;
        color: #707070;
    }
`

export const Title = styled.div `
    width: 100%;
    height: 30px;

    border-bottom: 1px solid #707070;

    display: flex;
    justify-content: center;

    margin-top: -18px;
    margin-bottom: 18px;

    h3 {
        color: #707070;
        position: relative;
        font-size: 34px;
        font-family: Lucida Sans;
        top:-25px;
        background: #FFF;
        padding: 0px 20px 40px 20px;
    }
    

`

