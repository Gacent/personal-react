import React,{useState,useEffect}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

const Count=()=>{
  const [name,setName]=useState(10)
  useEffect(()=>{
    console.log('更新le ')
  })
  return (
    <div>
      <button onClick={()=>setName(name-1)}>-</button>
      <span>{name}</span>
      <button onClick={()=>setName(name+1)}>+</button>
    </div>
  )
}

ReactDOM.render(<Count />, document.getElementById('root'));