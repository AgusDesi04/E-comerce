import NavBarBootsrap from "./NavBarBootsrap.jsx";
  
function NavBar(props) {
  if (props.isHeader == true) {
    return (
      <NavBarBootsrap />
    );
  } else {
    return (
      <nav>
        <a href="">F.A.Q</a>
        <br />
        <a href="">Terminos y Condiciones</a>
        <br />
        <a href="">Contacto</a>
      </nav>
    )
  }

}

export default NavBar