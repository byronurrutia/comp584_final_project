package project.ecommerceapp.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class OrderResponse {
    String email;
    BigDecimal total;
    List<MyProduct> products;
    String address;
}
