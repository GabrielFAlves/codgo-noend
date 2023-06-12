import styled from "styled-components";

const Tudo = styled.div `

html, body{
    height: 100%;
    margin: 0;
    padding: 0;
}

body{
    display: flex;
}

.side{
    background-color: #242b33;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

img{
    width: 85%;
}

.hist{
    font-size: 15px;
    border: none;
    border-radius: 15px;
    background-color: whitesmoke;
    width: 90px;
    margin: 10px;
}

.main{
    width: 100%;
}

nav{
    background-color: #242b33;
    display: flex;
    justify-content: space-between;
}

.titlenav{
    color: whitesmoke;
    margin: 15px;
    font-size: 35px;
}

.logout{
    font-size: 20px;
    font-weight: bold;
    margin: 15px;
    border: none;
    border-radius: 15px;
    padding: 10px;
    background-color: whitesmoke;
}

.buttons-container{
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
}

.button{
    font-size: 40px;
    background-color: #242b33;
    color: whitesmoke;
    border: none;
    border-radius: 10px;
    padding: 15px;
}

.green{
    background-color: green;
}
`;

export default Tudo; 