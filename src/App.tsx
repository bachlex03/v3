import { useState } from 'react'
import Button from '~/components/btn'

function App() {
  const [count, setCount] = useState(0)

  const test = (param: any) => { }

  const obj = {
    name: 'John',
    age: 30,
  }

  console.log('test', test)

  console.log('count', count)

  const toggleDarkMode = () => {
    const rootElement = document.getElementById('rootElement')
    if (rootElement) {
      rootElement.classList.toggle('dark')
    }
  }

  return (
    <div id='rootElement' className='bg-background dark:bg-background'>
      <p className='font-calibre'>TESTttt</p>
      <p className='font-inter'>TESTttt</p>
      <p className='font-mono'>TESTttt</p>
      <p className='bg-card'>TESTttt</p>
      <Button />

      <button onClick={toggleDarkMode}>
        Toggle
      </button>
    </div>
  )
}
export default App

// Demo errors and warnings
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './App.css'
// import Button from '~/components/btn'

// function App() {
//   const [count, setCount] = useState(0)

//   const test = (param: any) => {}

//   const obj = {
//     name: 'John',
//     age: 30,
//   }

//   console.log('test', test)

//   if (count === 0) {
//   } else if (count === 1) {
//   }

//   console.log('count', count)

//   return (
//     <div>
//       <p>TEST</p>
//       <Button />
//     </div>
//   )
// }
// export default App
