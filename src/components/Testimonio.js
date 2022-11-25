import React from 'react';
import '../styles/Testimonio.css'

//exportacion por nombre
//export function Testimonio(

class Testimonio extends React.Component{
  render(){
    return (
      <div className='container-testimonio'>
        <img className='img-testimonio' 
          src={require(`../img/testimonio-${this.props.imagen}.png`)} 
          alt= {`Foto de ${this.props.nombre}`}
        />
        <div className='container-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{this.props.nombre}</strong> in {this.props.pais}</p>
          <p className='puesto-testimonio'>{this.props.puesto} at <strong>{this.props.empresa}</strong></p>
          <p className='texto-testimonio'>"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}
/*
function Testimonio(props){

  return (
    <div className='container-testimonio'>
      <img className='img-testimonio' 
        src={require(`../img/testimonio-${props.imagen}.png`)} 
        alt='Foto de Emma'
      />
      <div className='container-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className='puesto-testimonio'>{props.puesto} at <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}//fin Componente funcional
*/
export default Testimonio;