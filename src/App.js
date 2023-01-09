import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          こんにちは! My name is Aidan Kiser. I am a Computer Science Student at Auburn University.<br></br>
          This is my personal website that I will continuously be iterating on when I feel like it.<br></br>
          Feel free to stop by and check in on my progress every once in a while!
        </p>
        {/* 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
          */}
      </header>
    </div>
  );
}

export default App;
