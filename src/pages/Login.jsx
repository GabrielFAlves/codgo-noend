import logo from './logom.png';
import img from'./login_logo.png';
import Menu from "../components/Menu/Menu";
import { LoginDiv } from './logi';

function Login(){
    return(
        <>
            <Menu />
            <LoginDiv>
            <div>
                <img src={logo} className='logologo' alt="logo" />
                </div>
            <div className='Container'>
                            <div className='Chad-image'>
                                <img src= {img} alt='Imagem ilustrativa' title='Imagem ilustrativa ' />
                                </div>
                            <div className='Chad'>
                                <form action="#">
                                    <div className='Chad-header'>
                                        <div className='Chad-title'>
                                            <h1 className=''>Login</h1>
                                        </div>
                                    </div>
                                    
                                    <div className='Input-group'>
                                        <div className='Input-box'>
                                            <label for='user'>Usuário</label>
                                            <input id='user' type='text' name='user' placeholder='Digite seu nome' required/>
                                        </div>

<<<<<<< HEAD
                                        <div className='Input-box'>
                                            <label for='password'>Senha</label>
                                            <input id='password' type='password' name='password' placeholder='Digitar senha' required/>
                                        </div>
                                        
                                        <div>
                                            <a href="#"  id='esqueceu_senha'>Esqueceu sua senha?</a>
                                        </div>
                                    </div>

                                    <div className='Send-button'>
                                            <button><a href='#'>Login</a></button>
                                    </div>
                                </form>
                            </div>
                        </div>
=======
                        <form method='POST'>
                            <input type="text" name='nome' placeholder='nome de usuario' autoFocus />
                            <input type="password" name='senha' placeholder='sua senha' />
                            <input type="submit" value="entrar" id='b-entrar' />
                        </form>
                        <a href=''>Esqueceu sua senha???</a>
                    </div>
                </section>
            </div>
>>>>>>> 820fcc07f49056c9d211618a6925a5d5ba6be7e4
            </LoginDiv>
        </>
    );
}

export default Login;