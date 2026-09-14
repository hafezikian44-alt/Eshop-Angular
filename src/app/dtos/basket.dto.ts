import { IProductDto } from './products.dto';

export interface IBascketDto {
  id: string;
  userId: string;
  products: IProductDto[] | null;
}
