import { useState, useEffect } from "react";
import "./styles/styles.css";

import { BsFillCartFill } from "react-icons/bs";

export const Cart = () => {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/carts/user/5")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.carts[0].totalProducts);
        console.log(data.carts[0]);

        setTotal(data.carts[0].totalProducts);
      });
  }, []);

  return (
    <>
      <h3 className="iconCart">
        {" "}
        <div className="iconDiv">
          <p className="totalItem">{total}</p>
        </div>
        <BsFillCartFill></BsFillCartFill>
      </h3>
    </>
  );
};
