import { IImage } from "@/app/lib/types/image";

type FetchFeaturedTilesResponse = {
  product_tiles: {
    product: {
      name: string;
    };
    best_image: IImage;
  }[];
};

export const fetchFeaturedTiles = async (
  token: string
): Promise<FetchFeaturedTilesResponse | null> => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/v2/products/search/brand/${token}/featured-lean-product-tiles?timezone=America%2FToronto&pageSize=8&locale=en`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
