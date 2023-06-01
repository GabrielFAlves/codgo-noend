import logo from './logonoend.png';
import Tudo from './style';
import Header from '../components/Header';
import Menu from "../components/Menu/Menu";
import Grafico from '../components/Grafico';

function Abrir() {
    return (
       <div>
        <Menu/>
        <Header/>
        <Grafico/>



       </div>
    
    );
  };
  
  export default Abrir;