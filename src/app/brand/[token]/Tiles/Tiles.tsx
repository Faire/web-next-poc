import { ProductTile } from "@/app/lib/components/ProductTile/ProductTile";

import { fetchFeaturedTiles } from "./utils";

type Props = {
  token: string;
};

export const Tiles: React.FC<Props> = async ({ token }) => {
  const response = await fetchFeaturedTiles(token);

  if (!response) {
    return null;
  }

  return (
    <>
      {response.product_tiles.map((tile: any) => (
        <ProductTile key={tile.product?.token} tile={tile} width={186} />
      ))}
    </>
  );
};
