import { useEffect, useState } from "react"

function Notes() {
    const [noteinput, setnoteinput] = useState("")
    const [notes, setnotes] = useState(() => {
        const savednotes = localStorage.getItem("notes");
        return savednotes ? JSON.parse(savednotes) : [];
    })
     
    function handlesubmit(e) {
    e.preventDefault();
    if (noteinput.trim() == "") return;

    setnotes([...notes, { text: noteinput  }]);
    setnoteinput("");
  }

  function deletenote(indextodelete) {
    setnotes(notes.filter((notes, index) => index !== indextodelete))
  }

  useEffect(()=>{localStorage.setItem("notes",JSON.stringify(notes))},[notes])

    return (
        <>
             <div className="note-card">
                <h3>📋Notes</h3>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text"
                    placeholder="add a new note.."
                    value ={noteinput}
                     
                    onChange = {(e)=>{
                            setnoteinput(e.target.value)
                    }}
                    
                    
                    />
                    <button type="submit" >Add</button>


                </form>
             </div>

              <div className="note-list">
              {
                notes.map((note, index) => {
                  return (
                    <div className="note-item" key={index}>
                       
                      <span>{note.text}</span>
                      <button onClick={() => deletenote(index)}>🗑️</button>
                    </div>
                  )
                })
              }
            </div>
        </>
    )
}
export default Notes