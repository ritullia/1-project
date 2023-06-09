import { useRef } from "react";

function Header({ name, onClick, children }) {
  const headerRef = useRef(null);

  if (headerRef.current) {
    headerRef.current.style.backgroundColor = "purple";
  }

  return (
    <>
      {children}

      <header ref={headerRef}>This is {name} header</header>
      <button onClick={onClick}>Click me</button>
    </>
  );
}

export default Header;
