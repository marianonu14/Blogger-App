import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex justify-between p-5 mx-10">
        <NavLink to="/" className="text-2xl">Blogger App</NavLink>
        <nav className="px-10 flex gap-5 text-lg">
          <NavLink to="allnotes" 
          className={({ isActive }) =>
          isActive ? 
          "underline" : 
          undefined
        }>All Notes</NavLink> |{" "}
          <NavLink to="newnote" 
          className={({ isActive }) =>
          isActive ? 
          "underline" : 
          undefined
        }>New Note</NavLink>|{" "}
        <NavLink to="aboutus" 
        className={({ isActive }) =>
              isActive ? 
              "underline" : 
              undefined
            }>About Us</NavLink> 
        </nav>
      </div>
      <div>
      </div>
      <Outlet />
      <footer>
        <p className="text-center text-xl p-5">All Rights Reserved | Mariano Nuñez | {new Date().getFullYear()}</p>
      </footer>
    </div>

  );
}

export default App;
