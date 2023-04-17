import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 800px;
  background-color: #f0f0f0;
  border: 1px solid #e2e2e2;
  justify-content: center;
  margin: 100px auto;
  border-radius: 25px;
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 800px;
  height: 600px;
  border-radius: 25px;
`;
export const ProductImg = styled.img`
  width: 800px;
  height: auto;
  object-fit: fill;
  border-radius: 25px 25px 0 0;
`;
export const ProductDetail = styled.div`
  margin: 25px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
`;
export const ProductH2Tag = styled.h2`
  font-size: 45px;
  color: #7a979e;
`;
export const ProductText = styled.p`
  font-size: 15px;
  color: #7a979e;
`;
export const ProductDescr = styled.p`
  font-size: 15px;
  color: #7a979e;
  font-style: italic;
`;
export const ProductImagesDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProductImages = styled.img`
  width: 180px;
  height: 180px;
  padding: 5px;
`;
export const ProductPrice = styled.div`
  width: 90px;
  height: 50px;
  padding: 5px;
  background-color: #cba1c0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductPriceText = styled.p`
  font-size: 25px;
`;
