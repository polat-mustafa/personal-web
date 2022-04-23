import React from 'react'
import { Container , Navbar} from 'react-bootstrap'
import 'react-bootstrap'
import '../App.css'

import Font from 'react-font'

const Header = () => {


  return (
    
 
  <Navbar variant="dark" collapseOnSelect>
    <Container className='navs'>
    <Navbar.Brand href="/"> <Font family='Ms Madi' className='logo'>Mustafa <span style={{color: 'darkslategray'}}>Polat</span></Font></Navbar.Brand>
    </Container>
  </Navbar>

    
  )
}

export default Header