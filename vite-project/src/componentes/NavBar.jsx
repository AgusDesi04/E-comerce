import NavBarBootsrap from "./NavBarBootsrap";

function NavBar(props) {
  if (props.isHeader == true) {
    return (
      <h1>hola</h1>
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