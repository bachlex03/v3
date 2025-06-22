import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css'
import Button from '~/components/btn'

function App() {
  const [count, setCount] = useState(0)

  const test = (param: any) => {}

  const obj = {
    name: 'John',
    age: 30,
  }

  console.log('test', test)

  if (count === 0) {
  } else if (count === 1) {
  }

  console.log('count', count)

  return (
    <div>
      <p>TEST</p>
      <Button />
    </div>
  )
}
export default App
