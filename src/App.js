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
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Products/HomePage";
import { Login } from "./Products/Login";
import { Register } from "./Products/Register";
import { ProductsDetails } from "./Products/ProductsDetails";
import { PageNotFound } from "./Products/PageNotFound";
import { Posts } from "./Products/posts/Posts";
import { Post } from "./Products/posts/Post";
import { Comments } from "./Products/posts/Comments";
import { IndexPost } from "./Products/posts/IndexPost";
import Protected from "./Products/Protected";
import React from "react";
import { CommentInfo } from "./Products/posts/CommentInfo";
import { CommentIndex } from "./Products/posts/CommentIndex";

const About = React.lazy(() => import("./Products/About"));
const ContactUs = React.lazy(() => import("./Products/ContactUs"));

function App() {
  // const onFaustasHeaderClick = () => {
  //   alert("Button Faustas header clicked");
  // };
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submited");
  // };

  // const handleSubmitKeyUp = () => {
  //   console.log("KeyUp event 2");
  // };
  // const handleSubmitKeyDown = (e) => {
  //   console.log("Keydown event 1");
  //   console.log(e.code);
  // };
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<div>Showing while component loads</div>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <React.Suspense
              fallback={<div>Please wait, you'll see our contacts soon</div>}
            >
              <ContactUs />
            </React.Suspense>
          }
        />
        <Route path="/products" element={<ItemList />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Protected isSignedIn={isSignedIn} />}>
          <Route path="/posts" element={<Posts />}>
            <Route index element={<IndexPost />} />
            <Route path=":postId" element={<Post />}>
              <Route path="comments" element={<Comments />}>
                <Route index element={<CommentIndex />} />
                <Route path="commentInfo" element={<CommentInfo />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
    // <div className="App">
    //   {/* <NavBar />
    //   <StateButton />
    //   <TextInput />
    //   <CheckBox />
    //   <Form />
    //   <MoodChecker /> */}
    //   {/* <Header
    //     name="Burbulas"
    //     onClick={() => console.log("Button Burbulas header clicked")}
    //   >
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </Header>
    //   <Header name="Faustas" onClick={onFaustasHeaderClick} />

    //   <header className="App-header">
    //     <p>Codeacademy.lt React paskaita!</p>
    //     <a
    //       className="App-link"
    //       href="https://codeacademy.lt"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Codeacademy
    //     </a>
    //     <Button
    //       name="Paspausti"
    //       onClick={() => alert("Please do not click on button 😱")}
    //     >
    //       <span> 🏝️ </span>
    //     </Button>
    //     <Button
    //       name="Log in"
    //       onClick={() => alert("Hello, now You loged in 🌠")}
    //     >
    //       <span> 🙃 </span>
    //     </Button>
    //     <Button
    //       name="Register"
    //       onClick={() => alert("You just clicked the button 🚀")}
    //     >
    //       <span> 🙄 </span>
    //     </Button>
    //     <ProductList />
    //     <DrinkList />
    //   </header>
    //   <main>
    //     <h1>Categories</h1>
    //     <Canva />
    //     <Posters />
    //     <Artists />
    //     <Stickers />
    //   </main> */}
    //   {/* <div>
    //     <StudentsList />
    //   </div>
    //   <div>
    //     <Recepies />
    //   </div> */}
    //   {/* <button onClick={() => alert("Button clicked")}>Click</button>
    //   <form onSubmit={handleFormSubmit}>
    //   <input />
    //   <button onKeyDown={handleSubmitKeyDown} onKeyUp={handleSubmitKeyUp}>
    //   Submit
    //   </button>
    // </form> */}
    //   <HomePage />
    //   <Login />
    //   <Header></Header>
    //   <ItemList />
    // </div>
  );
}

export default App;
