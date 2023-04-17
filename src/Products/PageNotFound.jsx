import img from "./img/image.png";
import { Link } from "react-router-dom";
import { NotFoundContainer, ImgBoath } from "./styles/SteledPageNotFound";

export const PageNotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <ImgBoath src={img} alt="Not found" />
        <h2>Oooops, you're probably lost</h2>
        <p>
          We're afraid there is nothing here. Please go back to our main page
          {"  "} <Link to={`/`}>HERE</Link>
        </p>
      </NotFoundContainer>
    </>
  );
};
