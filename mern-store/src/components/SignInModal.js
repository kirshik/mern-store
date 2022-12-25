import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import serverURL from '../globals';
import { axiosConfig } from '../globals';

function SignInModal(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleInputChangeMap = new Map([
    ['email', setEmail],
    ['password', setPassword]
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (handleInputChangeMap.has(name)) handleInputChangeMap.get(name)(value);
  };

  function handlePost(e) {
    e.preventDefault();
    const url = serverURL + '/api/sign-in';
    axios.post(url, {
      email: email,
      password: password
    }, axiosConfig).then((res) => {
      if (res.status === 200) {
        props.handleClose();
      } else {
        alert(res.data);
      }
    })
  };

  function handleChange() {
    props.handleClose();
    props.handleChange();
  }

  return (
    <>

      <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form" autoComplete="off" id="formLogin" noValidate="" method="POST">
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInputGroup1" name='email' onChange={handleInputChange} required placeholder="Email" />
                <label htmlFor="floatingInputGroup1">Email</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingInputGroup2" name='password' required onChange={handleInputChange} placeholder="Password" />
                <label htmlFor="floatingInputGroup2">Password</label>
              </div>
            </div>
            <div className="form-group ">
              <button type="submit" onClick={handlePost} className="btn btn-outline-danger float-right" id="btnLogin">Sign In</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-outline-dark' onClick={props.handleClose}>
            Close
          </button>
          <button className='btn btn-outline-danger' onClick={handleChange}>
            Sign Up
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SignInModal;