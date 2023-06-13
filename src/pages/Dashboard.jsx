import logo from './logom.png';
import Tudo from './Dashboard';
import Header from '../components/Header';
import Menu from "../components/Menu/Menu";
import Grafico from '../components/Grafico';

function Dashboard() {
    return (
       <div>
        <Menu/>
        <Header/>
        <Grafico status1={"aberto"} status2={"pendente"} status3={"fechado"}/>



       </div>
    
    );
  };
  
  export default Dashboard;