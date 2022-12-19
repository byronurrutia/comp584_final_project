import axios from "axios";
import { useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
export default function OrderTracking() {
    const [flag,setFlag] = useState(false);
    const [orderDetail,setOrderDetail] = useState();
    const [formData, setFormData] = useState({
        trackingId:""
      });
    
      function handleChange(event) {
        setFormData((prev) => {
          return {
            ...prev,
            [event.target.id]: event.target.value,
          };
        }
        );
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        var data = formData.trackingId;
        var config = {
            method: 'post',
            url: 'https://themillenniumfalcon.junhechen.com/584final/api/v1/order/get',
            headers: { 
              'Content-Type': 'text/plain'
            },
            data : data
        };
        axios(config)
        .then(function (response){
            console.log(JSON.stringify(response.data));
            setFlag(true);
            setOrderDetail(response.data);
        })
        .catch(function (error){
            console.log(error);
        })
      }

    if (flag){
        return (
            <div className="container tracking__container">
                <h1>{orderDetail.email}</h1>
            </div>
        )
    }
    return (
      <div className="container tracking__container">
        <Form className="py-3" onSubmit={handleSubmit} noValidate>
            <Form.Group
              required
              className="mb-3"
              controlId="trackingId"
              onChange={handleChange}
              value={formData.trackingId}
            >
              <Form.Label>Tracking ID</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
              <Form.Control.Feedback type="invalid">
                Please check your tracking ID is valid
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </div>
     
    );
  }
  