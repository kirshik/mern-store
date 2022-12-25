import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import serverURL, { axiosConfig } from '../globals';

function SignUpModal(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleInputChangeMap = new Map([
    ['firstName', setFirstName],
    ['lastName', setLastName],
    ['email', setEmail],
    ['password', setPassword],
    ['birthday', setBirthday]

  ])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      if (value !== password) {
        e.target.setAttribute("isvalid", "false");
      } else { handleInputChangeMap.get(name)(value); }
    } else if (handleInputChangeMap.has(name)) {
      console.log(name, value);
      handleInputChangeMap.get(name)(value);
    }

  };

  function handleChange() {
    props.handleClose();
    props.handleChange();
  }
  function handlePost(e) {
    e.preventDefault();
    const url = serverURL + '/api/sign-up';
    axios.post(url, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday
    }, axiosConfig).then((response) => {
      if (response.status === 200) {
        props.handleClose();
      }
    })
  };

  return (
    <>

      <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form" autoComplete="off" id="formLogin" noValidate="" method="POST">

            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="email" className="form-control" id="email" name='email' onChange={handleInputChange} placeholder="Email" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="name" className="form-control" id="first-name" name='firstName' onChange={handleInputChange} placeholder="First Name" />
                <label htmlFor="first-name">First Name</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="name" className="form-control" id="last-name" name='lastName' onChange={handleInputChange} placeholder="Last Name" />
                <label htmlFor="last-name">Last Name</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="date" className="form-control" id="birthday" name='birthday' onChange={handleInputChange} placeholder="Birthday" />
                <label htmlFor="birthday">Birthday</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="password" className="form-control" id="password" name='password' onChange={handleInputChange} placeholder="Password" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="password" className="form-control" id="confirm-password" name='confirmPassword' onChange={handleInputChange} placeholder="Confirm password" />
                <label htmlFor="confirm-password">Confirm password</label>
              </div>
            </div>
            <div className="form-group ">
              <button type="submit" onClick={handlePost} className="btn btn-outline-danger float-right" id="btnLogin">Sign Up</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-dark' onClick={props.handleClose}>
            Close
          </button>
          <button className='btn btn-outline-danger' onClick={handleChange}>
            Sign In
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SignUpModal;