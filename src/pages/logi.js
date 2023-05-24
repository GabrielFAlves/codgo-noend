import styled from "styled-components";

const LoginDiv = styled.div`

    .body{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #3191F5;
        overflow: hidden;
    }

    .area-login{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .div-principal{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #95DDF5;
        width: 355px;
        height: 320px;
        padding: 35px;
        border-radius: 10px;
    }

    .div-principal form{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .div-principal input{
        margin-top: 10px;
        background-color: #7CACDE;
        border: none;
        height: 45px;
        outline: none;
        border-radius: 10px;
        color: #1D1D1C;
        padding-left: 10px;
    }

    .div-principal img{
        width: 100px;
        height: auto;
    }

    input::placeholder{
        color: #1D1D1C;
        font-size: 14px;
    }

    #b-entrar{
        display: block;
        background-color: #214BDE;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
    }

    a{
        color: #1D1D1C;
        text-decoration: none;
    }

`;

export {LoginDiv};