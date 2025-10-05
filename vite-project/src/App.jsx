import { useState } from 'react'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <Card
    name="iphone"
    description="17pro max"
    price="$399999999.99"
  />

    <Card
    name="iphone"
    description="17pro max"
    price="$399999999.99"
  />

    <Card
    name="iphone"
    description="17pro max"
    price="$399999999.99"
  />

    <Card
    name="iphone"
    description="17pro max"
    price="$399999999.99"
  />
   </>
  )
}

export default App
