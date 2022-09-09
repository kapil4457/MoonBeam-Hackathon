import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <Data>
        <Image></Image>
        <Info></Info>
      </Data>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  height: 80vh;
  width: 100%;
`;
const Heading = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Data = styled.div``;
const Image = styled.div``;
const Info = styled.div``;
