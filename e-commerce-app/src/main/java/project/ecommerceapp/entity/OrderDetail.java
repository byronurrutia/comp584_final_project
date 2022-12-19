package project.ecommerceapp.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Set;

@Getter
@Setter
@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal totalPrice;

    private String address;

    private String orderId;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "orderDetail")
    private Set<OrderItem> orderItems;

    @ManyToOne
    @JoinColumn(name = "appUser_id")
    private AppUser appUser3;
}
