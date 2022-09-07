import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CreateNFT = () => {
  const [img, setImg] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  const reset = () => {
    setImg();
  };
  useEffect(() => {}, img);
  return (
    <Container>
      <Heading>Create Your NFT</Heading>
      <Main>
        <Image>
          {img == null ? (
            <div>
              <input type="file" onChange={onImageChange} />
            </div>
          ) : (
            <>
              <img src={img} alt="" />
              <button onClick={reset}>Change Image</button>
            </>
          )}
        </Image>
        <Info>
          <input type="text" placeholder="Name of NFT" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Price in Eth" />
          <button>Create</button>
        </Info>
      </Main>
    </Container>
  );
};

export default CreateNFT;
const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  flex-direction: column;
`;
const Heading = styled.div`
  padding-top: 2rem;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 3rem;
  font-weight: 550;
  text-decoration: underline;
  text-shadow: 2px 5px 6px gray;
`;
const Main = styled.div`
  display: flex;
  height: 80%;
  display: flex;
  // justify-content: center;
  align-items: center;
  padding: 0 20rem;
  gap: 8rem;
`;
const Image = styled.div`
  width: 35%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  box-shadow: 2px 2px 9px 2px gray;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 9rem;
    border-radius: 2rem;
  }
  button {
    height: 15%;
    margin: 1.5rem;
    width: 40%;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 80%;
    border-bottom: 1px solid gray;
    border-radius: 2rem 2rem 0 0;
  }
  input {
    display: block;
    color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    border: 0px solid black;
    outline: none;
    width: 100%;
  }
`;
const Info = styled.div``;
