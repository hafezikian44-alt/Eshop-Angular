import { Injectable } from '@angular/core';
import { IBascketDto } from '../dtos/basket.dto';
import { IProductDto } from '../dtos/products.dto';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  // authService = inject(AuthService);
  localStorageBasket: string | null = null;
  baskets: IBascketDto[] = [];
  localStorageCurrentBasket: string | null = null;
  currentBasket: IBascketDto = { userId: '', products: [] };
  userId: string = '';

  constructor() {
    this.localStorageBasket = localStorage.getItem('baskets');
    this.baskets = this.localStorageBasket
      ? JSON.parse(this.localStorageBasket)
      : null;

    this.localStorageCurrentBasket = localStorage.getItem('currentBasket');
    this.currentBasket = this.localStorageCurrentBasket
      ? JSON.parse(this.localStorageCurrentBasket)
      : { userId: '', products: [] };
  }
  addBascketToLocalStorage(basket: IBascketDto) {
    console.log('add basket to local storage');

    // nulish coalesing
    this.baskets = JSON.parse(localStorage.getItem('baskets') ?? '[]');

    const findedBasket = this.baskets?.find(
      (b: IBascketDto) => b.userId === basket.userId,
    );
    if (findedBasket) {
      return;
    } else {
      this.baskets?.push(basket);
    }

    localStorage.setItem('baskets', JSON.stringify(this.baskets));
    console.log('basket is added to local storage');
  }
  addCurrentBasketToLocalStorage() {
    localStorage.setItem('currentBasket', JSON.stringify(this.currentBasket));
  }

  createBascket(userId: string) {
    console.log('creat basket calling');

    const basket = {
      userId: userId,
      products: [],
    };

    this.addBascketToLocalStorage(basket);
  }

  getCurrentBasket(id: string) {
    const findedBasket = this.baskets.find((b) => b.userId === id);
    if (findedBasket) {
      this.currentBasket = findedBasket;
    } else {
      this.currentBasket = {
        userId: id,
        products: [],
      };
    }
    this.addCurrentBasketToLocalStorage();
  }

  addProductToBasket(product: IProductDto) {
    const existingProduct = this.currentBasket.products.find(
      (p: IProductDto) => p.id === product.id,
    );
    if (existingProduct) {
      return;
    }
    // this.currentBasket.products.push(product);
    console.log(this.currentBasket);
    console.log(product);
  }

  removeProductFromBasket(product: IProductDto) {
    this.currentBasket.products = this.currentBasket.products.filter(
      (p) => p.id !== product.id,
    );
    this.addCurrentBasketToLocalStorage();
  }
}
