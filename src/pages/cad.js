import styled from "styled-components";

const MinhaDiv = styled.div`
    .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        
        align-items: center;
        justify-content: center;
        font-size: calc(15px + 2vmin);
        color: white;
    }

    .App-link {
        color: #61dafb;
    }

    @media (prefers-reduced-motion: no-preference) {
        .Login-logo{
        position: fixed;
        bottom: 0;
        right: 0;
        }
    }

    #H-destaque{
        position: absolute;
        width: 868px;
        height: 103px;
        top: 112px;
        text-align: center;

        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 90px;
        line-height: 103px;

        color: #FFFFFF;

        text-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    }

    #In-cadastro1, #In-cadastro2, #In-cadastro3, #In-cadastro4{
        box-sizing: border-box;
        display: flex;

        position: relative;
        width: 426px;
        height: 51px;
        top: 100%;
        margin-top: 3.5em;
        margin-left: 3em;
        top: -30px;
        left: 30%;

        background: #FFFFFF;
        mix-blend-mode: normal;
        border: 1px solid #000000;
        border-radius: 25px;
    }

    .P-cadastro{
        margin-top: 1.5em;
    }

    #B-cadastrar{
        box-sizing: border-box;
        display: flex;
        position: absolute;
        width: 426px;
        height: 72px;
        top: 75%;
        
        justify-content: center;
        text-decoration: none;
        font-size: 200%;
        color: #FFFFFF;
        
        background: rgba(15, 15, 48, 0.5);
        border-radius: 30px;
    }

    #Square-mid{
  
        width: 800px;
        height: 550px;
        position: absolute;
  
        padding-left: 0.5em;
        top: 270px;

        background: #0B1015;
        border: 1px solid #FFFFFF;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
        border-radius: 24px;
    }

`;

export {MinhaDiv};