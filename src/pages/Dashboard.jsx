import logo from './logom.png';
import img from'./img_dashboard.png';
import Menu from "../components/Menu/Menu";
import { DashDiv } from "./dash";

function Dashboard(){
    return(
        <>
            <Menu />
            <DashDiv>
            <div>
                <img src={logo} className='logologo' alt="logo" />
            </div>
            <div className='Container'>
                <div className='Chad-image'>
                    <img src= {img} alt='Imagem ilustrativa' title='Imagem ilustrativa ' />
                </div>
                   
                
            </div>
            </DashDiv>
        </>
    )
}

export default Dashboard;