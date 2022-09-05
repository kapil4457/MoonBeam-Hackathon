import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Container>
      <Logo>
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
      <Account>
        <Profile>
          <img src="account.png" alt="" />
        </Profile>
        <Wallet>
          <img src="wallet.png" alt="" />
        </Wallet>
      </Account>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  height: 6rem;
  gap: 2rem;
  box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
const Logo = styled.div`
  padding-left: 2rem;
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
  width: 30%;
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
    background-color: rgba(218, 209, 209, 0.8);
    border-radius: 1rem;
    border: 0;
    outline: 0;
  }
  img {
    position: absolute;
    background-color: rgba(218, 209, 209);
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
    padding-top: 2rem;
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }
`;
const Account = styled.div`
  width: 15%;
  margin-right: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
`;

const Profile = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 0.4rem 0.2rem gray;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 100%;
  }
  cursor: pointer;
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
