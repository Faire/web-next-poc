import { IImage } from "@/app/lib/types/image";

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
      `http://localhost:4000/api/v2/brand-view/${token}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
