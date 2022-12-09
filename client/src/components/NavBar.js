import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { RiInstagramFill } from "react-icons/ri"


function NavBar({ user, setUser, searchChange }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <div className="socials">
        <RiInstagramFill style={{ color: '#F94223', fontSize: '35px' }} /><RiInstagramFill style={{ color: '#F94223', fontSize: '35px' }} /><RiInstagramFill style={{ color: '#F94223', fontSize: '35px' }} />
      </div>
      <Logo>
      {/* <RiInstagramFill style={{ color: '#F94223', fontSize: '35px' }} /><RiInstagramFill style={{ color: '#F94223', fontSize: '35px' }} /><RiInstagramFill style={{ color: '#F94223', fontSize: '35px' }} /> */}
        <Link to="/">Ratatouille</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Recipe
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  padding: 8px;

`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 4rem;
  color:  #F94223;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 20px;
`;

export default NavBar;
