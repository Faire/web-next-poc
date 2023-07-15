import { ProductTile } from "./ProductTile/ProductTile";
import { searchProducts } from "./utils";

type Props = {
  q: string;
};

export const SearchResults: React.FC<Props> = async ({ q }) => {
  const productsResponse = await searchProducts(q);

  if (!productsResponse) {
    return null;
  }

  return (
    <>
      {productsResponse.product_tiles.map((tile: any) => (
        <ProductTile
          key={tile.product?.token}
          tile={tile}
          brand={
            productsResponse.brands_by_token[tile.product?.brand_token ?? ""]!
          }
        />
      ))}
    </>
  );
};
