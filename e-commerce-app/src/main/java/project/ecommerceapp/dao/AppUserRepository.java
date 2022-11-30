package project.ecommerceapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import project.ecommerceapp.entity.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByOktaId(String id);
}