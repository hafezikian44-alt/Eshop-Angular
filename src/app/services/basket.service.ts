import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { IBascketDto } from '../dtos/basket.dto';
import { IProductDto } from '../dtos/products.dto';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  // authService = inject(AuthService);
  localStorageBasket: string | null = null;
  baskets: IBascketDto[] | null = null;
  localStorageCurrentBasket: string | null = null;
  currentBasket: IBascketDto | null = null;

  constructor() {
    this.localStorageBasket = localStorage.getItem('basckets');
    this.baskets = this.localStorageBasket
      ? JSON.parse(this.localStorageBasket)
      : [];

    this.localStorageCurrentBasket = localStorage.getItem('currentBasket');
    this.currentBasket = this.localStorageCurrentBasket
      ? JSON.parse(this.localStorageCurrentBasket)
      : [];
  }

  addBascketToLocalStorage(basket: IBascketDto) {
    console.log('add basket to local storage');

    // nulish coalesing
    this.baskets = JSON.parse(localStorage.getItem('baskets') ?? '[]');

    const findedBasket = this.baskets?.find(
      (b: IBascketDto) => b.userId === basket.userId,
    );
    if (findedBasket) {
      this.currentBasket = findedBasket;
    } else {
      this.currentBasket = basket;
      this.baskets?.push(basket);
    }
    localStorage.setItem('currentBasket', JSON.stringify(this.currentBasket));
    localStorage.setItem('baskets', JSON.stringify(this.baskets));
    console.log('basket is added to local storage');
  }

  createBascket(userId: string): void {
    console.log('creat basket calling');

    const bascket = {
      id: crypto.randomUUID(),
      userId: userId,
      products: null,
    };
    this.baskets?.push(bascket);
    this.addBascketToLocalStorage(bascket);
  }

  addProductToBasket(product: IProductDto) {
    console.log('addProductToBasket called');

    if (this.currentBasket?.products === null) {
      this.currentBasket.products = [];
    }
    let existingProduct = this.currentBasket?.products?.find(
      (p) => p.id === product?.id,
    );
    if (existingProduct || !this.currentBasket?.products) {
      return;
    } else {
      this.currentBasket.products.push(product);
      console.log('addProductToBasket finished');
      console.log(this.currentBasket.products);
    }
  }
}
