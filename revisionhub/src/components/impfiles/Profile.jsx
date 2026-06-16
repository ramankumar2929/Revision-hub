
import { useState } from "react";

function Profile(){
     const savedprofile = JSON.parse(localStorage.getItem("profile")) || {};
        const [name, setname] = useState(savedprofile.name || "")
        const [college, setcollege] = useState(savedprofile.college || "")
        const [branch, setbranch] = useState(savedprofile.branch || "")
        const [bio, setbio] = useState(savedprofile.bio || "")
    
        function savedata() {
            const profile = {
                name, college, branch, bio
            }
            localStorage.setItem("profile", JSON.stringify(profile))
        }
    return(
        <>
         <div className="Profilesetting">
                    <h3>Personal info:-</h3>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => { setname(e.target.value) }} />
                    <input
                        type="text"
                        placeholder="Enter college"
                        value={college}
                        onChange={(e) => { setcollege(e.target.value) }} />
                    <input type="text"
                        placeholder="Enter Branch"
                        value={branch}
                        onChange={(e) => { setbranch(e.target.value) }} />
                    <input type="text"
                        placeholder="Enter Bio"
                        value={bio}
                        onChange={(e) => { setbio(e.target.value) }} />

                    <button onClick={savedata}>Save</button>
                </div>

        </>
    )
}
export default Profile