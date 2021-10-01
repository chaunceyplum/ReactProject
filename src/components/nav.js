import React, {useState} from 'react';
import { Nav, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, Navbar, Button, ModalHeader, ModalBody, Modal, ModalFooter} from 'reactstrap';



const Mynav = (props) => {
    
    const [isOpen, setOpen] = useState(false);
    
    const toggle = () => setOpen(!isOpen);


    const [show,setShow] = useState(false)

    const showing = () =>setShow(false)
    const closing = () =>setShow(true)

    const modal = () => {
        return (
            <div>
                <Modal
                show={show}
                onHide={closing}
                >
                    <ModalHeader>
                        <strong>
                            Register
                        </strong>
                    </ModalHeader>
                    <ModalBody>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button>
                            Cancel
                        </Button>
                        <Button>
                            Save Changes
                        </Button>

                    </ModalFooter>

                </Modal>
            </div>
        )
    }
    
    return (
        <div >
            <Navbar color="dark" dark expand="md" variant="light">
                <NavbarBrand className="nav-brand text-light" href="/home">
                    <h1>
                        Classy Cutz
                    </h1>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar  className="justify-content-end">
                    <Nav className="ml-auto " bsStyle="pills" navbar>
                        <NavItem className="nav-link">
                            <NavLink href="/home"> Home</NavLink>
                        </NavItem>
                        
                        <NavItem className="nav-link">
                            <NavLink href="/contactus">  Contact Us</NavLink>
                        </NavItem>

                        <NavItem className="nav-link">
                            <NavLink href="/portfolio">  Portfolio</NavLink>
                        </NavItem>
                    </Nav>
                    
                </Collapse>
                <Button className = " " onClick={modal} >
                        login
                </Button>
            </Navbar>
        </div>
    )
}

export default Mynav
