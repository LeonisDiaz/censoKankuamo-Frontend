//import { Container, Nav, Navbar } from "react-bootstrap";
import BarraNavegadora from "../components/BarraNavegadora";
//import {auth} from "../config/firebase.config";

export default function Page(){
    return(<>
        
        <BarraNavegadora/>
        <div className="Inicio">
          <div className="Info-Inicio">
            <h1>Censo Kankuamo</h1>
            <p>
              Un sitio web que da la posibilidad en la que se pueda realizar el proceso censal desde 
              casa necesitando nada más que un medio para entrar a la página web y su respectiva 
              conexión a internet, sin tener que moverse una distancia posiblemente larga 
              dependiendo de los lugares en los que se encuentren y sin tener que esperar 
              demasiado tiempo a que la información sea añadida o actualizada en el archivo Excel, 
              este sitio web realizaría de forma automática el registro y control de la información dada 
              por los kankuamos y las actualizaciones de información de los núcleos familiares, lo 
              cual sería guardada en una base de datos y daría un fácil acceso a la hora de realizar 
              los cálculos estadísticos de una población general o específica geográficamente. 
              </p>
            </div>     
          </div>
      
    </>)
}