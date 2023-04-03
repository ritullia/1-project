import {
  Card,
  Container,
  CardImage,
  CardText,
  Brand,
  Discount,
  TextDiv,
  Price,
} from "./styles/style";

export const ProductItemCard = ({ item }) => {
  const { brand, title, thumbnail, discountPercentage, price } = item;

  return (
    <Container>
      <Card>
        <TextDiv>
          <Discount>{discountPercentage}</Discount>
          <Brand>{brand}</Brand>
          <CardText>{title}</CardText>
        </TextDiv>
        <CardImage src={thumbnail} />
        <Price>{price}</Price>
      </Card>
    </Container>
  );
};
