import logo from './logonoend.png';
import Menu from "../components/Menu/Menu";
import { MinhaDiv } from "../components/Menu/style";

function Login(){
    return(
        <>
            <MinhaDiv>
            <Menu />
                <div className="App App-header ">
                    <div className='Square-mid'>
                        <img src={logo} className='Login-logo' alt="logo" />
                        <h1 id='H-destaque'>Login</h1>
                        <input type="text" id='Nome-usuario' placeholder="Usuário" />
                        <input type="text" id='Senha-usuario' placeholder="Senha" />
                        <button id='B-entrar'>Entrar</button>
                        <a href="" id='B-esquecer'>Esqueceu sua senha</a>
                    </div>
                </div>
            </MinhaDiv>
        </>
    );
}

export default Login;