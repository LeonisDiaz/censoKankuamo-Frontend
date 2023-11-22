import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
//import { Container, Nav, Navbar } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import BarraNavegadora from "../components/BarraNavegadora";
//import {auth} from "../config/firebase.config";
//import { getDatabase, ref, set, onValue } from "firebase/database";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const resetFields = () => {
    setPassword("");
    setUsername("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = { username, password};
    try {
      const created_user = await axios.post("http://localhost:3000/api/v1/auth/signup", user);
      if (created_user) {
        toast.success("Usuario registrado!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            resetFields();
          },
        });
      }
    } catch (error) {
      toast.error("Falló: " + error.message);
    }
  };

  return (
  <>
    <BarraNavegadora/>
    <Row className="justify-content-md-center pt-5">
        <ToastContainer  />
        <Col lg={3} md={3}>
          <Form onSubmit={handleSubmit} >
            
          <h2>Registro de Usuario</h2>
      
              <Form.Group className="mb-3" controlId="formGridUsername">
                <Form.Label>Usuario</Form.Label>
                <Form.Control value={username} name="username" type="username" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control value={password} name="password" type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
        
            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
  </>
  );
}
