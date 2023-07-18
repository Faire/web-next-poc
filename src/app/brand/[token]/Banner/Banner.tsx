import Image from "next/image";

import { IImage } from "@/app/lib/types/image";

import * as s from "./styles.css";

type Props = {
  banner_image: IImage;
  profile_image: IImage;
};

export const Banner: React.FC<Props> = async ({
  banner_image,
  profile_image,
}) => {
  return (
    <div className={s.container}>
      <Image
        className={s.banner}
        src={banner_image.url}
        alt="Banner image"
        width={s.BANNER_DIMENSIONS.width}
        height={s.BANNER_DIMENSIONS.height}
        priority
      />
      <Image
        className={s.profileImage}
        src={profile_image.url}
        alt="Profile image"
        width={s.PROFILE_IMAGE_SIZE}
        height={s.PROFILE_IMAGE_SIZE}
        priority
      />
    </div>
  );
};
