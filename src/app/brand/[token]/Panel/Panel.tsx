import { Spacer } from "@/app/lib/ui/slate/Spacer";
import { Typography } from "@/app/lib/ui/slate/Typography";

import * as s from "./styles.css";

type Props = {
  name: string;
  description: string;
};

export const Panel: React.FC<Props> = ({ name, description }) => {
  return (
    <div className={s.container}>
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
      <button className={s.signUpButton} type="button">
        Sign Up to Shop
      </button>
      <Spacer height="40px" />
      <hr className={s.hr} />
      <Spacer height="40px" />
      <Typography>{description}</Typography>
      <Spacer height="16px" />
      <button className={s.readTheirStoryButton} type="button">
        Read Their Story
      </button>
    </div>
  );
};
