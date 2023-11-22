import React from "react";
import axios from "axios";
import {useState} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import BarraNavegadora from "../components/BarraNavegadora";
import InformacionConsulta from "../components/InformacionConsulta"

export default function Consult(){
    //const navigate = useNavigate();
    const [id, setId] = useState("");
    const [persona, setPersona] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault();
        //let credentials = { id };
        try {
          const res = await axios.get(`http://localhost:3000/api/v1/registration/search-registration/${id}`);
          setPersona(res.data.data);
          console.log("INFO");
          console.log(persona);
        } catch (error) {
          toast.error("Falló: " + error.message);
        }
      };

    return(
        <>
           <BarraNavegadora/>


              <Row className="justify-content-md-center pt-5">
                  <ToastContainer />
                  <Col lg={3} md={3}>
                  <Form onSubmit={handleSubmit}>
                      <h2>Consulta</h2>
                      <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridNumId">
                          <Form.Label>Numero de Documento</Form.Label>
                          <Form.Control value={id} name="id" type="text" placeholder="xxxxxxxxx" onChange={(e) => setId(e.target.value)} />
                          </Form.Group>
                      </Row>
                      <Button variant="primary" type="submit">
                      Consultar
                      </Button>
                  </Form>
                  </Col>
              </Row>
            <InformacionConsulta infoPersona={persona}/>
        </>
    );
}