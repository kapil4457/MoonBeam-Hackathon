import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomePageCard = (props) => {
  const navigate = useNavigate();
  const func = () => {
    navigate(`/nft/${props.nodeHashVal}`);
  };
  return (
    <Container onClick={() => func()}>
      <Image>
        <img src={props.image} />
      </Image>
      <img src="avatar.jpg" alt="" className="owner" />
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
  transition: transform 0.5s;
  position relative;


  &:hover {
    transform: scale(1.08);
    box-shadow: 2px 4px 20px 8px gray;
  }
  .owner{
    position absolute;
    height:4rem;
    width:4rem;
    bottom:3rem;
    left:0.5rem;
    border-radius:100%;
    border:5px solid white  ;
    box-shadow:1px 1px 5px 1px black;
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
