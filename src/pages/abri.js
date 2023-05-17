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

    #Square-mid{
  
        width: 800px;
        height: 700px;
        position: absolute;

        padding-left: 0.5em;
        top: 230px;

        background: #0B1015;
        border: 1px solid #FFFFFF;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
        border-radius: 24px;
        }

    #H-destaque{
        position: absolute;
        width: 868px;
        height: 103px;
        top: 50px;
        text-align: center;

        font-style: normal;
        font-weight: 700;
        font-size: 90px;
        line-height: 103px;

        color: #FFFFFF;

        text-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    }

    @media (prefers-reduced-motion: no-preference) {
        .Login-logo{
        position: fixed;
        bottom: 0;
        right: 0;
        }
    }

    #D-entrada{
        display: flex;
        flex-direction: column;
    }

    .Inp{
        box-sizing: border-box;
        display: flex;

        position: relative;
        width: 426px;
        height: 51px;
        top: -400px;
        margin-top: 3.5em;
        margin-left: 3em;
        

        background: #FFFFFF;
        mix-blend-mode: normal;
        border: 1px solid #000000;
        border-radius: 25px;
    }
`

export {MinhaDiv};