import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import OwnedNFT from "./OwnedNFT";

const axios = require("axios");
const nftList = [
  {
    name: "Bored Ape #1",
    lastBid: "22",
    HighestBid: "25",
    unit: "Eth",
    purchaseDate: "2/2/2022",
    image: "temp.jpg",
    id: "1",
  },
  {
    name: "Bored Ape #2",
    lastBid: "22",
    HighestBid: "25",
    unit: "Eth",
    purchaseDate: "2/2/2022",
    image: "temp.jpg",
    id: "2",
  },
  {
    name: "Bored Ape #3",
    lastBid: "22",
    HighestBid: "25",
    unit: "Eth",
    purchaseDate: "2/2/2022",
    image: "temp.jpg",
    id: "3",
  },
  {
    name: "Bored Ape #4",
    lastBid: "22",
    HighestBid: "25",
    unit: "Eth",
    purchaseDate: "2/2/2022",
    image: "temp.jpg",
    id: "4",
  },
  {
    name: "Bored Ape #5",
    lastBid: "22",
    HighestBid: "25",
    unit: "Eth",
    purchaseDate: "2/2/2022",
    image: "temp.jpg",
    id: "5",
  },
];

const Profile = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [currentVal, setCurrentVal] = useState("33");
  const [currentCurrency, setCurrentCurrency] = useState("BTC");
  const [changingCurrency, setChangingCurrency] = useState("BTC");

  const converted = async (e) => {
    const api_key = "af20fe15-8a01-468b-bc66-433029045137";
    setChangingCurrency(e);
    const options = {
      method: "GET",
      url: `https://api.simpleswap.io/v1/get_estimated?api_key=${api_key}&fixed=&currency_from=${currentCurrency}&currency_to=${changingCurrency}&amount=${currentVal}`,
    };

    await axios
      .request(options)
      .then(function (response) {
        setCurrentVal(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    setCurrentCurrency(changingCurrency);
  };

  useEffect(() => {}, [currentVal]);

  return (
    <>
      <Container>
        <Data>
          <Image>
            <img src="avatar.jpg" alt="" />
          </Image>
          <Info>
            <Name>
              <b>Name</b>
              <p>Kapil Soni</p>
            </Name>
            <JoinedOn>
              <b> Joined On</b>
              <p>2/3/22</p>
            </JoinedOn>
            <NFTOwned>
              <b>NFT's Owned</b>
              <p>2</p>
            </NFTOwned>
            <ProfileValue>
              <b>Profile Value</b>
              <p>
                <p>{Math.floor(currentVal)} </p>
                <select
                  onChange={(e) => converted(e.target.value)}
                  value={changingCurrency}
                >
                  {currencies.map((currency) => {
                    return <option value={currency}>{currency}</option>;
                  })}
                </select>
              </p>
            </ProfileValue>
          </Info>
        </Data>
      </Container>
      <OwnedNft>
        <Heading>Owned NFT's</Heading>
        <NFTS>
          {nftList.map((eachNFT) => {
            return (
              <OwnedNFT
                name={eachNFT.name}
                HighestBid={eachNFT.HighestBid}
                unit={eachNFT.unit}
                purchaseDate={eachNFT.purchaseDate}
                id={eachNFT.id}
              />
            );
          })}
        </NFTS>
      </OwnedNft>
    </>
  );
};

export default Profile;
const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.3rem;
`;

const Data = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  gap: 5rem;
`;
const Image = styled.div`
  width: 50%;
  border-radius: 5rem 0 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30rem;
    height: 30rem;
    border-radius: 100%;
    box-shadow: 2px 2px 16px 3px black;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.08);
      box-shadow: 2px 2px 30px 3px black;
    }
  }
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: left;
  gap: 1.3rem;
  flex-direction: column;
  div {
    font-size: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1.4rem;
    color: gray;
    font-size: 2.5rem;
    b {
      color: black;
    }
  }
`;

const Name = styled.div``;
const JoinedOn = styled.div``;
const NFTOwned = styled.div``;
const ProfileValue = styled.div`
  p {
    display: flex;
    gap: 1rem;
  }
  select {
    width: 30%;
    // text-align: center;
    height: 2.4rem;
    border: none;
    color: gray;
    outline: none;
    font-size: 2.3rem;
  }
`;

const OwnedNft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const Heading = styled.div`
  width: 100%;
  padding-left: 5rem;
  font-size: 3rem;
  font-weight: bold;
  text-decoration: underline;
`;
const NFTS = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-row-gap: 4rem;
  justify-items: center;
  align-items: center;
`;
