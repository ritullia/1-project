import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MainContainer,
  ImgContainer,
  ProductImg,
  ProductDetail,
  ProductH2Tag,
  ProductImagesDiv,
  ProductImages,
  ProductText,
  ProductDescr,
  ProductPrice,
  ProductPriceText,
  ProductStockDiv,
} from "./styles/StyledProduct";

export const ProductsDetails = ({ item }) => {
  const { id } = useParams();
  const [singleProduct, setSinglePoduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const { title, thumbnail, brand, category, description, images } = item;

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSinglePoduct(data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <div>Product details - Item id: {id}</div> */}
      <MainContainer>
        <ImgContainer>
          <ProductImg src={singleProduct.thumbnail} alt="img" />
        </ImgContainer>
        <ProductImagesDiv>
          {singleProduct.images.map((picture, index) => (
            <ProductImages src={picture} key={index} alt={`${index} image`} />
          ))}
        </ProductImagesDiv>
        <ProductDetail>
          <div>
            <ProductH2Tag>{singleProduct.title}</ProductH2Tag>
            <ProductText>Brand: {singleProduct.brand}</ProductText>
            <ProductDescr>{singleProduct.description}</ProductDescr>
          </div>
          <ProductStockDiv>
            <p>
              <span>Stock: {singleProduct.stock}</span>
            </p>
            <p>Category: {singleProduct.category}</p>
          </ProductStockDiv>
          <ProductPrice>
            <ProductPriceText>
              {singleProduct.price} <span>€</span>
            </ProductPriceText>
          </ProductPrice>
          <div>
            <div>Rating: {singleProduct.rating}</div>
          </div>
        </ProductDetail>
      </MainContainer>
    </>
  );
};
