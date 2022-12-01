import ProductSection from "../components/ProductSection";

export default function Products(props) {
  return (
    <>
      <h1 className="display-5 fw-bold">{props.text}</h1>
      <ProductSection />
    </>
  );
}
