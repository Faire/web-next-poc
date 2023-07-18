import Image from "next/image";
import Link from "next/link";

import { IProductTile } from "@/app/lib/types/productTile";
import { Column, Row } from "@/ui/slate/Layout";
import { Spacer } from "@/ui/slate/Spacer";
import { Typography } from "@/ui/slate/Typography";

import Lock from "./Lock.svg";
import * as s from "./styles.css";

const LOCK_ICON_SIZE = 16;

type Props = {
  tile: IProductTile;
  width: number;
  brand?: { name: string };
};

export const ProductTile: React.FC<Props> = ({ tile, width, brand }) => {
  return (
    <Link href={`/product/${tile.product.token}`}>
      <Column align="center" className={s.container}>
        <Image
          className={s.image}
          src={tile.best_image?.url ?? ""}
          alt="Product Image"
          width={width}
          height={width}
        />
        <div
          className={s.productDetailsContainer}
          style={brand ? { borderBottom: s.BORDER } : {}}
        >
          <div className={s.productNameWrapper}>
            <Typography variant="paragraphSansMedium">
              {truncate(tile.product.name, 40)}
            </Typography>
          </div>
          <Spacer height="4px" />
          <Row align="center">
            <Typography>
              MSRP{" "}
              {formatMoney(tile.min_option_retail_price?.amount_cents ?? 0)}
            </Typography>
            <Spacer width="8px" />
            <Image
              src={Lock}
              width={LOCK_ICON_SIZE}
              height={LOCK_ICON_SIZE}
              alt="Lock icon"
            />
          </Row>
        </div>
        {brand ? (
          <div className={s.brandNameContainer}>
            <Typography variant="paragraphSansMedium">
              {truncate(brand.name, 29)}
            </Typography>
          </div>
        ) : null}
      </Column>
    </Link>
  );
};

const formatMoney = (amount: number) => {
  return `$${(amount / 100).toFixed(2)}`;
};

const truncate = (str: string, n: number) => {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
};
