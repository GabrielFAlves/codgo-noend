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
        <Grafico status1={"aberto"} status2={"pendente"} status3={"fechado"}/>



       </div>
    
    );
  };
  
  export default Abrir;