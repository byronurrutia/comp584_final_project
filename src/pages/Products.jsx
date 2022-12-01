import ProductSection from "../components/ProductSection";

export default function Products(props) {
  return (
    <div
      style={{
        backgroundColor: props.lightMode ? "white" : "#121212",
      }}
    >
      <h1
        className="display-5 fw-bold"
        style={{ color: props.lightMode ? "black" : "white" }}
      >
        {props.text}
      </h1>
      <ProductSection lightMode={props.lighMode} />
    </div>
  );
}
