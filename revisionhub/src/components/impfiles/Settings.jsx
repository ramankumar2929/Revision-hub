import { useState } from "react"

 

function Settings({ darkmode, setdarkmode }) {
    const savedprofile = JSON.parse(localStorage.getItem("profile")) || {};
    const [name, setname] = useState(savedprofile.name || "")
        const [college, setcollege] = useState(savedprofile.college || "")
        const [branch, setbranch] = useState(savedprofile.branch || "")
        const [bio, setbio] = useState(savedprofile.bio || "")

        function clearTodos() {
    localStorage.removeItem("todos")
    alert("todos cleared")
}
function clearNotes() {
    localStorage.removeItem("notes")
    alert("notes cleared")
}
function clearExpenses() {
    localStorage.removeItem("expenses")
    alert("expenses cleared")
}

function clearProfile() {
    localStorage.removeItem("profile")
    setname("")
    setcollege("")
    setbranch("")
    setbio("")
    alert("profile cleared")
}
function Resetapp() {
    const confirmreset = window.confirm("Are you sure you want to reset entire app?")

    if (!confirmreset) return;
    localStorage.removeItem("todos");
    localStorage.removeItem("notes");
    localStorage.removeItem("expenses");
    localStorage.removeItem("profile");
    localStorage.removeItem("preferences");
    localStorage.removeItem("darkmode");

    setname("");
    setcollege("");
    setbranch("");
    setbio("");

    alert("Entire app reset successfully");
}
  

    return (
        <>
            <div className="settingpage">

                <h1>⚙️ Setting</h1>
                <div className="Themesetting">
                    <h2>Theme switch</h2>
                    <label className="switch">
                        <input type="checkbox"
                            checked={darkmode}
                            onChange={() => setdarkmode(!darkmode)}

                        />
                        <span className="slider"></span>

                    </label>
                </div>
                
                <div className="resetdata">
                    <h2>⚠️ Reset data</h2>
                    <button onClick={clearTodos}>Clear Todos</button>
                    <button onClick={clearNotes}>Clear Notes</button>
                    <button onClick={clearExpenses}>Clear Expenses</button>
                    <button onClick={clearProfile}>Clear profile</button>
                    <button onClick={Resetapp}>Reset Entire App</button>
                </div>

            </div>
        </>
    )
}
export default Settings