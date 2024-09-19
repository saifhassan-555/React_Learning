import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//  const [counter, setCounter] = useState(15) // this is hook use for UI control in React
  
  //let counter = 15

  // const addValue = () => {
  // //  counter = counter + 1
  // //  setCounter(counter + 1)
  // //  setCounter(prevCounter => prevCounter +1)
  // //  setCounter(prevCounter =>  prevCounter+1)
  // //  setCounter(prevCounter => prevCounter +1)
  //  setCounter(prevCounter => prevCounter +1) // it will add 4 values as a pack of four values after call back this is inteview question

  // }


  const [counter, setCounter] = useState(0) 
  const addValue = () => {
 if (counter == 20){
   setCounter(counter = 20)
 }
 else{
   setCounter(counter => counter + 1)
 }
   
 }

  // const removeValue = () => {
  //   setCounter(counter - 1)
  // }
  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
    // else{
    //   setCounter(counter = 0);
    // }
   
  }
  return (
    <>
   
    <h1> Counter Project</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value{counter}</button>
    <br /> <br />
    <button
    onClick={removeValue}
    >Remove Value{counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App


// Assignment Solution

// let [value, setValue] = useState(0)
// const addValue = () => {
//  if (value == 20){
//    setValue(value = 20)
//  }
//  else{
//    setValue(value+1)
//  }
   
//  }
  

// const removeValue = () => {
//   if (value > 0){
//     setValue(value - 1)
//   }
//   else{
//     setValue(value = 0)
//   }
 
// }