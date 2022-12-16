import "./Header.css"
function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Electro</a>
          <div className="nav-element-container">
            <form className="d-flex me-3 ms-3" role="search">
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <a className="picture-link" href="/wishlist"><img alt="some text" src={require("./images/wishlist.png")} /></a>
            <a className="picture-link" href="/cart"><img alt="some text" src={require("./images/cart.png")} /></a>
            <a className="picture-link me-3" href="/profile"><img alt="some text" src={require("./images/profile.png")} /></a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;