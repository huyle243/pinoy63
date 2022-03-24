import React, { Component } from 'react'
import {Navbar, Container } from 'react-bootstrap'
import './Navi.css'

export default class Navigator extends Component {
  render() {
    return (
      <div>

<Navbar  variant="flat">
    <Container>
    <Navbar.Brand  href="#home"><h4 style={{color: "white"}}>Peso63</h4></Navbar.Brand>
    
    </Container>
  </Navbar>
      </div>
    )
  }
}
