import logo from './logonoend.png';
import Menu from "../components/Menu/Menu";
import { MinhaDiv } from "../components/Menu/style";

function Login(){
    return(
        <>
            <MinhaDiv>
            <Menu />
                <div className="App App-header">
                    <div className='Square-mid'>
                        <img src={logo} className='Login-logo' alt="logo" />
                        <h1 id='H-destaque'>NoEnd</h1>
                        <h2 id='H-login'>Login</h2>
                        <input type="text" id='Nome-usuario' />
                        <p id='P-usuario'>usuario...</p>
                        <input type="text" id='Senha-usuario' />
                        <p id='P-senha'>senha...</p>
                        <button id='B-entrar'>Entrar</button>
                        <a href="" id='B-esquecer'>Esqueceu sua senha</a>
                    </div>
                </div>
            </MinhaDiv>
        </>
    );
}

export default Login;