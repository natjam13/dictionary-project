import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-Header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Yoga" />
        </main>
        <footer className="App-footer">
          Compiled by Natalie
        </footer>
      </div>
    </div>
  );
}


