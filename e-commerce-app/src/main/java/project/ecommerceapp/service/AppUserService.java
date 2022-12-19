package project.ecommerceapp.service;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import project.ecommerceapp.dao.AppUserRepository;
import project.ecommerceapp.entity.AppUser;
import project.ecommerceapp.entity.CartItem;
import project.ecommerceapp.entity.ConfirmationToken;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MSG = "username %s not found";
    private final AppUserRepository appUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    private static Logger logger = LoggerFactory.getLogger(AppUserService.class);

    @Override
    public AppUser loadUserByUsername(String username) throws UsernameNotFoundException {
        return appUserRepository.findByUsername(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                String.format(USER_NOT_FOUND_MSG,username)));
    }

    public String signUpUser(AppUser appUser){


        boolean userExists = appUserRepository.findByUsername(appUser.getUsername())
                .isPresent();

        if (userExists){
            throw new IllegalStateException("username already exist");
        }

        AppUser appUser1 = appUserRepository.findAppUserByEmail(appUser.getEmail());
        if(appUser1 != null){
            String encodedPassword = bCryptPasswordEncoder.encode(appUser.getPassword());
            appUser1.setAppUserRole(appUser.getAppUserRole());
            appUser1.setUsername(appUser.getUsername());
            appUser1.setEnabled(appUser.getEnabled());
            appUser1.setLastName(appUser.getLastName());
            appUser1.setDisplayName(appUser.getDisplayName());
            appUser1.setFirstName(appUser.getFirstName());
            appUser1.setPassword(encodedPassword);

            //logger.info(appUser.getUserprofile().getFirstName());

            appUserRepository.save(appUser1);

            String token = UUID.randomUUID().toString();
            // creates a token and save with confirmationtokenservice
            ConfirmationToken confirmationToken = new ConfirmationToken(
                    token,
                    LocalDateTime.now(),
                    LocalDateTime.now().plusMinutes(15),
                    appUser1
            );

            confirmationTokenService.saveConfirmationToken(confirmationToken);
            return token;
        }

        String encodedPassword = bCryptPasswordEncoder.encode(appUser.getPassword());

        appUser.setPassword(encodedPassword);

        //logger.info(appUser.getUserprofile().getFirstName());

        appUserRepository.save(appUser);

        String token = UUID.randomUUID().toString();
        // creates a token and save with confirmationtokenservice
        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                appUser
        );

        confirmationTokenService.saveConfirmationToken(confirmationToken);
        return token;
    }


    public void enableAppUser(String username) {
        appUserRepository.findByUsername(username).get().setEnabled(true);
    }
}