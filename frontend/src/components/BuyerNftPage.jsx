import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Title,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJs.register(
  Title,
  LineElement,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip
);

const BuyerNftPage = () => {
  let { id } = useParams();
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [currentVal, setCurrentVal] = useState(0);
  const [changingCurrency, setChangingCurrency] = useState("BTC");

  const navigate = useNavigate();
  const [Data, setData] = useState({});
  const [ChartData, SetChartData] = useState([]);

  const cards = [
    {
      title: "Bored Ape 1",
      image: "temp.jpg",
      category: "Art",
      nodeHashVal: "1",
      Owner: "Kapil",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
      graph: [33, 53, 12, 90, 200, 190],
    },
    {
      title: "Bored Ape 2",
      image: "temp.jpg",
      category: "Sports",
      nodeHashVal: "2",
      Owner: "Nikhil",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
      graph: [33, 53, 12, 90, 200, 190],
    },
    {
      title: "Bored Ape 3",
      image: "temp.jpg",
      category: "Music",
      nodeHashVal: "3",
      Owner: "Saurabh",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
      graph: [33, 53, 12, 90, 200, 190],
    },
    {
      title: "Bored Ape 3",
      image: "temp.jpg",
      category: "Trading",
      nodeHashVal: "4",
      Owner: "Vivek",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
      graph: [33, 53, 12, 90, 200, 190],
    },
    {
      title: "Bored Ape 4",
      image: "temp.jpg",
      category: "Art",
      nodeHashVal: "5",
      Owner: "Ritik",
      ActiveHighestBid: "22",
      HighestBidder: "Bappi Lehri",
      graph: [33, 53, 12, 90, 200, 190],
    },
  ];
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Price Graph",
        data: ChartData,
        borderColor: "red",
        backgroundColor: "yellow",
        borderJointStyle: "bevel",
        showLine: true,
        tension: 0.6,
        fill: true,
        pointBackgroundColor: "#fff",
        pointBorderColor: "blue",
        pointStyle: "rect",
      },
    ],
  };

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
        SetChartData(element.graph);
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
              <select
                value={changingCurrency}
                onChange={(e) => setChangingCurrency(e.target.value)}
              >
                {currencies.map((currency) => {
                  return <option value={currency}>{currency}</option>;
                })}
              </select>
            </div>
            <div>
              <button>Bid</button>
            </div>
          </div>
        </Info>
      </Container>
      <PriceHistory>
        <Heading>Price History</Heading>
        <div className="graph">
          <Line data={data} />
        </div>
      </PriceHistory>
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
  margin-bottom: 7rem;
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
  .data {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .bidding {
    display: flex;
    padding: 1rem 0;
    gap: 3rem;
    div {
      display: flex;
      padding: 1rem 0;
      gap: 1rem;
    }
    input {
      width: 8rem;
      height: 2rem;
      outline: none;
      border: none;
      border-bottom: 1px solid gray;
      font-size: 1.3rem;
    }

    select {
      width: 30%;
      cursor: pointer;
      border: none;
      color: gray;
      outline: none;
      font-size: 1.3rem;
    }
    button {
      width: 8rem;
      height: 3rem;
      border: none;
      outline: none;
      background-color: rgba(155, 255, 138);
      border-radius: 5px;
      font-size: 1.3rem;
      font-weight: bold;
      box-shadow: 0.1pc 0.1pc 0.4pc 0.1pc gray;
      cursor: pointer;
    }
  }
`;
const Heading = styled.div`
  font-size: 3rem;
  text-decoration: underline;
  text-shadow: 0.1rem 0.1rem 0.25rem rgba(155, 255, 138, 0.7);
  color: rgba(255, 0, 0, 0.7);
`;
const PriceHistory = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
