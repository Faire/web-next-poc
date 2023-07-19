import Image from "next/image";
import Link from "next/link";

import { Spacer } from "@/app/lib/ui/slate/Spacer";
import { Typography } from "@/app/lib/ui/slate/Typography";

import { SearchBar } from "./SearchBar/SearchBar";
import * as s from "./styles.css";

export const TopOfPageContent: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.banner}>
        <Typography color="graphite">
          Shop wholesale online from over 100,000 brands.{" "}
          <Link href="/">Sign up</Link>
        </Typography>
      </div>
      <header className={s.header}>
        <div className={s.content}>
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
          <div className={s.linkContainer}>
            <Spacer width="16px" />
            <div className={s.verticalLine} />
            <Spacer width="16px" />
            <Link className={s.link} href="/">
              <Typography>Sell on Faire</Typography>
            </Link>
            <Spacer width="24px" />
            <Link className={s.link} href="/">
              <Typography>Sign In</Typography>
            </Link>
            <Spacer width="24px" />
            <Link className={s.signUpButton} href="/">
              <Typography color="white">Sign Up to Shop</Typography>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
