import Image from "next/image";
import Link from "next/link";

import { Spacer } from "@/ui/slate/Spacer";
import { Typography } from "@/ui/slate/Typography";

import { SearchBar } from "./SearchBar/SearchBar";
import * as styles from "./styles.css";

export const TopOfPageContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Typography color="graphite">
          Shop wholesale online from over 100,000 brands.{" "}
          <Link href="/">Sign up</Link>
        </Typography>
      </div>
      <header className={styles.header}>
        <div className={styles.content}>
          <Link href="/">
            <Image
              src="https://cdn.faire.com/static/logo.svg"
              alt="Faire logo"
              width={104}
              height={20}
            />
          </Link>
          <Spacer width="24px" />
          <SearchBar />
          <div className={styles.linkContainer}>
            <Spacer width="16px" />
            <div className={styles.verticalLine} />
            <Spacer width="16px" />
            <Link className={styles.link} href="/">
              <Typography>Sell on Faire</Typography>
            </Link>
            <Spacer width="24px" />
            <Link className={styles.link} href="/">
              <Typography>Sign In</Typography>
            </Link>
            <Spacer width="24px" />
            <Link className={styles.signUpButton} href="/">
              <Typography color="white">Sign Up to Shop</Typography>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
