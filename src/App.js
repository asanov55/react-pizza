import './App.css';
import React from 'react'; 
import { useState } from 'react';

function App() {
 
  const [number, setNumber] = useState(0)

  function add (){
    setNumber(number + 1)
  };

  function remove (){
    if(number == 0){
      alert("Больше нельзя минусовать")
    }else{
      setNumber(number - 1)
    }
  };
 
  return (
    
    <div>
      <h1>Ваша цифра: {number}</h1>
      <button onClick={add}>Добавить</button>
      <button onClick={remove}>Удалить</button>
  
    </div>

    
  );
}

export default App;
