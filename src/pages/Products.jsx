import ProductSection from "../components/ProductSection";

export default function Products(props) {
  return (
    <div
      style={{
        backgroundColor: props.lightMode ? "white" : "#121212",
        color: props.lightMode ? "black" : "white",
      }}
    >
      <h1 className="display-5 fw-bold">{props.text}</h1>
      <ProductSection lightMode={props.lighMode} />
    </div>
  );
}
