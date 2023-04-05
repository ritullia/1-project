import { useState } from "react";

export const MoodChecker = () => {
  const [message, setMessage] = useState("");

  const handleClickSad = () => {
    setMessage("Nieko tokio, viskas bus gerai");
  };

  const handleClickOk = () => {
    setMessage("Gerai, nujaučiu, kad greitu metu jausitės puikiai");
  };
  const handleClickHappy = () => {
    setMessage("Smagu girdėti, taip ir toliau");
  };
  return (
    <>
      <div>
        <h2>Kaip jaučiatės?</h2>
        <div>
          <button onClick={handleClickSad}>😒</button>
          <button onClick={handleClickOk}>😊</button>
          <button onClick={handleClickHappy}>😆</button>
        </div>
        <p>{message}</p>
        <button onClick={() => setMessage(" ")}>Reset</button>
      </div>
    </>
  );
};
