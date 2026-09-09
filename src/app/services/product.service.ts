import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiProductsDto } from '../dtos/apiProducts.dto';
import { testProductsData } from '../dbs/test-products.db';
import { IProductDto } from '../dtos/products.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productHttp = inject(HttpClient);
  private productsDb: IProductDto[] = testProductsData;

  getProducts() {
    return this.productHttp.get<IApiProductsDto>(
      'https://dummyjson.com/products',
    );
  }

  getProductsFromDb() {
    return this.productsDb;
  }
}
