package project.ecommerceapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.ecommerceapp.dao.AppUserRepository;
import project.ecommerceapp.dto.RegisterRequest;
import project.ecommerceapp.entity.AppUser;

import java.util.ArrayList;
import java.util.HashSet;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("584final/api/v1/user")
public class UserController {

    @Autowired
    AppUserRepository appUserRepository;

    @PostMapping("/addUser")
    public String addUser(@RequestBody RegisterRequest registerRequest){

        if (appUserRepository.findByOktaId(registerRequest.getOktaId()) == null) {
            AppUser appUser = new AppUser();
            appUser.setEmail(registerRequest.getEmail());
            appUser.setCart(new HashSet<>());
            appUser.setFirstName(registerRequest.getFirstName());
            appUser.setLastName(registerRequest.getLastName());
            appUser.setOktaId(registerRequest.getOktaId());
            appUserRepository.save(appUser);
            return "ok";
        }
        return "already there";

    }
}
