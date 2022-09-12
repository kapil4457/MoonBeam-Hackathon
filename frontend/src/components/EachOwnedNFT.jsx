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
  const [HighestBid, setHighestBid] = useState("0");
  const navigate = useNavigate();
  const [Data, setData] = useState({});
  const [ChartData, SetChartData] = useState([]);

  const cards = [
    {
      title: "Bored Ape 1",
      image: "temp.jpg",
      category: "Art",
      nodeHashVal: "1",
      BoughtFor: "11",
      graph: [33, 53, 12, 90, 200, 190],
    },
    {
      title: "Bored Ape 2",
      image: "temp.jpg",
      category: "Sports",
      nodeHashVal: "2",
      BoughtFor: "11",
      graph: [33, 53, 12, 90, 200, 190],
    },
    {
      title: "Bored Ape 3",
      image: "temp.jpg",
      category: "Music",
      nodeHashVal: "3",
      BoughtFor: "11",
      graph: [33, 53, 12, 90, 200, 190],
    },
    {
      title: "Bored Ape 3",
      image: "temp.jpg",
      category: "Trading",
      nodeHashVal: "4",
      BoughtFor: "11",
      graph: [33, 53, 12, 90, 200, 190],
    },
    {
      title: "Bored Ape 4",
      image: "temp.jpg",
      category: "Art",
      nodeHashVal: "5",
      BoughtFor: "11",
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
        element.graph.forEach((price) => {
          if (price > HighestBid) {
            setHighestBid(price);
          }
        });
        setData({
          title: element.title,
          BoughtFor: element.BoughtFor,
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
        <Photo>
          <img src={Data?.image} alt="" />
        </Photo>
        <Info>
          <div className="data">
            <div>Title : {Data?.title}</div>
            <div>Bought For : {Data?.BoughtFor} Eth</div>
            <div>Active Highest Bid : {HighestBid} Eth</div>
          </div>
          <div className="bidding">
            <button>Sell</button>
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
const Photo = styled.div`
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
    padding: 3rem;

    button {
      width: 20rem;
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
  text-shadow: 0.1rem 0.1rem 0.5rem rgba(155, 255, 138);
`;
const PriceHistory = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
