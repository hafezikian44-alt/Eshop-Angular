import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiProductsDto } from '../dtos/apiProducts.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productHttp = inject(HttpClient);
  getProducts() {
    return this.productHttp.get<IApiProductsDto>(
      'https://dummyjson.com/products',
    );
  }
}
