import logo from './logo.svg';
import './App.css';
import Register from'./components/Register/Register'
import Showdata from './components/ShowData/ShowData';
import { useState } from 'react';

function App() {

  const [ editItem ,setEditItem] = useState(null);

  const onEdit = (item) =>{
    setEditItem(item)
    console.log(item)
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Register editItem={editItem} />
    <Showdata onEdit={onEdit} /></>
  );
}

export default App;
