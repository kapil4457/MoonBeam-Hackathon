import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CreateNFT = () => {
  const [img, setImg] = useState();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setEth] = useState(1);
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  const reset = () => {
    setImg();
  };
  const submitHandler = () => {
    if (price <= 0) {
      console.log("Price can not be less than or equal to 0");
      return;
    }
    if (img == null) {
      console.log("Please Select an Image to upload");
      return;
    }
    if (name == "") {
      console.log("Please Enter a Name for the NFT");
      return;
    }
    if (desc == "") {
      console.log("Please Enter a Description for the NFT");
      return;
    }

    console.log([img, name, desc, price]);
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
          <input
            type="text"
            value={name}
            placeholder="Name of NFT"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            value={desc}
            placeholder="Description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <input
            value={price}
            type="number"
            placeholder="Price in Eth"
            onChange={(e) => {
              setEth(e.target.value);
            }}
          />
          <button onClick={submitHandler}>Create</button>
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
  background-color: white;
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
    border-radius: 0.5rem;
    background-color: white;
    border: 1px solid gray;
    font-size: 1.1rem;
    box-shadow: 1px 1px 8px 1px gray;
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
const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 45%;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    font-size: 1.5rem;
    width: 100%;
    height: 3rem;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
  }

  button {
    width: 60%;
    height: 3rem;
    border: none;
    outline: none;
    background-color: rgba(155, 255, 138);
    border-radius: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 2px 2px 10px 1px gray;
  }
`;
