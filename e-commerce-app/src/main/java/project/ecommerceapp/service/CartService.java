package project.ecommerceapp.service;

import project.ecommerceapp.entity.AppUser;
import project.ecommerceapp.entity.Product;

public interface CartService {
    public String addProduct(String oktaId, String stripeId);
    public String remove(String oktaId, String stripeId);
    public String clear(String oktaId, String stripeId);
}
