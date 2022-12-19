package project.ecommerceapp.service;

import project.ecommerceapp.dto.OrderRequest;

public interface OrderService {
    String placeOrder(OrderRequest orderRequest);
}
