

function Product(props) {
  const photos = props.photos.map(photo => {
    return (<></>);
  })
  return (
    <>
      {props.header}
      <div className="row d-flex">
        <div className="col-4">

        </div>
        <div className="col-8"></div>
      </div>
      {props.footer}
    </>
  );
};
export default Product;