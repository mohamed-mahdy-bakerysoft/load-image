import './App.css'
import { useState } from 'react'
import ImageCanvas from './components/ImageCanvas'
import ImageInput from './components/ImageInput'

function App() {
  const [texture, setTexture] = useState('zenitsu.png')
  
  return (
    <>
      <ImageInput setTexture={setTexture} />
      <ImageCanvas texture={texture} />
    </>
  )
}

export default App
