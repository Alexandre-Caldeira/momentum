import styled from 'styled-components';

export const Container = styled.div `
    width: 100%; 
    height: 60px;
    background: #7CDAC7;
    border-bottom: 8.1px solid #FF578E;
    display: flex;

    
`

export const LeftSide = styled.div `
    width: 50%; 
    height: 78.1px;

    img {
        width: auto;
        height: 50%;
        padding-top: 1%;
        padding-left: 27px;
    }
`

export const RightSide = styled.div `
    width: 50%; 
    height: 78.1px;

    display: flex;
    padding-top: 1%;
    justify-content: flex-end;

    a {
        color: #000;
        font-family: Lucida Sans;
        font-weight: bold;
        font-size: 21px;
        text-decoration: none;

        &: hover {
            color: #755AFC;
        }

    }
 

    b {
        color: #707070;
        font-family: Lucida Sans;
        font-size: 23px;
        text-decoration: none;
        margin: 0px 17px;
    }

    #notification {
        cursor: pointer;
        
        img{
            width: 42%;
            height: auto;
            color: #FF578E;

            &: hover{
                opacity: 0.5;
            }
        }

        span {
            font-size: 17px;
            background: #FFF;
            color: #000;
            padding: 0.5px 5px;
            border-radius: 50%;
            position: relative;
            top:-28%;
            right: 15%;
            font-family: Lucida Sans;

            &: hover{
                opacity: 0.5;
            }
        }

    }

`

