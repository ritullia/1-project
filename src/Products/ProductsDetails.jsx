import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MainContainer,
  ImgContainer,
  ProductImg,
  ProductDetail,
} from "./styles/StyledProduct";

export const ProductsDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSinglePoduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSinglePoduct(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      {/* <div>Product details - Item id: {id}</div> */}
      <MainContainer>
        <ImgContainer>
          <ProductImg src={singleProduct.thumbnail} alt="img" />
        </ImgContainer>
        <ProductDetail>
          <div>
            <h2>{singleProduct.title}</h2>
            <p>Brand: {singleProduct.brand}</p>
            <p>
              <span>Stock: {singleProduct.stock}</span>
            </p>
            <p>Category: {singleProduct.category}</p>
          </div>
          <div>
            <p>Description</p>
            <p>{singleProduct.description}</p>
          </div>
          <div>
            <p>{singleProduct.price}</p>
          </div>
          <div>
            <div>Rating: {singleProduct.rating}</div>
          </div>
        </ProductDetail>
      </MainContainer>
    </>
  );
};
