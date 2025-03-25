import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'

function App() {
 
  function handleClick(){
    alert("Clicked")
  }
  const ClickMe3 = () => {
    alert("By Using (=>) Arrow Function")
  }

  const ArrowFunction = () => {
    alert('Re')
  }
  return (
    <>
      
      <h1>Vite + React</h1>

      <Counter></Counter>
      <Batsman></Batsman>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("Only Function")}>Click Me 2</button>
      <button onClick={ClickMe3}>Click Me 3</button>


    <button onClick={ArrowFunction}>Arrow Function</button> */}
    </>
  )
}

export default App
