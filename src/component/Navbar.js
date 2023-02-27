import { NavLink } from "react-router-dom";
import { useTheme } from "../hook/useTheme";
import './Navbar.css';


export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
        <nav>
          <NavLink to="/" className="brand" ><h1>Cooking</h1></NavLink>
          <NavLink to="/create"><h1>Create Recipe</h1></NavLink>
        </nav>
    </div>
  )
}
