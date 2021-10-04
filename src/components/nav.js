import React, {useState} from 'react';
import { Nav, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, Navbar, Button, ModalHeader, ModalBody, Modal, ModalFooter, Container} from 'reactstrap';
import ModalComponent from './modal';



const Mynav = (props) => {
    
    const [isOpen, setOpen] = useState(false);
    
    const toggle = () => setOpen(!isOpen);


    

    
    
    return (
        <div >
            <Container >
            <Navbar fixed="top" color="" dark  expand="md" variant="light">
                <NavbarBrand className="nav-brand text-light" href="/home">
                    <h1>
                        Classy Cutz
                    </h1>
                </NavbarBrand>
                {/* <Button className = "col-sm-2 col-md-1 align-right" onClick={ModalComponent} >
                        login
                </Button> */}
                <ModalComponent />
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar  className="justify-content-end">
                    <Nav className="ml-auto " bsStyle="pills" navbar>
                        <NavItem className="nav-link">
                            <NavLink className="text-white" href="/home"> Home</NavLink>
                        </NavItem>
                        
                        <NavItem className="nav-link">
                            <NavLink href="/contactus">  Contact Us</NavLink>
                        </NavItem>

                        <NavItem className="nav-link">
                            <NavLink href="/portfolio">  Portfolio</NavLink>
                        </NavItem>
                    </Nav>
                    
                </Collapse>
                {/* <Button className = " " onClick={modal} >
                        login
                </Button> */}
            </Navbar>
            </Container>
        </div>
    )
}

export default Mynav
