import React, {useState} from 'react';
import { Nav, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, Navbar} from 'reactstrap';



const Mynav = (props) => {
    
    const [isOpen, setOpen] = useState(false);
    
    const toggle = () => setOpen(!isOpen);
    return (
        <div >
            <Navbar color="dark" dark expand="md" variant="light">
                <NavbarBrand className="nav-brand text-light" href="/home">
                    <h1>
                        Classy Cutz
                    </h1>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar >
                    <Nav className="mr-auto" bsStyle="pills" navbar>
                        <NavItem className="nav-link">
                            <NavLink href="/home">  Home</NavLink>
                        </NavItem>
                        
                        <NavItem className="nav-link">
                            <NavLink href="/contactus">  Contact Us</NavLink>
                        </NavItem>

                        <NavItem className="nav-link">
                            <NavLink href="/booking">  Booking</NavLink>
                        </NavItem>

                        <NavItem className="nav-link">
                            <NavLink href="/portfolio">  Portfolio</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Mynav
