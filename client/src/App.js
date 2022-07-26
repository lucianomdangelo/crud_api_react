import React, {useEffect} from 'react';
import './App.css';
import {getUsers} from './services/users';

function App() {
  
  useEffect( ()=>{
    async function fetchData(){
      const users = await getUsers();
      console.log(users);
    }
    fetchData();
  },[]);


  return (
    <div className="App">
      <span>hello world</span>
    </div>
  );
}

export default App;
