package project.ecommerceapp.service;

import com.stripe.exception.*;
import com.stripe.model.Charge;
import project.ecommerceapp.dto.ChargeRequest;

public interface StripeService {
    public Charge charge(ChargeRequest chargeRequest) throws AuthenticationException, InvalidRequestException, APIException, APIConnectionException, CardException;
}
