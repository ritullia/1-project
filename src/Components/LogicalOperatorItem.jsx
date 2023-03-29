export const LogicalOperatorItem = ({ productName, isBought }) => {
  // && or ||
  return (
    <>
      <li>
        {productName} {isBought && "+"}
      </li>
    </>
  );
};

export const LogicalOrOperatorItem = ({ productName }) => {
  //  ||
  return (
    <>
      <li>
        {productName === "Paspirtukas" || productName === "Kamuolys"
          ? "Sporto prekes"
          : "Kiti produktai"}
      </li>
    </>
  );
};
