import { Suspense } from "react";

import { Row } from "@/app/lib/ui/slate/Layout";
import { Spacer } from "@/app/lib/ui/slate/Spacer";

import { Banner } from "./Banner/Banner";
import { Panel } from "./Panel/Panel";
import * as s from "./styles.css";
import { LoadingTiles } from "./Tiles/LoadingTiles";
import { Tiles } from "./Tiles/Tiles";
import { fetchBrand } from "./utils";

export async function generateStaticParams() {
  const brands = ["b_a9b3b023"]; // b_f5531819
  return brands.map((token) => ({
    slug: token,
  }));
}

type Props = {
  params: {
    token: string;
  };
};

const Page: React.FC<Props> = async ({ params: { token } }) => {
  const response = await fetchBrand(token);

  if (!response) {
    return null;
  }

  const { name, description, banner_image, profile_image } = response.brand;

  return (
    <div className={s.container}>
      <Banner {...{ banner_image, profile_image }} />
      <Row>
        <Panel {...{ name, description }} />
        <Spacer width="32px" />
        <div className={s.grid}>
          <Suspense fallback={<LoadingTiles />}>
            <Tiles {...{ token }} />
          </Suspense>
        </div>
      </Row>
    </div>
  );
};

export default Page;
