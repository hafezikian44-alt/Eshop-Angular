import { Component, inject, Input, OnInit } from '@angular/core';
import { IProductDto } from '../../dtos/products.dto';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IApiProductsDto } from '../../dtos/apiProducts.dto';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  router = inject(ActivatedRoute);
  productService = inject(ProductService);
  products: IProductDto[] = [];
  selectedProduct?: IProductDto;

  ngOnInit(): void {
    const productId = Number(this.router.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
      this.selectedProduct = this.products.find((p) => p.id === productId);
      console.log(this.selectedProduct);
    });
  }
}
