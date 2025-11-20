import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

// import logo from '../../assets/uw-crest.svg'

export default function Navigationbar(props) {
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/missions">Missions</Nav.Link>
                    <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}