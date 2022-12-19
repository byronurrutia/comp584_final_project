package project.ecommerceapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.ecommerceapp.dao.AppUserRepository;
import project.ecommerceapp.dao.OrderDetailsRepository;
import project.ecommerceapp.dto.OrderRequest;
import project.ecommerceapp.entity.AppUser;
import project.ecommerceapp.entity.OrderDetail;
import project.ecommerceapp.entity.OrderItem;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    AppUserService appUserService;
    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    @Autowired
    AppUserRepository appUserRepository;



    @Override
    public String placeOrder(OrderRequest orderRequest) {
        String email = orderRequest.getEmail();
        AppUser appUser = appUserRepository.findAppUserByEmail(email);
        if(appUser == null){
            appUser = new AppUser();
            appUser.setEmail(email);
            appUser.setOrderDetails(new HashSet<>());
            appUserRepository.save(appUser);
        }

        String orderId = UUID.randomUUID().toString();
        OrderDetail orderDetail = new OrderDetail();
        orderDetail.setOrderId(orderId);
        orderDetail.setTotalPrice(orderRequest.getOrderTotal());
        orderDetail.setAppUser3(appUser);
        orderDetail.setAddress(orderRequest.getAddress());
        Set<OrderItem> items = new HashSet<>();
        for(OrderItem item: orderRequest.getItemList()){
            items.add(item);
            item.setOrderDetail(orderDetail);
        }
        orderDetail.setOrderItems(items);
        appUser.addOrder(orderDetail);
        orderDetailsRepository.save(orderDetail);

        return orderId;
    }
}
