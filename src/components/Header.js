import { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Header = () => {
    const [navState, setNavState] = useState(false);

    const handleNav = () => {
        setNavState(!navState)
    }
    
    return ( 
        <header className="flex justify-between p-8">
            <NavLink to="/" className="text-2xl">Blogger App</NavLink>
            <nav className="hidden md:flex px-10 gap-5 text-lg">
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
            <div className="md:hidden cursor-pointer" onClick={handleNav}>
                <AiOutlineMenu size={25}/>
            </div>
            <div className={navState ? "fixed left-0 top-0 w-full h-screen bg-black/70" : "hidden"}>
                <div className={navState ? 
                                "md:hidden fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700" : 
                                "md:hidden fixed left-[-100%] top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700"}>
                    <div className="flex justify-between item-center mb-10">
                        <NavLink to="/" className="text-2xl">Blogger App</NavLink>
                        <div className="cursor-pointer" onClick={handleNav}>
                            <AiOutlineClose size={25}/>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-10">
                        <NavLink 
                            to="allnotes" 
                            className={({ isActive }) =>
                            isActive ?
                            "underline cursor-default" : 
                            undefined 
                        }>All Notes</NavLink> 
                        <NavLink 
                            to="newnote" 
                            className={({ isActive }) =>
                            isActive ? 
                            "underline cursor-default" : 
                            undefined
                        }>New Note</NavLink>
                        <NavLink 
                            to="aboutus" 
                            className={({ isActive }) =>
                            isActive ? 
                            "underline cursor-default" : 
                            undefined
                        }>About Us</NavLink> 
                    </ul>
                </div>
            </div>
        </header>
     );
}
 
export default Header;