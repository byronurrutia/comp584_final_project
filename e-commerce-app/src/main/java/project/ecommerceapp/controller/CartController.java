package project.ecommerceapp.controller;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Price;
import com.stripe.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import project.ecommerceapp.dao.AppUserRepository;
import project.ecommerceapp.dto.AddCartRequest;
import project.ecommerceapp.dto.MyProduct;
import project.ecommerceapp.entity.CartItem;
import project.ecommerceapp.entity.DatabaseProduct;
import project.ecommerceapp.service.CartService;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("584final/api/v1/cart")
public class CartController {

    @Value("${STRIPE_SECRET_KEY}")
    private String secretKey;

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

    @GetMapping("/load")
    public List<MyProduct> loadCart(@RequestBody String oktaId) throws StripeException {
        List<MyProduct> shoppingcart = new ArrayList<>();
        Set<CartItem> list = appUserRepository.findByOktaId(oktaId).getCart();
        Stripe.apiKey = secretKey;
        for(CartItem item : list){
            Product product = Product.retrieve(item.getProductId());
            MyProduct myProduct = new MyProduct();
            myProduct.setCategory(product.getMetadata().get("category"));
            myProduct.setProductName(product.getName());
            myProduct.setDescription(product.getDescription());
            myProduct.setPrice(Price.retrieve(product.getDefaultPrice()).getUnitAmount());
            myProduct.setImage_url(product.getImages().toArray(new String[0]));
            myProduct.setId(product.getId());
            shoppingcart.add(myProduct);
        }
        return shoppingcart;
    }


}
