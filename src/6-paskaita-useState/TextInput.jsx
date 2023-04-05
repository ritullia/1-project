import { useState } from "react";

export const TextInput = () => {
  const [text, setText] = useState("Bla bla");
  const hadleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div style={{ margin: "25px" }}>
        <input value={text} onChange={hadleChange} />
        <p>Parašėme: {text}</p>
        <button onClick={() => setText(" ")}>Reset</button>
      </div>
    </>
  );
};
