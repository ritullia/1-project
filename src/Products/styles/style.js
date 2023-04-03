import styled from "styled-components";

export const Card = styled.div`
  height: 400px;
  width: 200px;
  background-color: #f0efef;
`;

export const Container = styled.div`
  margin-top: 200px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 180px;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const CardText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #fbb89f;
`;
export const Brand = styled.p`
  font-size: 12px;
  color: #ded9d9;
  margin-top: 5px;
`;
export const Discount = styled.p`
  font-size: 18px;
  color: #ffff;
  font-weight: 800;
  width: 40px;
  height: 40px;
  background-color: #fbb89f;
  margin-left: 150px;
`;

export const Price = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  color: black;
  margin-top: 5px;
  font-family: Courier;
`;
