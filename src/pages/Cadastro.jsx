import logo from './logom.png';
import Menu from "../components/Menu/Menu";
import { CadDiv } from './cad';


function Cadastro(){
    return(
        <>
            <CadDiv>
            <div className='body'>
            <Menu />
                <section className="area-login">
                    <div className='div-principal'>
                        <div>
                            <img src={logo} className='Login-logo' alt="logo" />
                        </div>

                        <form method='POST'>
                            <input type="text" name='nome' placeholder='nome de usuario' autoFocus />
                            <input type="password" name='senha' placeholder='sua senha' />
                            <input type="submit" value="entrar" id='b-entrar' />
                        </form>
                        <a href=''>Esqueceu sua senha?</a>
                    </div>
                </section>
            </div>
            </CadDiv>
        </>
    );
}

export default Cadastro;
