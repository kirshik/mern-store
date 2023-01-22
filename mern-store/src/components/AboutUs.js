import Shippment from './images/shipping.svg';
import Paid from './images/paid.svg';
import Support from './images/support.svg';


function AboutUs(props) {
  return (
    <>
      {props.header}

      <div className="card bg-dark  border-0 rounded-0 text-white" >
        <img src="https://portotheme.com/html/porto_ecommerce/assets/images/page-header-bg.jpg" className="card-img m-0 w-100 rounded-0" alt="..."></img>
        <div className="card-img-overlay d-flex-col text-left ms-5 text-dark mt-3" style={{ minHeight: "20vh" }}>
          <p className="card-title h3">About us <br /><span className="h1">Our Company</span></p>
          <button type="button" className="btn btn-outline-dark ">Contact Us</button>
        </div>
      </div>
      <div className="container">
        <p className="h2 mt-3">Our story</p>
        <p className=" muted text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

          “ Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model search for evolved over sometimes by accident, sometimes on purpose ”</p>
        <p className=" muted text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
      </div>
      <div className=" text-center d-grid p-5 pt-3 bg-light">
        <div className='row' >
          <p className="h2 mb-4">Why choose us?</p>
        </div>
        <div className='row justify-content-md-around' >
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top w-25 mb-3" src={Shippment} alt="Card cap"></img>
                <h5 className="card-title">Free Shipping</h5>
                <p className="card-text muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top w-25 mb-3" src={Paid} alt="Card cap"></img>
                <h5 className="card-title ">100% Money Back Guarantee</h5>
                <p className="card-text muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top w-25 mb-3" src={Support} alt="Card cap"></img>
                <h5 className="card-title">Online Support 24/7</h5>
                <p className="card-text muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {props.footer}

    </>
  );
};
export default AboutUs;