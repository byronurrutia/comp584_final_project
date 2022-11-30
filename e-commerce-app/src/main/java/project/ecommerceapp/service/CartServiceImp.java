package project.ecommerceapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.ecommerceapp.dao.AppUserRepository;
import project.ecommerceapp.dao.ProductRepository;
import project.ecommerceapp.entity.AppUser;
import project.ecommerceapp.entity.Product;

import java.util.ArrayList;
import java.util.HashSet;

@Service
public class CartServiceImp implements CartService{
    @Autowired
    AppUserRepository appUserRepository;

    @Autowired
    ProductRepository productRepository;

    @Override
    public String addProduct(String oktaId, String stripeId) {
        AppUser appUser = appUserRepository.findByOktaId(oktaId);
        if(appUser == null) return "appuser not exist";
        Product product = productRepository.findByProduct_id(stripeId);
        if(product == null) return "product not exist";
        appUser.getCart().add(product);
        appUserRepository.save(appUser);
        return "ok";
    }

    @Override
    public String remove(String oktaId, String stripeId) {
        AppUser appUser = appUserRepository.findByOktaId(oktaId);
        if(appUser == null) return "appuser not exist";
        Product product = productRepository.findByProduct_id(stripeId);
        if(product == null) return "product not exist";
        appUser.getCart().remove(product);
        appUserRepository.save(appUser);
        return "ok";
    }

    @Override
    public String clear(String oktaId, String stripeId) {
        AppUser appUser = appUserRepository.findByOktaId(oktaId);
        if(appUser == null) return "appuser not exist";
        appUser.setCart(new ArrayList<>());
        return "ok";
    }

}
