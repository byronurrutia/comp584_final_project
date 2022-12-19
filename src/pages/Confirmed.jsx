export default function Confirmed(props) {
  return (
    <div
      className="text-center d-flex flex-column align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <h4>{`${sessionStorage.getItem("orderTracking")}`}</h4>
      <h4>Thank you for your purchase</h4>
    </div>
  );
}
