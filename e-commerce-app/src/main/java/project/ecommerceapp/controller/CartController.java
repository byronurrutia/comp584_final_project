package project.ecommerceapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.ecommerceapp.dao.AppUserRepository;
import project.ecommerceapp.dto.AddCartRequest;
import project.ecommerceapp.entity.Product;
import project.ecommerceapp.service.CartService;
import project.ecommerceapp.service.StripeService;

import java.util.List;

@RestController
@RequestMapping("584final/api/v1/cart")
public class CartController {

    @Autowired
    CartService cartService;
    @Autowired
    AppUserRepository appUserRepository;

    @PostMapping("/add")
    public String addCart(@RequestBody AddCartRequest addCartRequest){
        return cartService.addProduct(addCartRequest.getOktaId(),addCartRequest.getStripeId());
    }

    @PostMapping("/remove")
    public String remove(@RequestBody AddCartRequest addCartRequest){
        return cartService.remove(addCartRequest.getOktaId(), addCartRequest.getStripeId());
    }

    @PostMapping("/clear")
    public String clear(@RequestBody AddCartRequest addCartRequest){
        return cartService.clear(addCartRequest.getOktaId(),addCartRequest.getStripeId());
    }

    @GetMapping("/loadCart")
    public List<Product> loadCart(@RequestBody String oktaId){
        return appUserRepository.findByOktaId(oktaId).getCart();
    }


}
