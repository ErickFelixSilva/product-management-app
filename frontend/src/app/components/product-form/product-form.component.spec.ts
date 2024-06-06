import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormComponent } from './product-form.component';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { mockActivatedRoute, mockCategoryService, mockErrorHandlerService, mockProductService, mockRouter } from '../../models/test-mocks';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFormComponent],
      providers: [
        { provide: ProductService, useValue: mockProductService},
        { provide: CategoryService, useValue: mockCategoryService},
        { provide: ErrorHandlerService, useValue: mockErrorHandlerService},
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        },
        {
          provide: Router,
          useValue: mockRouter
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
