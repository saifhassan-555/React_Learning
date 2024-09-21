import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
 const [amount, setAmount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-orange-500 p-2'>Currency Convertor</h1>
    </>
  )
}

export default App
