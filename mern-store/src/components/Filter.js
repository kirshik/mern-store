import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { nanoid } from 'nanoid';
import serverURL from '../globals';
import axios from 'axios';


function Filter(props) {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    const url = serverURL + `/api/categories`;
    axios.get(url).then((response) => { setCategories(response.data) })
  }, []);


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
              <Dropdown.Item href={`/categories`}>Categories</Dropdown.Item>
              {categories.map(category => {
                return <Dropdown.Item key={nanoid()} href={`/categories/${category.name}`}>{category.name}</Dropdown.Item>
              })}
            </DropdownButton>
            <div className="form-check m-3 ms-0">
              <input className="form-check-input bg-dark border-0" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Some value
              </label>
            </div>
            <div className="form-check m-3 ms-0">
              <input className="form-check-input bg-dark border-0 " type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Some value
              </label>
            </div>
            <label htmlFor="moneyRange" className="form-label">Choose price range $:</label>
            <input type="range" className="form-range" min="0" max="10000" step="0.5" id="moneyRange" />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
}
export default Filter;