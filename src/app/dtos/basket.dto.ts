import { IProductDto } from './products.dto';

export interface ICurtDto {
  userId: string;
  userCurt: IProductDto[];
}
