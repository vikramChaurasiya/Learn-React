import { useState } from 'react'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-gray-300'>Tailwind test</h1> */}
      <Card item="Camra" ImgSrc="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"/>
      <Card item="WAtch" stock="Out of Stock" ImgSrc="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"/>
    </>
  )
}

export default App
