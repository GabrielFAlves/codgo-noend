import logo from './logonoend.png';
import Menu from '../components/Menu/Menu';
import { MinhaDiv } from '../components/Menu/style';

function App() {
  return (
    <MinhaDiv>
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </MinhaDiv>
  );
}

export default App;