import React, {Component} from 'react';

export default class CicloDeVida extends Component { 
  constructor(props){ 
      super(props); 
      this.state = { hola : "Mundo!" }; 
  } 

  componentWillMount(){ 
      console.log("Se ejecuto método componentWillMount()"); 
      debugger;
  } 

  componentDidMount(){ 
      console.log("Se ejecuto método componentDidMount()"); 
  } 

  cambiarMensaje = () => this.setState({ hola : "Media Técnica!" }); 
  
  render(){ 
      return ( 
          <div> 
            <h1>Ciclo de Vide de un Componete, hola{ this.state.hola }</h1> 
            <h2><button onClick={this.cambiarMensaje}>Clic Aquí!</button></h2> 
          </div>); 
  } 

  shouldComponentUpdate(nextProps, nextState){ 
      console.log("Se ejecuto método shouldComponentUpdate()"); 
      return true; 
  } 

  componentWillUpdate(){ 
      console.log("Se ejecuto método componentWillUpdate()"); 
  } 

  componentDidUpdate(){ 
      console.log("Se ejecuto método componentDidUpdate()"); 
  } 
} 