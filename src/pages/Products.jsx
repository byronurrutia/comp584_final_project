import ProductSection from "../components/ProductSection";

// this page is to wrap the mapped data of products
export default function Products(props) {
  return (
    <div
      style={{
        backgroundColor: props.lightMode ? "white" : "#121212",
      }}
    >
      <h1
        className="display-5 fw-bold p-3"
        style={{ color: props.lightMode ? "black" : "white" }}
      >
        {props.text}
      </h1>
      {/* this will hold the formated list of products */}
      <ProductSection
        addToCart={props.addToCart}
        lightMode={props.lightMode}
        products={props.products}
      />
    </div>
  );
}
