package com.erickfelix.productmanagement.service.impl;

import com.erickfelix.productmanagement.infra.exception.ProductNotFoundException;
import com.erickfelix.productmanagement.model.Product;
import com.erickfelix.productmanagement.repository.ProductRepository;
import com.erickfelix.productmanagement.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product not found"));
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product product) {
        return productRepository.findById(id).map(existingProduct -> {
            existingProduct.setName(existingProduct.getName());
            existingProduct.setDescription(existingProduct.getDescription());
            existingProduct.setPrice(existingProduct.getPrice());
            existingProduct.setAvailable(existingProduct.getAvailable());
            return productRepository.save(existingProduct);
        }).orElseGet(() -> {
            product.setId(id);
            return productRepository.save(product);
        });
    }

    @Override
    public void deleteProduct(Long id) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found"));

        productRepository.delete(existingProduct);
    }

    @Override
    public Boolean productExists(Long id) {
        return productRepository.existsById(id);
    }
}
