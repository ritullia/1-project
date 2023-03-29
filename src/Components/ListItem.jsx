export const ListItem = ({ productName, isBought }) => {
  // if (productName === "Batonas" && !isBought) {
  //   return <li>Balta duona</li>;
  // }
  if (isBought) {
    return <li>{productName} ✔</li>;
  } else {
    return (
      <>
        <li>{productName}</li>
      </>
    );
  }
};
