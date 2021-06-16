import React, { Component } from 'react';
import {createStore} from "redux";
import logo from './logo.svg';
import './App.css';

// function Welcome (props) {
//   return <h1>Bienvenides a {props.title}</h1>
// }

class Welcome extends Component {
  render () {
    return <h1>Bienvenides a {this.props.title}</h1>
  }
}

// class Text extends Component {
//   render () {
//     return <p>{this.props.text} {this.props.number}</p>
//   }
// }

// class Counter extends Component {
//   // constructor () {
//   //   super()
//   //   this.state = { counter: 1 }
//   // }
//   state = { counter: 0 }
//   render () {
//     return <span>{this.state.counter}</span>
//   }
// }

// LISTENERS SOBRE LOS BOTONES
const counter = document.querySelector("#counter")
const plus = document.querySelector("#oneMore")
const minus = document.querySelector("#oneLess")


// ESTADO INICIAL DEL CONTADOR A 0
const INITIAL_STATE = {
    counter: 0
  }

// REDUCER QUE RECIBE ESTADO INICIAL Y ACCIÓN
function counterApp (state = INITIAL_STATE, action) {
    console.log(state, action)
  switch(action.type){
    case "INCREMENT":
      return {
        counter: state.counter + 1
      }
    case "DECREMENT":
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}

// INICIALIZAMOS STORE
const store = createStore(counterApp)

// MÉTODO SUBSCRIBE DE LA STORE
// recibe por parametro funcion que se ejecutará cada vez que reciba un nuevo state
store.subscribe(()=>{
  const state = store.getState() // devuelve el state actual global
  console.log("STATE CAMBIADO: ", state)
  counter.innerHTML = state.counter
})

// FUNCIONALIDAD QUE ESCUCHA CLICK EN LOS BOTONES
// Y LANZA LA NUEVA ACCIÓN
plus.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" })
})
minus.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" })
})

function App() {
  return null
  /* (
    <div className="App">
      <header className="App-header">
        < Welcome title = "React" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  ); */
}

export default App;
