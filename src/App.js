import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-Header">
          <h1>DICTIONARY</h1>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Yoga" />
        </main>
        <footer className="App-footer">    
        
          Complied and coded by <a href="https://www.linkedin.co/in/natalie-murray" target="_blank" rel="noreferrer"> Natalie Murray </a>
          Is open sourced on <a href="https://github.com/natjam13/" target="_blank" rel="noreferrer">GitHub  </a>
          Hosted on <a href="https://dictionary-project-nm.netlify.app/" target="_blank" rel="noreferrer" > Netlify</a>

          <br/>
          <br/>
          Photos sourced from SheCodes {""}   

          <div className="sheCodes">
              <a
                href="https://www.shecodes.io"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
                  alt="SheCodes logo for footer"
                />
              </a>{" "}
            </div>
        </footer>
      </div>
    </div>
  );
}


