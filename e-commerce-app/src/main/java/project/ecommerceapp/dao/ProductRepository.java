package project.ecommerceapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import project.ecommerceapp.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findByProduct_id(String id);
}