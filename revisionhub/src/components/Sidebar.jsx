import {FaHouse} from "react-icons/fa6"
import {FaCircleCheck} from "react-icons/fa6"
import {FaNoteSticky} from "react-icons/fa6"
import {FaWallet} from "react-icons/fa6"
import {FaGear} from "react-icons/fa6"
import {FaUser} from "react-icons/fa6"
import {FaClipboardCheck} from "react-icons/fa6"
import { FaRightFromBracket } from "react-icons/fa6";
import logo from "../assets/logo.svg";

function Sidebar({setactivesec}){
    return(
        <aside className="sidebar">
                <div className="logo-area"><img className="logoimg" src={logo} alt="Revision Hub Logo" /> <h3>Revision Hub</h3></div>
            <nav>
                 <div className="menu-item" onClick={()=> setactivesec("home")}><FaHouse/><p>Home </p></div>
                  <div className="menu-item" onClick={()=> setactivesec("todos")}><FaCircleCheck/> <p>Todos</p></div>             
                  <div className="menu-item" onClick={()=> setactivesec("notes")}><FaNoteSticky/> <p>Notes</p></div>             
                  <div className="menu-item" onClick={()=> setactivesec("expenses")}><FaWallet/> <p>Expenses</p></div>             
                  <div className="menu-item" onClick={()=> setactivesec("settings")}><FaGear/> <p>Settings</p></div>             
                  <div className="menu-item" onClick={()=> setactivesec("profile")}><FaUser/> <p>Profile</p></div>             
                 

            </nav>
            <div className="logout"><FaRightFromBracket/><p>Logout</p></div>
        </aside>
    );
}

export default Sidebar;