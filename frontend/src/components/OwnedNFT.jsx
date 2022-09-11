import React from "react";
import styled from "styled-components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate, useParams } from "react-router-dom";

const OwnedNFT = (props) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`myNFT/${props.id}`)}>
      <RedirectLink>
        <a href="#">
          <OpenInNewIcon />
        </a>
      </RedirectLink>
      <Image>
        <img src="temp.jpg" alt="" />
      </Image>
      <Info>
        <div>
          <b>Name : </b> {props.name}
        </div>

        <div>
          <b>Highest Active Bid : </b> {props.HighestBid} {props.unit}
        </div>
        <div>
          <b>Bought On : </b> {props.purchaseDate}
        </div>
      </Info>
    </Container>
  );
};

export default OwnedNFT;

const Container = styled.div`
  width: 85%;
  height: 18rem;
  border: 1px solid black;
  border-radius: 1.5rem;
  display: flex;
  position: relative;
  box-shadow: 0.1pc 0.1pc 0.6pc 0.1px;
  cursor: pointer;
`;
const Image = styled.div`
  height: 100%;
  width: auto;
  border-right: 1px solid black;
  img {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem 0 0 1.5rem;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 2rem;
  font-size: 1.6rem;
`;

const RedirectLink = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
