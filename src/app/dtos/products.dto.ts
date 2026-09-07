import { IReviewsDto } from './reviews.dto';
import { IDimensionsDto } from './dimensions.dto';
import { IMetaDto } from './meta.dto';

export interface IProductDto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDimensionsDto;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReviewsDto[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IMetaDto;
  images: string[];
  thumbnail: string;
}
