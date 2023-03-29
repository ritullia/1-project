export const TernaryListItem = ({ productName, isBought }) => {
  return <li>{isBought ? productName + "✔" : productName}</li>;
};
