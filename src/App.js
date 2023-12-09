import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const ContenedorPrincipal = styled.div`
 
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;
  flex-wrap: wrap;
  width: 700px;

  :hover{
    transform: scale(1.1);
  background-color: #1256b7;
  }
`;

const Card = styled.div`
   background-color: #1f2937;
   color: #ddd;
  margin: 15px;
  height: 150px;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  padding-top: 40px;
  border-radius: 10px;
  width: 160px;

a{
  color: white;
  text-decoration: none;
}
`;

const Titulo = styled.h2`
padding-top: 10px;
margin-top: 20px;/*Sacar*/ 
height: 50px;
justify-content: center;
  background-color: #1f2937;
    color: white;
    text-align: center;
`;

function App() {
  return (
 <div className="lista">
        <Titulo>Elija una Operación:</Titulo>
    
        <ContenedorPrincipal>
          <Card>
            <div className="titulo"> 
           <a href=''>VER MIS DATOS</a></div>
          </Card>
    
          <Card>
            <div className="titulo"><a href=''>VER SALDO EN MI CUENTA</a></div>
          </Card>
    
          <Card>
            <div className="titulo"><a href=''>VER MONTO DE PRESTAMOS PARA CLIENTES</a></div>
          </Card>
    
          <Card>
            <div className="titulo"><a href=''>VER MONTO DE PRESTAMOS EN UNA SUCURSAL</a></div>
          </Card>

          <Card>
            <div className="titulo"><a href=''>VER TARJETAS ASOCIADAS A UN CLIENTE</a></div>
          </Card> 

          <Card>
            <div className="titulo"><a href=''>GENERAR SOLICITUD DE PRÉSTAMOS (CLIENTES)</a></div>
          </Card> 
          <Card>
            <div className="titulo"><a href=''>ANULAR SOLICITUD DE PRESTAMO DE CLIENTE</a></div>
          </Card> 

          <Card>
            <div className="titulo"><a href=''>MODIFICAR DIRECCION DE UN CLIENTE</a></div>
          </Card> 

          <Card>
            <div className="titulo"><a href=''>VER TODAS LAS SUCURSALES</a></div>
          </Card> 

          </ContenedorPrincipal>
      </div> );
    }

export default App;
