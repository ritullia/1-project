import { useState } from "react";

export const CheckBox = () => {
  const [liked, setLiked] = useState(true);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  };

  return (
    <>
      <div style={{ margin: "25px" }}>
        <label>
          <input type="checkbox" checked={liked} onChange={handleChange} /> Man
          patiko
        </label>
        <p>Tau {liked ? "patiko" : "nepatiko"}</p>
      </div>
    </>
  );
};
