import { Spacer } from "@/ui/slate/Spacer";
import { Typography } from "@/ui/slate/Typography";

import * as styles from "./styles.css";

type Props = {
  name: string;
  description: string;
};

export const Panel: React.FC<Props> = ({ name, description }) => {
  return (
    <div className={styles.container}>
      <Typography variant="displaySSerifRegular">
        Purchase
        <br />
        {name}
        <br />
        for your store
      </Typography>
      <Spacer height="16px" />
      <Typography variant="subheadingSansRegular" color="#757575">
        Discover thousands of independent wholesale vendors in the Faire
        marketplace.
      </Typography>
      <Spacer height="32px" />
      <button className={styles.signUpButton} type="button">
        Sign Up to Shop
      </button>
      <Spacer height="40px" />
      <hr className={styles.hr} />
      <Spacer height="40px" />
      <Typography>{description}</Typography>
      <Spacer height="16px" />
      <button className={styles.readTheirStoryButton} type="button">
        Read Their Story
      </button>
    </div>
  );
};
