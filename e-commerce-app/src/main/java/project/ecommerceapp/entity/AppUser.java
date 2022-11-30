package project.ecommerceapp.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

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

    @OneToMany
    private List<Product> cart;

}
