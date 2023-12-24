import React from "react"
import { NavLink, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap"

const Header = () => {
  return (
    <header className="header-font">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Kalnia&family=Roboto&display=swap');
      </style>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/">cat tinder</NavbarBrand>
      <Nav justified>
        <NavItem>
          <NavLink href="/catindex">List of Cats</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/catnew">Add a Cat</NavLink>
        </NavItem>
      </Nav>
      </Navbar>
    </header>
  )
}

export default Header