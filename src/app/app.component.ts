import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { IApiProductsDto } from './dtos/apiProducts.dto';
import { IProductDto } from './dtos/products.dto';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Eshop';
}
