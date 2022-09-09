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
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
          <HomePageCard title="Bored Ape" image="temp.jpg" />
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
  height: 7rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 3rem;
    font-weight: 550;
    text-decoration: underline;
    text-shadow: 2px 5px 6px gray;
  }
`;

const CardHolder = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding-top: 6rem;
  padding-left: 13rem;
  align-items: center;
  place-items: center;
  grid-template-columns: repeat(4, 20%);
  overflow-x: hidden;
  gap: 3rem;
  padding-bottom: 5rem;
`;
