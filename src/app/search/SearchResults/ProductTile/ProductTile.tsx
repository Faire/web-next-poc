import Image from "next/image";
import Link from "next/link";

import { Column, Row } from "@/ui/slate/Layout";
import { Spacer } from "@/ui/slate/Spacer";
import { Typography } from "@/ui/slate/Typography";

import Lock from "./Lock.svg";
import * as styles from "./styles.css";

const IMAGE_SIZE = 246;
const LOCK_ICON_SIZE = 16;

type Props = {
  tile: any;
  brand: any;
};

export const ProductTile: React.FC<Props> = ({ tile, brand }) => {
  const product = tile.product!;
  return (
    <Link href={`/product/${product.token}`}>
      <Column align="center" className={styles.container}>
        <Image
          src={tile.best_image?.url ?? ""}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          alt="Product Image"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.productDetailsContainer}>
          <div className={styles.productNameWrapper}>
            <Typography variant="paragraphSansMedium">
              {product.name}
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
        <div className={styles.brandNameContainer}>
          <Typography variant="paragraphSansMedium">{brand.name}</Typography>
        </div>
      </Column>
    </Link>
  );
};

const formatMoney = (amount: number) => {
  return `$${(amount / 100).toFixed(2)}`;
};
