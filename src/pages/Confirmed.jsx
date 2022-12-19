import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function Confirmed() {
  const [purchaseData, setPurchaseData] = useState();
  useEffect(() => {
    var data = sessionStorage.getItem("orderTracking");

    var config = {
      method: "post",
      url: "https://themillenniumfalcon.junhechen.com/584final/api/v1/order/get",
      headers: {
        "Content-Type": "text/plain",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setPurchaseData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div
      className="text-center d-flex flex-column align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <h4>{`${sessionStorage.getItem("orderTracking")}`}</h4>
      <h4>Thank you for your purchase</h4>
      <h4>Email will be sent to {purchaseData.email}</h4>
      <h5>Purchased Items:</h5>
      {purchaseData.products.map((item) => {
        return (
          <div key={nanoid()}>
            <h4>{item.productName}</h4>
          </div>
        );
      })}
    </div>
  );
}
