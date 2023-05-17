import logo from './logonoend.png';
import Menu from "../components/Menu/Menu";
import { MinhaDiv } from './abri';

function Abrir(){
    return(
        <>
            <MinhaDiv>
                <Menu />
                <div className='App App-header'>
                    <img src={logo} className='Login-logo' alt="logo" />
                    <h1 id='H-destaque'>Abrir Chamado</h1>
                    <div id='Square-mid'>
                        <div>
                            <p>Nome e Sobrenome</p>
                            <p>Setor</p>
                            <p>Assunto</p>
                            <p>Nível de Criticidade</p>
                            <p>Solicitação</p>
                        </div>
                        <div id='D-entrada'>
                            <input type="text" className='Inp' />
                            <input type="text" className='Inp'/>
                            <input type="text" className='Inp'/>
                            <input type="text" className='Inp'/>
                        </div>
                        <div>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div>
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
            </MinhaDiv>
        </>
    );
}

export default Abrir;