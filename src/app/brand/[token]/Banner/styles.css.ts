import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  marginBottom: 64,
});

export const BANNER_DIMENSIONS = {
  width: 1232,
  height: 200,
};

export const banner = style({
  width: "100%",
  height: 200,
  objectFit: "cover",
  objectPosition: "center",
});

export const PROFILE_IMAGE_SIZE = 96;

export const profileImage = style({
  position: "absolute",
  left: 56,
  top: BANNER_DIMENSIONS.height - PROFILE_IMAGE_SIZE / 2,
  borderRadius: "50%",
});
