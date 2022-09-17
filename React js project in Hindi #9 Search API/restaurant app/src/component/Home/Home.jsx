import React, { useState } from 'react'

function Home() {
  const [todo,setTodo] = useState(['Apple','Orange','Mango'])
  const deleteValue = (index) => {
    todo.splice(index,1)
    setTodo([...todo])
  }
    return (
      <div>
       <h1>Home</h1>
       {
        todo.map((v,i)=>{
          return <ul>
            <li key={i}>{v}<button onClick={()=>deleteValue(i)}>Delete</button> </li>
          </ul>
        })
       } 
      </div>
    )
  }
export default Home