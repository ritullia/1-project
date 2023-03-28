import logo from "./CodeAcademy.png";
import "./App.css";
import Canva from "./Components/Categories/Canvases";
import Posters from "./Components/Categories/Posters";
import Artists from "./Components/Categories/Artists";
import Stickers from "./Components/Categories/Stickers";
import Header from "./Components/Header";
import Button from "./Components/Button";

function App() {
  const onFaustasHeaderClick = () => {
    alert("Button Faustas header clicked");
  };
  return (
    <div className="App">
      <Header
        name="Burbulas"
        onClick={() => console.log("Button Burbulas header clicked")}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <Header name="Faustas" onClick={onFaustasHeaderClick} />

      <header className="App-header">
        <p>Codeacademy.lt React paskaita!</p>
        <a
          className="App-link"
          href="https://codeacademy.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codeacademy
        </a>
        <Button name="Paspausti">
          <span> 🏝️ </span>
        </Button>
      </header>
      <h1>Categories</h1>
      <Canva />
      <Posters />
      <Artists />
      <Stickers />
    </div>
  );
}

export default App;
