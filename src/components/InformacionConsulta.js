import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { ToastContainer} from "react-toastify";

export default function InformacionConsulta({infoPersona}){

    if(!infoPersona){
        return;
    }else{
        return(
        <>
        <Row className="justify-content-md-center pt-4">
            <ToastContainer/>
            <Col lg={4} md={4}>
                <h2>Consulta</h2>
                  <Row className="mb-3">

                      <Form.Group as={Col} controlId="formGridDid">
                      <Form.Label>Documento de identidad</Form.Label>
                      <Form.Control value={infoPersona.documentId} readOnly></Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridNumId">
                      <Form.Label>N° de Documento</Form.Label>
                      <Form.Control value={infoPersona.id} name="id" type="text" readOnly />
                      </Form.Group>
                  </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control value={infoPersona.nombre} name="name" type="text" readOnly />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastname">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control value={infoPersona.apellido} name="lastname" type="text" readOnly />
                  </Form.Group>
                </Row>
    
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridGender">
                  <Form.Label>Genero</Form.Label>
                  <Form.Control value={infoPersona.gender} defaultValue="" readOnly></Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCivilState">
                  <Form.Label>Estado civil</Form.Label>
                  <Form.Control value={infoPersona.civilState} defaultValue="" readOnly></Form.Control>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridDate">
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control value={infoPersona.birthDate} type="date" readOnly> 
                    </Form.Control>
                  </Form.Group>

                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={infoPersona.email} type="text" placeholder="" readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPhone">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control value={infoPersona.phone} type="text" placeholder="" readOnly />
                </Form.Group>

            </Col>
          </Row>
      </>
        );
    }

}