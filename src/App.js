import './App.css';
import Register from'./components/Register/Register'
import Showdata from './components/ShowData/ShowData';
import { useState, useEffect } from 'react';

function App() {

  const [ editItem ,setEditItem] = useState(null);
  const [ list ,setList] = useState([]);
  const [ loading ,setLoading] = useState(true);

  const onEdit = (item) =>{
    setEditItem(item)
    console.log(item)
  }

  const getUserData = async () => {
    setLoading(true)
    try {
      const res = await fetch("http://localhost:4000/find", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  },[]);


  return (
    <>
    <Register editItem={editItem} clear={()=>setEditItem(null)} refresh={getUserData} />
    {
      loading ? <p>Loading .....:)</p>:<Showdata list={list} onEdit={onEdit} refresh={getUserData}/>
    }
    </>
  );
  }

export default App;
