import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "Book1", price: 6, description: "This is my first book" },
  {
    id: "p2",
    title: "Book2",
    price: 10,
    description: "This is my second book",
  },
  {
    id: "p3",
    title: "Book3",
    price: 16,
    description: "This is my fourth book",
  },
  { id: "p4", title: "Book4", price: 8, description: "This is my fifth book" },
];

const Products = (props) => {
  const productsList = (
    <ul>
      {DUMMY_PRODUCTS.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </ul>
  );
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {productsList}
    </section>
  );
};

export default Products;
