import React from "react";
import styled from "styled-components";

const HomePageCard = (props) => {
  return (
    <Container>
      <Image>
        <img src={props.image} />
      </Image>
      <Heading>
        <h2>{props.title}</h2>
      </Heading>
    </Container>
  );
};

export default HomePageCard;

const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 2px 4px 4px 6px gray;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.08);
    box-shadow: 2px 4px 6px 8px gray;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 1rem 1rem 0 0;

  img {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    height: 100%;
  }
  border-bottom: 1px solid gray;
`;
const Heading = styled.div`
  border-radius: 1rem;
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.9rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
  }
`;
