import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Category, Product } from '../../models/models';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { ErrorHandlerService } from '../../services/error-handler.service';

@Component({
	selector: 'app-product-form',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './product-form.component.html',
	styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
	product: Product = {
		id: 0,
		name: '',
		description: '',
		price: 0,
		available: false,
		category: { id: 0, name: '' }
	};
	categories: Category[] = [];
	editMode = false;
	errorMessage: string = '';

	constructor(
		private productService: ProductService,
		private categoryService: CategoryService,
		private errorHandlerService: ErrorHandlerService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');
		if (id) {
			this.editMode = true;
			this.productService.getProductById(+id).subscribe(data => {
				this.product = data;
			});
		}

		this.categoryService.getAllCategories()
		.subscribe(categories => {
			this.categories = this.getParentOrSoloCategories(categories);
		  });
	  }
	
	  getParentOrSoloCategories(categories: Category[]): Category[] {
		const parentIds = new Set(categories.flatMap(category => category.subCategories?.map(sub => sub.id)));
		return categories.filter(category => category.subCategories && category.subCategories.length > 0 || !parentIds.has(category.id));
	  }

	saveProduct(): void {
		if (this.editMode) {
			this.productService.updateProduct(this.product.id, this.product).subscribe({
				next: () => this.router.navigate(['/products']),
				error: error => this.errorMessage = this.errorHandlerService.handleError(error),
			});
		} else {
			this.productService.createProduct(this.product).subscribe(() => {
				this.router.navigate(['/products']);
			});
		}
	}
}
