import React from "react";
import styled, { keyframes } from "styled-components";
import {Link} from "react-router-dom";



const Div = styled.div`
  margin-top: 0px;
`;

const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  
  border: solid 1px white;
  padding: 10px 30px;
  color: white;
  text-decoration: none;
  margin-right: 5px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: "Roboto", sansa-serif;
  &:hover {
    background-color: grey;
  }
`;

const shake = keyframes`
10%, 90% {
  transform: translate3d(-1px, 0, 0);
}
20%, 80% {
  transform: translate3d(2px, 0, 0);
}
30%, 50%, 70% {
  transform: translate3d(-4px, 0, 0);
}
40%, 60% {
  transform: translate3d(4px, 0, 0);
}
`;

const Title = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  margin-top: 150px;
  animation: ${shake} 2s cubic-bezier(.36,.07,.19,.97) both;
  animation-iteration-count: infinite;
`;

const Shake = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const Home = (props) => {
  return (
    <section>
      <Div>
        <Shake>
          <Title>Start creating animation</Title>
        </Shake>
        <Buttons>
            <Button to="/form">ADD PHOTO</Button>
            <Button to="/added_files">SHOW</Button>
        </Buttons>
      </Div>
    </section>
  );
};

export default Home;