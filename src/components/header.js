import React from 'react'
import Link from 'gatsby-link'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const Header  = (props) => (
    <Navbar color="light" light expand="md">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <NavbarBrand>{props.siteTitle}</NavbarBrand>
      <div className="collapse navbar-collapse" id="navbarNav">
        <Nav />              
        <Nav>
          <NavItem><NavLink href="#About">About</NavLink></NavItem>
          <NavItem><NavLink href="#Services">Services</NavLink></NavItem>
          <NavItem><NavLink href="#Gallery">Gallery</NavLink></NavItem>
          <NavItem><NavLink href="#Contact">Contact</NavLink></NavItem>
        </Nav>
      </div>
    </Navbar>
)

export default Header


{/* <nav className="navbar fixed-top navbar-toggleable-md navbar-custom bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <h1 className="navbar-brand" href="#">{props.siteTitle}</h1>
      <div className="collapse navbar-collapse" id="navbarNav">              
        <ul className="navbar-nav mr-auto">             </ul>
        <ul className="navbar-nav mt-2 mt-md-0">
          <li className="nav-item"><a className="nav-link" href="#About">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#Services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#Gallery">Gallery</a></li>
          <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
        </ul>
      </div>
    </nav> */}