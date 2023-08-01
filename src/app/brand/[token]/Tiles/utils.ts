import { IImage } from "@/app/_lib/types/image";
import { FAIRE_ACCESS_HEADER } from "@/app/_lib/utils/headers";

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
      `https://faire-stage.com/api/v2/products/search/brand/${token}/featured-lean-product-tiles?timezone=America%2FToronto&pageSize=8&locale=en`,
      { headers: FAIRE_ACCESS_HEADER }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
