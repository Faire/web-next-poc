import Image from "next/image";
import Link from "next/link";

import { Spacer } from "@/ui/slate/Spacer";
import { Typography } from "@/ui/slate/Typography";

import * as styles from "./styles.css";

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <div className={styles.hero.container}>
        <Image
          className={styles.hero.image}
          src="https://cdn.faire.com/fastly/loggedOutHomePage/hero_xlarge.jpeg"
          alt="Hero image"
          fill
          priority
        />
        <div className={styles.hero.overlay}>
          <Typography variant="displayLSerifRegular" color="white">
            Your one-stop shop for wholesale
          </Typography>
          <Spacer height="24px" />
          <Typography variant="subheadingSansRegular" color="white">
            Shop over <b>100,000</b> independent brands, all in one place
          </Typography>
          <Spacer height="24px" />
          <Link className={styles.hero.button} href="/">
            <Typography>Sign Up to Shop</Typography>
          </Link>
          <Spacer height="16px" />
          <Link className={styles.hero.button} href="/">
            <Typography>Sell on Faire</Typography>
          </Link>
        </div>
      </div>
      {/* Value Props */}
      <div className={styles.values.container}>
        <div className={styles.values.item}>
          <Typography variant="displaySSerifRegular">
            Flexible payment terms
          </Typography>
          <Spacer height="16px" />
          <Typography color="graphite">
            Buy now, pay up to 60 days later - interest-free.
          </Typography>
          <Spacer height="16px" />
          <Link href="/">
            <Typography>Learn more</Typography>
          </Link>
        </div>
        <Spacer width="40px" />
        <div className={styles.values.item}>
          <Typography variant="displaySSerifRegular">
            Brands with low minimums
          </Typography>
          <Spacer height="16px" />
          <Typography color="graphite">
            Discover over 30,000 brands with minimums $100 or less.
          </Typography>
          <Spacer height="16px" />
          <Link href="/">
            <Typography>Shop low minimums</Typography>
          </Link>
        </div>
        <Spacer width="40px" />
        <div className={styles.values.item}>
          <Typography variant="displaySSerifRegular">
            Free returns on opening orders
          </Typography>
          <Spacer height="16px" />
          <Typography color="graphite">
            {
              "We'll give you a prepaid shipping label in case you'd like to send products back."
            }
          </Typography>
          <Spacer height="16px" />
          <Link href="/">
            <Typography>Shop new arrivals</Typography>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
