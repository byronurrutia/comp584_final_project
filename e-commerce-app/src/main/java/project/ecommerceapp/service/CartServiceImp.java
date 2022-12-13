package project.ecommerceapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.ecommerceapp.dao.AppUserRepository;
import project.ecommerceapp.dao.CartItemRepository;
import project.ecommerceapp.dao.DatabaseProductRepository;
import project.ecommerceapp.entity.AppUser;
import project.ecommerceapp.entity.CartItem;
import project.ecommerceapp.entity.DatabaseProduct;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class CartServiceImp implements CartService{
    @Autowired
    AppUserRepository appUserRepository;

    @Autowired
    DatabaseProductRepository productRepository;

    @Autowired
    CartItemRepository cartItemRepository;
    @Override
    public String addProduct(String oktaId, String stripeId) {
        AppUser appUser = appUserRepository.findByOktaId(oktaId);
        if(appUser == null) return "appuser not exist";
        DatabaseProduct product = productRepository.findByProductId(stripeId);
        if(product == null) return "product not exist";
        CartItem item = new CartItem();
        item.setProductId(stripeId);
        appUser.addToCart(item);
        appUserRepository.save(appUser);
        return "ok";
    }

    @Override
    public String remove(String oktaId, String stripeId) {
        AppUser appUser = appUserRepository.findByOktaId(oktaId);
        if(appUser == null) return "appuser not exist";
        List<CartItem> items = cartItemRepository.findCartItemByProductId(stripeId);
        CartItem item = items.size() == 0 ? null : items.get(0);
        if(item == null) return "product not exist";
        appUser.removeFromCart(item);
        appUserRepository.save(appUser);
        return "ok";
    }

    @Override
    public String clear(String oktaId, String stripeId) {
        // not in used
        return "ok";
    }

}
