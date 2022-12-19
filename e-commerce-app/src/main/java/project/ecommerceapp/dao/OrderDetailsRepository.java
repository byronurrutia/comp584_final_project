package project.ecommerceapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import project.ecommerceapp.entity.OrderDetail;

public interface OrderDetailsRepository extends JpaRepository<OrderDetail, Long> {
    OrderDetail findByOrderId(String orderId);
}