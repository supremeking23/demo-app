import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
     person : [
       {name : "Ivan" , age : 24},
       {name : "Donya" , age : 29},
       {name : "Mavis" , age : 24},
     ]
  }
  render(){
    return(
      <div className="App">
        <h1>Ivan Christan Jay </h1>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />

        </div>
    )
  }
}

export default App;
