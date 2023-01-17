import { Carousel } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import serverURL, { axiosConfig } from '../globals';
import axios from 'axios';



function Home(props) {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const url = serverURL + "/api/products/top/3/1";
    axios.get(url, axiosConfig).then((res) => {
      const products = res.data.map((product) => {
        return { href: `/products/${product.id}`, src: product.images_urls, alt: product.name, caption: `${product.name} only for ${product.price}$!` }
      });
      setTopProducts(products);
    })
  }, [])


  const categories = props.categories.map((category) => {
    return <a key={nanoid()} href={`/categories/${category.name}`} className="list-group-item list-group-item-action">
      <p className="lead mb-0">{`${category.name}`}</p>
    </a>
  })
  const topProductsCarousel = topProducts.map((product) => {
    return <Carousel.Item key={nanoid()} className="carousel-img pb-5" >
      <a href={product.href} >
        <img className="d-block m-5 ms-3 bg-dark bg-opacity-25" style={{ height: "40vh" }} src={product.src} alt={product.alt} />
        <Carousel.Caption variant="primary" className='bg-dark bg-opacity-50'>
          <h3>{product.caption}</h3>
        </Carousel.Caption>
      </a>
    </Carousel.Item>
  });

  return (
    <>
      {props.header}

      <main className="d-flex ms-3">
        <aside className='m-5 '>
          <h4 className="display-4 ">BROWSE CATEGORIES</h4>
          <ul className="list-group ">
            <a href="/" className="list-group-item list-group-item-action">
              <p className="lead mb-0">Home</p>
            </a>
            <a href="/categories" className="list-group-item list-group-item-action">
              <p className="lead mb-0">Categories</p>
            </a>
            {categories}
            <a href="/about-us" className="list-group-item list-group-item-action">
              <p className="lead mb-0">About Us</p>
            </a>
          </ul>

        </aside>
        <Carousel className='w-50 m-5 background-dark' >
          {topProductsCarousel}

        </Carousel>
      </main>
      <div className="container">
        <p className="h1 text-center">Looking for something else?</p>
        <form className="form-inline d-flex mt-4 m-5">
          <input className="form-control mr-sm-2 me-1" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>

      {props.footer}
    </>
  );
};
export default Home;