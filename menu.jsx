import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/sobre"Usuário</Link>
        <Link to="/sobre">Meus chamados</Link>
        <Link to="/sobre">Chamados Internos</Link>
        <Link to="/abrir">Chamados nível Crítico</Link>
        <Link to="/abrir">Chamados nível alto</Link>
        <Link to="/abrir">Chamados nível médio</Link>
        <Link to="/abrir">Chamados nível baixo</Link>
    </MeuNav>
);

export default Menu;
