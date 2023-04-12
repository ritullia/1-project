import { useState, useEffect } from "react";
import "./styles/styles.css";
import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";

const CartStyled = styled.div`
  background-color: #c53838;
  // align-items: center;
  // justify-content: flex-end;
  // margin: 0 auto;
  // max-width: 900px;
  // padding: 10px 40px;
`;

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
        <CartStyled className="iconDiv toolbar">
          <p className="totalItem">{total}</p>
        </CartStyled>
        <BsFillCartFill size={"25px"} />
      </h3>
    </>
  );
};
