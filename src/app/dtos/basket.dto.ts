import { IProductDto } from './products.dto';

export interface IBascketDto {
  userId: string;
  products: IProductDto[];
}
