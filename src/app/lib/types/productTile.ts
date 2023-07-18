import { IImage } from "./image";
import { IFaireMoney } from "./money";

export type IProduct = {
  token: string;
  name: string;
};

export type IProductTile = {
  product: IProduct;
  best_image: IImage;
  min_option_retail_price: IFaireMoney;
};
