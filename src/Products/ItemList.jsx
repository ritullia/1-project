import { cardData } from "./data/data";
import { ProductItemCard } from "./ProductItemCard";

export const ItemList = () => {
  const cardArr = cardData.map((item) => {
    console.log(item);
    return <ProductItemCard key={item.id} item={item} />;
  });
  return <>{cardArr}</>;
};
