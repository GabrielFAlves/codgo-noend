import logo from '../../pages/logonoend.png';
import {Body, Img, Tudo} from "./style"
import Grafico from '../Grafico';

function Header() {
    return (
        <Tudo>
        <Body>
        <div class="main">
            <nav>
                <h1 class="titlenav">Dashboard</h1>
                <button class="logout">Logout</button>
            </nav>
    
        </div>
 

    </Body>
    </Tudo>
    );
  };
  
  export default Header;