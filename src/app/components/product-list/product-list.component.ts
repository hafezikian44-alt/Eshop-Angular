import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IApiProductsDto } from '../../dtos/apiProducts.dto';
import { IProductDto } from '../../dtos/products.dto';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  products: IProductDto[] = [];
  private router = inject(Router);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      if (response) {
        this.products = response.products;
      } else {
        this.products = this.productService.getProductsFromDb();
      }
    });
  }

  onProductDetails(id: number) {
    this.router.navigate([`products/`, id]);
  }
}
