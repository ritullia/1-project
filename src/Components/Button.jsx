export const Button = ({ name, onClick, children }) => {
  return (
    <>
      <button className="add-button" onClick={onClick}>
        {name}
        {children}
      </button>
    </>
  );
};

//naudojama tik export nes komponenta kuriam su constanta ir naudodami arrow funkcija
