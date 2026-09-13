import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { IBascketDto } from '../dtos/basket.dto';
import { IProductDto } from '../dtos/products.dto';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  authService = inject(AuthService);
  localStorageBasket: string | null = null;
  bascket: IBascketDto | null = null;

  constructor() {
    this.localStorageBasket = localStorage.getItem('bascket');
    if (this.localStorageBasket) {
      this.bascket = JSON.parse(this.localStorageBasket);
    }
  }

  addBascketToLocalStorage(basket: IBascketDto) {
    // nulish coalesing
    const baskets = JSON.parse(localStorage.getItem('baskets') ?? '');
    if (baskets && baskets.length !== 0) {
      const findedBasket = baskets.find(
        (b: IBascketDto) => b.userId === basket.userId,
      );

      if (!findedBasket) {
        baskets.push(basket);
      }
      localStorage.setItem('baskets', JSON.stringify(baskets));
    }
  }

  createBascket(userId: string): void {
    this.bascket = {
      id: crypto.randomUUID(),
      userId: userId,
      products: null,
    };
    this.addBascketToLocalStorage(this.bascket);
  }

  // addProductToBasket(product: IProductDto | undefined) {
  //   let existingProduct = this.basket.products.find(
  //     (p) => p.id === product?.id,
  //   );
  //   if (existingProduct) {
  //     return;
  //   }
  //   let currentUserId = this.authService.currenUser?.id;
  // }
}
