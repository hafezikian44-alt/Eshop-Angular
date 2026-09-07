import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IApiProductsDto } from '../../dtos/apiProducts.dto';
import { IProductDto } from '../../dtos/products.dto';
import { NgFor } from '@angular/common';
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

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      return (this.products = response.products);
    });
  }
}
