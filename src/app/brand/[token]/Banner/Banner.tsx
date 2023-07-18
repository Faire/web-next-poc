import Image from "next/image";

import { IImage } from "@/app/lib/types/image";

import * as styles from "./styles.css";

type Props = {
  banner_image: IImage;
  profile_image: IImage;
};

export const Banner: React.FC<Props> = async ({
  banner_image,
  profile_image,
}) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.banner}
        src={banner_image.url}
        alt="Banner image"
        width={styles.BANNER_DIMENSIONS.width}
        height={styles.BANNER_DIMENSIONS.height}
        priority
      />
      <Image
        className={styles.profileImage}
        src={profile_image.url}
        alt="Profile image"
        width={styles.PROFILE_IMAGE_SIZE}
        height={styles.PROFILE_IMAGE_SIZE}
        priority
      />
    </div>
  );
};
