import { Component, inject, OnInit } from '@angular/core';
import { IProductDto } from '../../dtos/products.dto';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  basketService = inject(BasketService);
  authService = inject(AuthService);
  router = inject(ActivatedRoute);
  productService = inject(ProductService);
  products: IProductDto[] = [];
  selectedProduct?: IProductDto;
  isUserLoggedIn = this.authService.isUserLoggedIn;

  ngOnInit(): void {
    const productId = Number(this.router.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;

      this.selectedProduct = this.products.find((p) => p.id === productId);

      console.log(this.selectedProduct);
    });
  }
  onAddToBasket() {
    if (this.selectedProduct) {
      this.basketService.addProductToBasket(this.selectedProduct);
    }
  }
}
