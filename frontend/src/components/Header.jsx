import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  return (
    <Container>
      <Logo onClick={redirect}>
        <img src="logo.png" alt="" />
        <p>NFT Exchange</p>
      </Logo>
      <Search>
        <img src="search.svg" alt="" />
        <input type="text" placeholder="Search Items" />
        <p></p>
      </Search>
      <Menu>
        <NavLink to="/" activeClassName="active">
          Explore
        </NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/support">Support</NavLink>
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 6rem;
  gap: 2rem;
  box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
  margin-bottom: 2rem;
  justify-content: space-between;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
const Logo = styled.div`
  padding-left: 2rem;
  cursor: pointer;
  width: 20%;
  align-items: center;
  display: flex;
  img {
    width: 6rem;
    height: 6rem;
  }
  p {
    font-size: 1.4rem;
    font-family: "Qwitcher Grypen", cursive;
  }
`;
const Search = styled.div`
  position: relative;
  width: 40%;
  box-shadow: 0px 1px 3px 1px rgba(12, 12, 12, 0.5);
  border-radius: 1rem;

  input {
    font-size: 1rem;
    padding-left: 3rem;
    width: 100%;
    height: 2.5rem;
    align-items: center;
    display: flex;
    gap: 1rem;
    background-color: rgba(218, 209, 209, 0.3);
    border-radius: 1rem;
    border: 0;
    outline: 0;
  }
  img {
    position: absolute;
    background-color: transparent;
    top: 10px;
    left: 15px;
    height: 1.3rem;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 33%;
  height: 100%;
  a {
    height: 100%;
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }
`;

const Wallet = styled.div`
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
