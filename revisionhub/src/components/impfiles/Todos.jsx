
import { useState,useEffect } from "react";

function Todo(){
           const [input, setinput] = useState("")
  const [todos, settodos] = useState(() => {
    const savedtodos = localStorage.getItem("todos");
    return savedtodos ? JSON.parse(savedtodos) : [];
  })
 
 function handlesubmit(e) {
    e.preventDefault();
    if (input.trim() == "") return;

    settodos([...todos, { text: input, completed: false }]);
    setinput("");
  }

  function deletetodo(indextodelete) {
    settodos(todos.filter((todos, index) => index !== indextodelete))
  }

  function checkclick(indextocheck) {

    const newtodos = todos.map((todo, index) => {
      if (index == indextocheck) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      else {
        return (todo)
      }
    })
    settodos(newtodos)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

    return(
        <>
       <div className="todo-card">
            <h1>📝      Todo Manager</h1> <br />
            <form action="" onSubmit={handlesubmit} className='todo-form'>
              <input
                type="text"
                placeholder='Add a new task..'
                value={input}
                onChange={(e) => {
                  setinput(e.target.value)
                }}
                
              />



              <button type="submit">Add</button>
            </form>
          </div>
            <div className="todo-list">
              {
                todos.map((todo, index) => {
                  return (
                    <div className="todo-item" key={index}>
                      <input
                        type="checkbox" className='checkbox'

                        checked={todo.completed}
                        onChange={() => checkclick(index)}


                      />
                      <span>{todo.text}</span>
                      <button onClick={() => deletetodo(index)}>🗑️</button>
                    </div>
                  )
                })
              }
            </div>

           
        </>
    )
}
export default Todo