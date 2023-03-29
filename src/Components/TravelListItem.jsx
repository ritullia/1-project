export const TravelListItem = ({ productName, isPacked, importance }) => {
  if (importance !== 0) {
    return (
      <li>
        {productName} <b> Svarbumas: {importance}</b> {isPacked ? " ✔" : "❌"}
      </li>
    );
  } else {
    return (
      <>
        <li>{isPacked ? productName + " ✔" : productName + "❌"} </li>
      </>
    );
  }
};

export const IsImprtant = ({ productName, importance, isPacked }) => {
  // importance = 9, 4, 5 ....
  return (
    <li>
      {productName}
      {importance > 0 ? <b> Svarbumas: {importance}</b> : " "}{" "}
      {isPacked ? " ✔" : "❌"}
    </li>
  );
};
