package com.erickfelix.productmanagement.service.impl;

import com.erickfelix.productmanagement.infra.exception.ProductNotFoundException;
import com.erickfelix.productmanagement.model.Category;
import com.erickfelix.productmanagement.model.Product;
import com.erickfelix.productmanagement.repository.CategoryRepository;
import com.erickfelix.productmanagement.repository.ProductRepository;
import com.erickfelix.productmanagement.service.CategoryService;
import com.erickfelix.productmanagement.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
}
