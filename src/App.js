import logo from "./CodeAcademy.png";
import "./App.css";
// import Canva from "./Components/Categories/Canvases";
// import Posters from "./Components/Categories/Posters";
// import Artists from "./Components/Categories/Artists";
// import Stickers from "./Components/Categories/Stickers";
// // import Header from "./Components/Header";
// import { Button } from "./Components/Button";
// import { ProductList } from "./Components/Categories/ProductList";
// import { DrinkList } from "./Components/DrinkList";
// import { StudentsList } from "./3-paskaita-list-rendering/components/StudentsList";
// import { Recepies } from "./3-paskaita-list-rendering/components/Recepies";
// import { NavBar } from "./5-paskaita/NavBar";

import { ItemList } from "./Products/ItemList";
// import { StateButton } from "./6-paskaita-useState/Button";
// import { TextInput } from "./6-paskaita-useState/TextInput";
// import { CheckBox } from "./6-paskaita-useState/CheckBox";
// import { Form } from "./6-paskaita-useState/Form";
// import { MoodChecker } from "./6-paskaita-useState/MoodChecker";
import { Header } from "./Products/Header";

function App() {
  const onFaustasHeaderClick = () => {
    alert("Button Faustas header clicked");
  };
  return (
    <div className="App">
      {/* <NavBar />
      <StateButton />
      <TextInput />
      <CheckBox />
      <Form />
      <MoodChecker /> */}
      {/* <Header
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
        <Button
          name="Paspausti"
          onClick={() => alert("Please do not click on button 😱")}
        >
          <span> 🏝️ </span>
        </Button>
        <Button
          name="Log in"
          onClick={() => alert("Hello, now You loged in 🌠")}
        >
          <span> 🙃 </span>
        </Button>
        <Button
          name="Register"
          onClick={() => alert("You just clicked the button 🚀")}
        >
          <span> 🙄 </span>
        </Button>
        <ProductList />
        <DrinkList />
      </header>
      <main>
        <h1>Categories</h1>
        <Canva />
        <Posters />
        <Artists />
        <Stickers />
      </main> */}
      {/* <div>
        <StudentsList />
      </div>
      <div>
        <Recepies />
      </div> */}
      <Header></Header>

      <ItemList />
    </div>
  );
}

export default App;
