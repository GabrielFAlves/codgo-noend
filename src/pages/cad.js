import styled from "styled-components";

const CadDiv = styled.div`

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
        justify-content: center;
        align-items: center;
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

    .div-principal img{
        width: 100px;
        height: auto;
    }

`;

export {CadDiv};