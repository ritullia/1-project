function Button({ name, onClick, children }) {
  return (
    <>
      <button className="add-button" onClick={onClick}>
        {name}
        {children}
      </button>
    </>
  );
}

export default Button;
