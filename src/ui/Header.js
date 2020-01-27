import React from "react";
import { NavLink } from "react-router-dom";
import { UnderlineNav } from "@primer/components";

const Header = props => (
  <UnderlineNav aria-label="Main">
    <UnderlineNav.Link as={NavLink} to="/" exact>
      Home
    </UnderlineNav.Link>
    <UnderlineNav.Link as={NavLink} to="/products">
      Products
    </UnderlineNav.Link>
  </UnderlineNav>
);

export default Header;
