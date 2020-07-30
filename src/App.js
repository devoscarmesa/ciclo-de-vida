import React, { Component } from 'react'
import CicloDeVida from './components/CicloDeVida'
import './App.css';

export default class App extends Component {
	constructor(props){
  	super(props)
    this.state = {desmontar_ciclo:false} 
  }
  
  desmontarComponente = () => this.setState({desmontar_ciclo:true})
  render() {
    let ComponeteCicloDeVida = !this.state.desmontar_ciclo?<CicloDeVida/>:null
    return (
      <>
        {ComponeteCicloDeVida}
        <button onClick={this.desmontarComponente}>Desmontar componente</button>
      </>
    )
  }
}