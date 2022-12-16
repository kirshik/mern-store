import { Carousel } from 'react-bootstrap';



function Home(props) {

  return (
    <>
      {props.header}

      <main className="d-flex ms-3">
        <aside className='m-5 '>
          <h4 className="display-4 " >BROWSE CATEGORIES</h4>
          <ul className="list-group ">
            <a href="/" className="list-group-item list-group-item-action">
              <p className="lead mb-0">Home</p>
            </a>
            <a href="/" className="list-group-item list-group-item-action">
              <p className="lead mb-0">Phones</p>
            </a>
            <a href="/" className="list-group-item list-group-item-action">
              <p className="lead mb-0">Displays</p>
            </a>
            <a href="/" className="list-group-item list-group-item-action">
              <p className="lead mb-0">{"TV & AV"}</p>
            </a>
            <a href="/" className="list-group-item list-group-item-action">
              <p className="lead mb-0">Categories</p>
            </a>
            <a href="/about-us" className="list-group-item list-group-item-action">
              <p className="lead mb-0">About Us</p>
            </a>
          </ul>

        </aside>
        <Carousel className='w-50 m-5'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://campaignsoftheworld.com/wp-content/uploads/2017/06/Apple-iPhone.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://campaignsoftheworld.com/wp-content/uploads/2017/06/Apple-iPhone.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://campaignsoftheworld.com/wp-content/uploads/2017/06/Apple-iPhone.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </main>
      <div className="container">
        <p className="h1 text-center">Looking for something else?</p>
        <form class="form-inline d-flex mt-4 m-5">
          <input class="form-control mr-sm-2 me-1" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>

      {props.footer}
    </>
  );
};
export default Home;