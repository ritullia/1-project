function Button({ name, children }) {
  return (
    <>
      <button
        className="add-button"
        onClick={() => alert("Please do not click on button 😱")}
      >
        {name}
        {children}
      </button>
    </>
  );
}

export default Button;
