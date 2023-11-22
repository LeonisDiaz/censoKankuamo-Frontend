import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
//import { Container, Nav, Navbar } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import BarraNavegadora from "../components/BarraNavegadora";

export default function Registro(){
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [id, setId] = useState("");
    const [documentId, setDocumentId] = useState("");
    const [phone, setPhone] = useState("");
    const [civilState, setCivilState] = useState("");

    useEffect(() => {
      const t = localStorage.getItem("jwt-token");
      if (!t) {
        navigate("/login");
      } 
    }, [navigate]);

    const resetFields = () => {
        setNombre("");
        setEmail("");
        setApellido("");
        setBirthDate("");
        setGender("");
        setId("");
        setDocumentId("");
        setPhone("");
        setCivilState("");
      };

/*       function handleLogout() {
        localStorage.clear();
        navigate("/login");
      } */

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        let register = {id, documentId, nombre, apellido, phone, email, birthDate, gender, civilState };
        try {
          const created_user = await axios.post("http://localhost:3000/api/v1/registration/create-registration", register);
          if (created_user) {
            toast.success("Registro Finalizado!", {
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
        
          <Row className="justify-content-md-center pt-4">
            <ToastContainer/>
            <Col lg={4} md={4}>
              <Form onSubmit={handleSubmit}>
                <h2>Registro</h2>
                  <Row className="mb-3">

                      <Form.Group as={Col} controlId="formGridDid">
                      <Form.Label>Documento de identidad</Form.Label>
                      <Form.Select value={documentId} onChange={(e) => setDocumentId(e.target.value)}>
                          <option selected value="">Selecciona...</option>
                          <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                          <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                      </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridNumId">
                      <Form.Label>N° de Documento</Form.Label>
                      <Form.Control value={id} name="id" type="text" placeholder="xxxxxxxxx" onChange={(e) => setId(e.target.value)} />
                      </Form.Group>
                  </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control value={nombre} name="name" type="text" placeholder="Nombres" onChange={(e) => setNombre(e.target.value)} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastname">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control value={apellido} name="lastname" type="text" placeholder="Apellidos" onChange={(e) => setApellido(e.target.value)} />
                  </Form.Group>
                </Row>
    
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridGender">
                  <Form.Label>Genero</Form.Label>
                  <Form.Select value={gender} defaultValue="Selecciona..." onChange={(e) => setGender(e.target.value)}>
                      <option value="">Selecciona...</option>
                      <option value="femenino">Femenino</option>
                      <option value="masculino">Masculino</option>
                  </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCivilState">
                  <Form.Label>Estado civil</Form.Label>
                  <Form.Select value={civilState} defaultValue="Selecciona..." onChange={(e) => setCivilState(e.target.value)}>
                      <option value="">Selecciona...</option>
                      <option value="soltero/a">Soltero/a</option>
                      <option value="casado/a">Casado/a</option>
                      <option value="Divorsiado/a">Divorsiado/a</option>
                      <option value="Viudo/a">Viudo/a</option>
                  </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridDate">
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control value={birthDate} type="date" onChange={(e) => setBirthDate(e.target.value)}>
                    </Form.Control>
                  </Form.Group>

                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={email} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPhone">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control value={phone} type="text" placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Registrar
                </Button>
              </Form>
            </Col>
          </Row>
      </>
      );
}