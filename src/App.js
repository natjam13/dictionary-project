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
        
          Complied and coded by <a href="https://www.linkedin.co/in/natalie-murray" target="_blank" rel="noreferrer"> Natalie Murray </a>
          Is open sourced on <a href="https://github.com/natjam13/" target="_blank" rel="noreferrer">GitHub  </a>
          Hosted on <a href="https://dictionary-project-nm.netlify.app/" target="_blank" rel="noreferrer" > Netlify</a>
 
        </footer>
      </div>
    </div>
  );
}


