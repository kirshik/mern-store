import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Filter(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="p-3 bg-light">
      <>
        <button className='btn btn-outline-dark btn-lg' onClick={handleShow}>Filter</button>

        <Offcanvas show={show} placement="start" onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{props.name}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <DropdownButton id="dropdown-basic-button" variant='outline-dark' title={props.name ? props.name : "Categories"}>
              <Dropdown.Item href="/categories/1">Displays</Dropdown.Item>
              <Dropdown.Item href="/categories/2">{"Tv&AV"}</Dropdown.Item>
              <Dropdown.Item href="/categories/3">Laptops</Dropdown.Item>
              <Dropdown.Item href="/categories/1">Displays</Dropdown.Item>
              <Dropdown.Item href="/categories/2">{"Tv&AV"}</Dropdown.Item>
              <Dropdown.Item href="/categories/3">Laptops</Dropdown.Item>
              <Dropdown.Item href="/categories/1">Displays</Dropdown.Item>
              <Dropdown.Item href="/categories/2">{"Tv&AV"}</Dropdown.Item>
              <Dropdown.Item href="/categories/3">Laptops</Dropdown.Item>
            </DropdownButton>
            <div className="form-check m-3 ms-0">
              <input className="form-check-input bg-dark border-0" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Some value
              </label>
            </div>
            <div className="form-check m-3 ms-0">
              <input className="form-check-input bg-dark border-0 " type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Some value
              </label>
            </div>
            <label for="moneyRange" class="form-label">Choose price range $:</label>
            <input type="range" class="form-range" min="0" max="10000" step="0.5" id="moneyRange" />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
}
export default Filter;