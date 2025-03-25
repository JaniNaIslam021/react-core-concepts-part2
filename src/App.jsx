import './App.css';
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json()
}

function App() {

  const friendsPromise = fetchFriends();
  function handleClick() {
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
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}> </Users>
      </Suspense> */}

      <Suspense fallback={<h3>Hero Alam, Bappa, Hena...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

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
