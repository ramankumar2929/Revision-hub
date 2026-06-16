import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/Sidebar'
 
import Home from './components/impfiles/Home'
import Todo from './components/impfiles/Todos'
import Profile from './components/impfiles/Profile'
import Notes from './components/impfiles/Notes'
import Expenses from './components/impfiles/Expenses'
import Settings from './components/impfiles/Settings'

function App() {
  const [activesec, setactivesec] = useState("home");
  const [notes, setnotes] = useState([])
  const [noteid, setnoteid] = useState(null)
   const [darkmode, setdarkmode] = useState(false)
 
 
  return (
    <>
      <div className="app">
        <Sidebar setactivesec ={setactivesec} />
        <main className={`main ${darkmode ? "darkmain" : "lightmain"}`}>
           
          {activesec === "home" && <Home setactivesec={setactivesec} />}

          {
            activesec === "notes" && <Notes />
          }

          {
            activesec === "todos" && <Todo />
          }
          {
            activesec === "expenses" && <Expenses />
          }
          {
            activesec === "settings" && 
            <Settings 
            darkmode={darkmode}
            setdarkmode={setdarkmode}
            />
          }
          {
            activesec === "profile" && <Profile />
          }
        </main>
      </div>
    </>

  )

}

export default App
