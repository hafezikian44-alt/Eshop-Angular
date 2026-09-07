import { IProductDto } from './products.dto';

export interface IApiProductsDto {
  limit: number;
  products: IProductDto[];
  skip: number;
  total: number;
}
