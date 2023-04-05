// import { ProductItemModal } from "./ProductItemModal";
// import { useState } from "react";

import {
  Card,
  CardImage,
  CardText,
  Brand,
  Discount,
  TextDiv,
  PriceDiv,
  Price,
  New,
} from "./styles/style";

export const ProductItemCard = ({ item, onClick }) => {
  const { brand, title, thumbnail, discountPercentage, price } = item;

  if (discountPercentage === 0) {
    return (
      <Card onClick={() => onClick(item)}>
        <TextDiv>
          <New>New</New>
          <Brand>{brand}</Brand>
          <CardText>{title}</CardText>
        </TextDiv>
        <CardImage src={thumbnail} />

        <PriceDiv>
          <Price>{price} &#8364; </Price>
        </PriceDiv>
      </Card>
    );
  }

  return (
    <Card onClick={() => onClick(item)}>
      <TextDiv>
        <Discount>{discountPercentage}%</Discount>
        <Brand>{brand}</Brand>
        <CardText>{title}</CardText>
      </TextDiv>
      <CardImage src={thumbnail} />

      <PriceDiv>
        <Price>{price} &#8364; </Price>
      </PriceDiv>
    </Card>
  );
};
