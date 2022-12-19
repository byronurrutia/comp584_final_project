package project.ecommerceapp.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@Setter
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String imageUrl;


    private BigDecimal unitPrice;


    //private int quantity;


    private String productId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrderDetail orderDetail;

}