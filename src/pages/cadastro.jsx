import logo from './logonoend.png';
import Menu from "../components/Menu/Menu";
import { MinhaDiv } from '../pages/cad';


function Cadastro(){
    return(
        <>
            <MinhaDiv>
            <Menu />
                <div className="App App-header">
                    <img src={logo} className='Login-logo' alt="logo" />
                    <h1 id='H-destaque'>Cadastro de Usuário</h1>
                    <div id='Square-mid'>
                        <p className='P-cadastro'>Nome e sobrenome:</p>
                        <p className='P-cadastro'>Email:</p>
                        <p className='P-cadastro'>Senha:</p>
                        <p className='P-cadastro'>Departamento:</p>
                    </div>
                    
                    <div>
                        <input type="text" id='In-cadastro1'/>
                        <input type="text" id='In-cadastro2'/>
                        <input type="text" id='In-cadastro3'/>
                        <input type="text" id='In-cadastro4'/>
                    </div>
                <button id='B-cadastrar'>Cadastrar</button>
                
                </div>
            </MinhaDiv>
        </>
    );
}

export default Cadastro;