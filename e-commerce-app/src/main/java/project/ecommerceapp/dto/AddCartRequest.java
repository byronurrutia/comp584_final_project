package project.ecommerceapp.dto;

import lombok.Data;

@Data
public class AddCartRequest {
    private String oktaId;
    private String stripeId;
}
