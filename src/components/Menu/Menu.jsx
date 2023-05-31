import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/sobre">Visualizar chamado</Link>
        <Link to="/cadastro">Cadastro</Link>
        
    </MeuNav>
);

export default Menu;