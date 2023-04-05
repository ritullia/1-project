import styled from "styled-components";

export const Card = styled.div`
  height: 400px;
  width: 250px;
  background-color: #f0efef;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  margin-top: 200px;
  margin-left: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const CardImage = styled.img`
display: block
  max-width: 100%;
  height: 150px;
  object-fit: cover;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const CardText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #686868;
`;
export const Brand = styled.p`
  font-size: 12px;
  color: #ded9d9;
`;
export const Discount = styled.p`
  font-size: 18px;
  color: #ffff;
  font-weight: 800;
  width: 45px;
  height: 45px;
  background-color: #fbb89f;
  margin-left: 82%;
`;
export const New = styled.p`
  font-size: 15px;
  color: #ff9966;
  font-weight: 800;
  width: 45px;
  height: 45px;
  background-color: #009933;
  margin-left: 82%;
  border-radius: 50px;
`;

export const Price = styled.p`
  display: flex;
  justify-content: flex-end;cd 1-project
  font-size: 18px;
  color: black;
  margin-right: 20px;
  font-family: Courier;
  text-align: center;
`;
export const Btn = styled.button`
  width: 80px;
`;
export const PriceDiv = styled.div`
  background-color: #f8f8f8;
  width: 100px;
  transform: translate(150px, 120%);
  text-align: center;
`;
