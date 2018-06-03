import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Row = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Container = styled.div`
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`; 

const Ul = styled.ul`
 float: right;
 list-style: none;
 margin-top: 30px;
`;

const Li = styled.li`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px 20px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  &:hover {
    text-decoration: none;
    color: grey
  }
`;

const Header = () =>{
  return(
    <header>
      <Row>
        <Container>
        <Ul>
          <Li>
            <StyledLink to="/">HOME</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/form" >UPLOAD PHOTO</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/added_files">ADDED PHOTOS</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/about">ABOUT</StyledLink>
          </Li>
        </Ul>
        </Container>
      </Row>
    </header>
  );
}

export default Header;