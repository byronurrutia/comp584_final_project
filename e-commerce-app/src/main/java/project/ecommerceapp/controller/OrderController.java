package project.ecommerceapp.controller;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Price;
import com.stripe.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import project.ecommerceapp.dao.DatabaseProductRepository;
import project.ecommerceapp.dao.OrderDetailsRepository;
import project.ecommerceapp.dto.MyProduct;
import project.ecommerceapp.dto.OrderRequest;
import project.ecommerceapp.dto.OrderResponse;
import project.ecommerceapp.dto.RegistrationRequest;
import project.ecommerceapp.entity.DatabaseProduct;
import project.ecommerceapp.entity.OrderDetail;
import project.ecommerceapp.entity.OrderItem;
import project.ecommerceapp.service.OrderService;

import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("584final/api/v1/order")
public class OrderController {
    @Autowired
    OrderService orderService;
    @Autowired
    OrderDetailsRepository orderDetailsRepository;
    @Value("${STRIPE_SECRET_KEY}")
    private String secretKey;

    @PostMapping("/placeOrder")
    public String placeOrder(@RequestBody OrderRequest orderRequest){
        return orderService.placeOrder(orderRequest);
    }
    @PostMapping("get")
    public OrderResponse getOrder(@RequestBody String orderId) throws StripeException {
        Stripe.apiKey = secretKey;

        OrderDetail orderDetail = orderDetailsRepository.findByOrderId(orderId);
        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setEmail(orderDetail.getAppUser3().getEmail());
        orderResponse.setTotal(orderDetail.getTotalPrice());
        ArrayList<MyProduct> products = new ArrayList<MyProduct>();
        for(OrderItem orderItem : orderDetail.getOrderItems()){
            Product product = Product.retrieve(orderItem.getProductId());
            MyProduct myProduct = new MyProduct();
            myProduct.setProductName(product.getName());
            Price price = Price.retrieve(product.getDefaultPrice());
            myProduct.setPrice(price.getUnitAmount());
            myProduct.setId(product.getId());
            myProduct.setCategory(product.getMetadata().get("category"));
            myProduct.setImage_url(product.getImages().toArray(new String[0]));
            products.add(myProduct);
        }
        orderResponse.setProducts(products);
        orderResponse.setAddress(orderDetail.getAddress());
        return orderResponse;
    }
}
