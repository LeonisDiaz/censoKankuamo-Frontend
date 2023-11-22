import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BarraNavegadora(){
    const navigate = useNavigate();
    const t=localStorage.getItem("jwt-token")

    function handleLogout() {
        localStorage.clear();
        navigate("/login");
      }


    if(!t){
        return(
        <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/registro">Registro</Nav.Link>
            <Nav.Link href="/consult">Consultar</Nav.Link>
          </Nav>
          <Nav className="">
           <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">singup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>);
    } else{
        return(
        <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/registro">Registro</Nav.Link>
            <Nav.Link href="/consult">Consultar</Nav.Link>
            
          </Nav>
          <Nav className="">
            <Nav.Link href="" onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>);
    }
}