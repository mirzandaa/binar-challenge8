import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar} from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { ButtonNav } from './Button'

export class NavigationBar extends Component {
    
    state = {
        titleCreate: "Create Player",
        titleEdit: "Edit Player",
        titleSearch: "Search Player"
    }

    
 

  render() {
    return (
      <Navbar bg='myBack' variant='dark' sticky='top' expand="lg" className='navbar'>
        <Navbar.Brand className='navbar-logo'>
            <h2>LOGO</h2>
        </Navbar.Brand>
        <NavbarToggle />
            <NavbarCollapse>
                <Nav className='nav-link'>
                    <ButtonNav buttonTitle={this.state.titleCreate} />
                    <ButtonNav buttonTitle={this.state.titleSearch}/>
                </Nav>
            </NavbarCollapse>
      </Navbar>
    )
  }
}

export default NavigationBar