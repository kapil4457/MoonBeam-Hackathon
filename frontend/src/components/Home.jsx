import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import HomePageCard from "./HomePageCard";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const cards = [
    {
      title: "Bored Ape 1",
      image: "temp.jpg",
      category: "Art",
    },
    {
      title: "Bored Ape 2",
      image: "temp.jpg",
      category: "Sports",
    },
    {
      title: "Bored Ape 3",
      image: "temp.jpg",
      category: "Music",
    },
    {
      title: "Bored Ape 3",
      image: "temp.jpg",
      category: "Trading",
    },
    {
      title: "Bored Ape 4",
      image: "temp.jpg",
      category: "Art",
    },
  ];

  const filtering = (val) => {
    if (selectedCategory == val.category || selectedCategory == "All") {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {}, [selectedCategory]);

  return (
    <>
      <Container>
        <Heading>
          <p>Explore</p>
        </Heading>

        <Filter>
          <select
            name=""
            id=""
            className="classic"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Trading Card">Trading Cards</option>
          </select>
        </Filter>

        <CardHolder>
          {cards.filter(filtering).map((card) => {
            return (
              <HomePageCard
                title={card.title}
                image={card.image}
                category={card.category}
              />
            );
          })}
        </CardHolder>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;
`;
const Heading = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 4rem;
    font-weight: 550;
    // text-decoration: underline;
    // text-shadow: 2px 5px 6px gray;
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

const Filter = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: right;
  padding: 0 15rem;
  align-items: center;

  select {
    /* styling */
    background-color: white;
    border: thin solid blue;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;

    /* reset */

    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  select.classic {
    background-image: linear-gradient(45deg, transparent 50%, blue 50%),
      linear-gradient(135deg, blue 50%, transparent 50%),
      linear-gradient(to right, skyblue, skyblue);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
  }

  select.classic:focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      linear-gradient(to right, gray, gray);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }
`;
