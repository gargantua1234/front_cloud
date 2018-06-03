import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  margin-top: 150px;
`;

const Div = styled.div`
  margin-left: 0px;
  margin-top: 0px;
`;

const Home = (props) => {
  return (
    <section>
      <Div>
         <Title>Start creating animation</Title>
      </Div>
    </section>
  );
};

export default Home;