package project.ecommerceapp.dto;

import lombok.Data;
import project.ecommerceapp.entity.OrderItem;

import java.math.BigDecimal;
import java.util.Set;

@Data
public class OrderRequest {
    String email;
    String address;
    BigDecimal orderTotal;
    Set<OrderItem> itemList;

}
