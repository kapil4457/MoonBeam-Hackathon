import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const BuyerNftPage = () => {
  let { id } = useParams();
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [currentVal, setCurrentVal] = useState(0);
  const [changingCurrency, setChangingCurrency] = useState("BTC");

  const navigate = useNavigate();
  const [Data, setData] = useState({});

  const cards = [
    {
      title: "Bored Ape 1",
      image: "temp.jpg",
      category: "Art",
      nodeHashVal: "1",
      Owner: "Kapil",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
    },
    {
      title: "Bored Ape 2",
      image: "temp.jpg",
      category: "Sports",
      nodeHashVal: "2",
      Owner: "Nikhil",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
    },
    {
      title: "Bored Ape 3",
      image: "temp.jpg",
      category: "Music",
      nodeHashVal: "3",
      Owner: "Saurabh",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
    },
    {
      title: "Bored Ape 3",
      image: "temp.jpg",
      category: "Trading",
      nodeHashVal: "4",
      Owner: "Vivek",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
    },
    {
      title: "Bored Ape 4",
      image: "temp.jpg",
      category: "Art",
      nodeHashVal: "5",
      Owner: "Ritik",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
    },
  ];

  useState(() => {
    console.log(id);
    cards.forEach((element) => {
      if (element.nodeHashVal == id) {
        setData({
          title: element.title,
          Owner: element.Owner,
          ActiveHighestBid: element.ActiveHighestBid,
          HighestBidder: element.HighestBidder,
          image: element.image,
        });
      }
    });

    if (Data === {}) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Container>
        <Image>
          <img src={Data?.image} alt="" />
        </Image>
        <Info>
          <div className="data">
            <div>Title : {Data?.title}</div>
            <div>Owner : {Data?.Owner}</div>
            <div>Active Highest Bid : {Data?.ActiveHighestBid}</div>
            <div>Highest Bidder : {Data?.HighestBidder}</div>
          </div>
          <div className="bidding">
            <div>
              <input
                type="number"
                value={currentVal}
                onChange={(e) => {
                  setCurrentVal(e.target.value);
                }}
              />
              <select value={changingCurrency}>
                {currencies.map((currency) => {
                  return <option value={currency}>{currency}</option>;
                })}
              </select>
            </div>
          </div>
        </Info>
      </Container>
    </>
  );
};

export default BuyerNftPage;
const Container = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  padding-left: 10rem;
  display: flex;
  gap: 5rem;
  padding-top: 10rem;
`;
const Image = styled.div`
  width: 20%;
  height: 30rem;
  border-radius: 3rem;
  box-shadow: 0.5rem 0.5rem 1rem 0.3rem gray;
  transition: transform 0.3s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 3rem;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0.5rem 0.5rem 1.3rem 0.3rem gray;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 2rem;
  color: gray;
`;
