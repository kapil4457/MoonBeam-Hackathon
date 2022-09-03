import React from "react";
import styled from "styled-components";
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
      <Menu>menu</Menu>
      <Account>account</Account>
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
  box-shadow: 3px 3px 3px 4px rgba(0, 0, 0);
  overflow-y: hidden;
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
  width: 33%;
  border: 2px solid black;
`;
const Account = styled.div`
  width: 15%;
  margin-right: 2rem;
  border: 2px solid black;
`;
