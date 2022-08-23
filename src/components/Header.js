import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="flex justify-between p-5 mx-10">
            <NavLink to="/" className="text-2xl">Blogger App</NavLink>
            <nav className="px-10 flex gap-5 text-lg">
                <NavLink 
                    to="allnotes" 
                    className={({ isActive }) =>
                    isActive ?
                    "underline cursor-default" : 
                    undefined 
                }>All Notes</NavLink> |{" "}
                <NavLink 
                    to="newnote" 
                    className={({ isActive }) =>
                    isActive ? 
                    "underline cursor-default" : 
                    undefined
                }>New Note</NavLink>|{" "}
                <NavLink 
                    to="aboutus" 
                    className={({ isActive }) =>
                    isActive ? 
                    "underline cursor-default" : 
                    undefined
                }>About Us</NavLink> 
            </nav>
        </header>
     );
}
 
export default Header;