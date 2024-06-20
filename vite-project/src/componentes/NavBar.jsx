import NavBarBootsrap from "./NavBarBootsrap.jsx";
import { Link } from "react-router-dom";

function NavBar(props) {
  if (props.isHeader == true) {
    return (
      <NavBarBootsrap />
    );
  } else {
    return (
      <nav className="justify-center">
        <Link to="">F.A.Q</Link>
        <br />
        <Link to="">Terminos y Condiciones</Link>
        <br />
        <Link to="">Contacto</Link>
      </nav>
    )
  }

}

export default NavBar