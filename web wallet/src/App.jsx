import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";

function App() {

  const [mnemonic, setmnemonic] = useState("");


  return (
    <>
      <input type='text' value={mnemonic}></input>
      <button onClick={async function () {
        const mn = await generateMnemonic();
        setmnemonic(mn)
      }}>
        create seed pharse
      </button>
    </>
  )
}

export default App
