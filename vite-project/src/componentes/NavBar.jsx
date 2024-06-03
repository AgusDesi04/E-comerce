function NavBar(props) {
  if (props.isHeader == true) {
    return (
      <nav>
        <a href="">HOME</a>
        <br />
        <a href="">CONTACTO</a>
        <br />
        <a href="">PRODUCTOS</a>
      </nav>
    )
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