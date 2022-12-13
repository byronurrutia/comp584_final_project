package project.ecommerceapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
@Entity
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String oktaId;
    private String email;
    private String firstName;
    private String lastName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "appUser", orphanRemoval = true)
    private Set<CartItem> cart;

    public void addToCart(CartItem item) {

        if (item != null) {
            if (cart == null) {
                cart = new HashSet<>();
            }

            cart.add(item);
            item.setAppUser(this);
        }
    }
    public void removeFromCart(CartItem item){
        if(cart.contains(item)){
            cart.remove(item);
        }
    }

}
