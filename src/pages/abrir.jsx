import logo from './logonoend.png';
import Tudo from './style';

function Abrir() {
    return (
        <Tudo>
        <body>
        <div class="side">
            <img src={logo}/>
    
            <button class="hist">Histórico</button>
        </div>
    
        <div class="main">
            <nav>
                <h1 class="titlenav">Dashboard</h1>
                <button class="logout">Logout</button>
            </nav>
    
            <div class="buttons-container">
                <button class="button">Criar Chamado</button>
                <button class="button green">Adicionar Usuários</button>
                <button class="button">Ver Chamados</button>
            </div>
        </div>
    </body>
    </Tudo>
    );
  };
  
  export default Abrir;