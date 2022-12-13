package project.ecommerceapp.dto;

import lombok.Data;

@Data
public class RegisterRequest {

    private String oktaId;
    private String email;
    private String firstName;
    private String lastName;

}
