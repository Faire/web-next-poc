import { IImage } from "@/app/_lib/types/image";
import { FAIRE_ACCESS_HEADER } from "@/app/_lib/utils/headers";

type FetchBrandResponse = {
  brand: {
    name: string;
    description: string;
    profile_image: IImage;
    banner_image: IImage;
  };
};

export const fetchBrand = async (
  token: string
): Promise<FetchBrandResponse | null> => {
  try {
    const response = await fetch(
      `https://faire-stage.com/api/v2/brand-view/${token}`,
      { headers: FAIRE_ACCESS_HEADER }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
