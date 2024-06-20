import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CartWidget({...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="me-2 absolute right-0 bg-[#242424]">
        <img src="/carroCompras.png" alt="Carro de Compras" className='size-16 hover:size-20 duration-150' />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} placement='end' keyboard='true'>
        <Offcanvas.Header closeButton className='bg-[#242424] text-white'>
          <Offcanvas.Title>Carro de Compras:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-[#242424] text-white'>
          75
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartWidget