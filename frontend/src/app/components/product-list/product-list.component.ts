import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../../models/models';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { ErrorHandlerService } from '../../services/error-handler.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    sortCriteria: string = 'name';
    errorMessage: string = '';

    constructor(private productService: ProductService,
        private router: Router,
        private errorHandlerService: ErrorHandlerService,
    ) { }

    fetchProducts(): void {
        this.productService.getAllProducts().subscribe(data => {
            this.products = data;
        });
    }

    ngOnInit(): void {
        this.fetchProducts();
    }

    sortProducts(): void {
        this.products.sort((a, b) => {
          if (this.sortCriteria === 'price') {
            return a.price - b.price;
          } else if (this.sortCriteria === 'category') {
            return a.category.name.localeCompare(b.category.name);
          } else {
            return a.name.localeCompare(b.name);
          }
        });
      }

    createProduct(): void {
        this.router.navigate(['/create']);
    }

    editProduct(id: number): void {
        this.router.navigate(['/edit', id]);
    }

    deleteProduct(id: number): void {
        this.productService.deleteProduct(id).subscribe({
            next: () => this.fetchProducts(),
            error: error => this.errorMessage = this.errorHandlerService.handleError(error),
        });
    }
}