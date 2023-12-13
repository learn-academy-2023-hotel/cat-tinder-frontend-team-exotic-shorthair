import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <Nav justified>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catindex">List of Cats</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew">Add a Cat</NavLink>
        </NavItem>
      </Nav>
    </header>
  )
}

export default Header