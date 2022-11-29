package project.ecommerceapp.controller;

import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import project.ecommerceapp.dto.ChargeRequest;
import project.ecommerceapp.service.StripeService;

@RestController
@RequestMapping("/api/v1/stripe")
public class APIController {

    @Value("${STRIPE_PUBLIC_KEY}")
    private String stripePublicKey;

    @Autowired
    private StripeService paymentsService;

    @GetMapping("/hello")
    public String hello(){
        return "helloworld" + stripePublicKey;
    }

    @PostMapping("/checkout")
    public String checkout(Model model){
        model.addAttribute("amount", 50*100);//in cents
        model.addAttribute("stripePublicKey",stripePublicKey);
        model.addAttribute("currency", ChargeRequest.Currency.USD);
        return "checkout";
    }

    @PostMapping("/charge")
    public String charge(ChargeRequest chargeRequest,Model model) throws StripeException{
        chargeRequest.setDescription("customer charge");
        chargeRequest.setCurrency(ChargeRequest.Currency.USD);
        Charge charge = paymentsService.charge(chargeRequest);
        model.addAttribute("id", charge.getId());
        model.addAttribute("status", charge.getStatus());
        model.addAttribute("chargeId", charge.getId());
        model.addAttribute("balance_transaction", charge.getBalanceTransaction());
        return "result";
    }

    @ExceptionHandler(StripeException.class)
    public String handleError(Model model, StripeException ex) {
        model.addAttribute("error", ex.getMessage());
        return "result";
    }
}
