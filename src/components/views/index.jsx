import styled from "styled-components";

const ContenedorPrincipal = styled.div`
 
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;

  :hover{
    transform: scale(1.1);
  background-color: #1256b7;
  }
`;

const Card = styled.div`
   background-color: #1f2937;
   color: #ddd;
  margin: auto;
  height: 150px;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  padding-top: 40px;
  border-radius: 10px;

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

function Views() {
    return ( <div className="lista">
    <Titulo>Destacados</Titulo>

    <ContenedorPrincipal>
      <Card>
        <div className="titulo">Cuídate de las estafas...</div>
        <div className="texto">Los ciberdelincuentes pueden...</div>
      </Card>

      <Card>
        <div className="titulo">Hacete cliente Tech...</div>
        <div className="texto">
          Tenes un 50% de ahorro en tu primera compra...
        </div>
      </Card>

      <Card>
        <div className="titulo">
          Tenemos una cobertura para cada momento...
        </div>
        <div className="texto">
          Conocé todas las coberturas a las qué podés acceder...
        </div>
      </Card>

      <Card>
        <div className="titulo">Cambiá tu sueldo a TechBank...</div>
        <div className="texto">¡Te damos un beneficio de bienvenida!...</div>
      </Card> 
      </ContenedorPrincipal>
  </div> );
}

export default Views;





