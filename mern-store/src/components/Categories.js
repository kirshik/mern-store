import Category from "./Category";
import Filter from "./Filter";

function Categories(props) {

  const example = props.name ? <Category name={props.name} noLimit /> : <><Category name="Some category" />
    <Category name="Some category" />
    <Category name="Some category" />
    <Category name="Some category" /></>

  return (
    <>
      {props.header}
      <Filter name={props.name} />
      {example}
      {props.footer}
    </>
  );
};
export default Categories;