// import { ProductItemModal } from "./ProductItemModal";
// import { useState } from "react";

import {
  Card,
  CardImage,
  CardText,
  TitleContainer,
  Brand,
  Discount,
  TextDiv,
  PriceDiv,
  Price,
  New,
} from "./styles/style";

export const ProductItemCard = ({ item, onClick }) => {
  const { brand, title, thumbnail, discountPercentage, price } = item;

  // const discount = discountPercentage
  //   ? Math.round(price * ((100 - discountPercentage) / 100))
  //   : "";

  // if (discountPercentage === 0) {
  //   return (
  //     <Card onClick={() => onClick(item)}>
  //       <TextDiv>
  //         <New>New</New>
  //         <Brand>{brand}</Brand>
  //         <CardText>{title}</CardText>
  //       </TextDiv>
  //       <CardImage src={thumbnail} />

  //       <PriceDiv>
  //         <Price>{price} &#8364; </Price>
  //       </PriceDiv>
  //     </Card>
  //   );
  // }

  return (
    <Card onClick={() => onClick(item)}>
      <TextDiv>
        <TitleContainer>
          <Brand>{brand}</Brand>
          <CardText>{title}</CardText>
        </TitleContainer>
        {discountPercentage ? (
          <Discount>{discountPercentage}&#37;</Discount>
        ) : (
          <New>New</New>
        )}
      </TextDiv>
      <CardImage src={thumbnail} />

      <PriceDiv>
        <Price>{price} &#8364; </Price>
      </PriceDiv>
    </Card>
  );
};
