import React from "react";
import styled from "styled-components";
import HomePageCard from "./HomePageCard";

const Home = () => {
  return (
    <>
      <Container>
        <Heading>
          <p>MarketPlace</p>
        </Heading>
        <CardHolder>
          <HomePageCard />
        </CardHolder>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Heading = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 4rem;
  padding-left: 3rem;
  p {
    width: 100%;
    font-size: 2.7rem;
    font-weight: 550;
    text-decoration: underline;
    text-shadow: 2px 5px 6px gray;
  }
`;

const CardHolder = styled.div`
  width: 100%;
  display: grid;
  padding: 4rem 4rem;
`;
