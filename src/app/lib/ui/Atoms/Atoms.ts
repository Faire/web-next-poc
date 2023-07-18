import { animationNames } from "../animations.css";

import { createViewportSpecifiable } from "./__internal__/createViewportSpecifiable";
import {
  BasicAtom,
  ViewportSpecifiableAtom,
} from "./__internal__/sprinkles/Atom";
import {
  AnimationDuration,
  AnimationDelay,
  AnimationTimingFunction,
  AnimationIterationCount,
} from "./__internal__/sprinkles/properties/animationProperties.css";
import {
  BorderStyle,
  BorderWidth,
} from "./__internal__/sprinkles/properties/borderProperties.css";
import { Opacity } from "./__internal__/sprinkles/properties/colorProperties.css";
import { Cursor } from "./__internal__/sprinkles/properties/cursorProperties.css";
import {
  AlignItems,
  Display,
  FlexBasis,
  FlexDirection,
  FlexGrow,
  FlexShrink,
  FlexWrap,
  Gap,
  JustifyContent,
} from "./__internal__/sprinkles/properties/flexProperties.css";
import {
  Overflow,
  TextOverflow,
  WhiteSpace,
} from "./__internal__/sprinkles/properties/fontProperties.css";
import {
  BackgroundPosition,
  BackgroundSize,
  ObjectFit,
  ObjectPosition,
} from "./__internal__/sprinkles/properties/imageProperties.css";
import { Position } from "./__internal__/sprinkles/properties/positionProperties.css";
import {
  BorderRadius,
  Size,
} from "./__internal__/sprinkles/properties/sizeProperties.css";
import {
  Margin,
  Spacing,
} from "./__internal__/sprinkles/properties/spacingProperties.css";
import { StrokeLinecap } from "./__internal__/sprinkles/properties/svgProperties.css";
import {
  LineClamp,
  OverflowWrap,
  TextAlign,
  lineClamp as lineClampAtom,
  TextDecoration,
  WordBreak,
} from "./__internal__/sprinkles/properties/textProperties.css";
import {
  TransitionDelay,
  TransitionDuration,
  TransitionProperty,
  TransitionTimingFunction,
} from "./__internal__/sprinkles/properties/transitionProperties.css";
import { sprinkles } from "./__internal__/sprinkles/sprinkles.css";

export const marginTop: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginTop");
export const marginBottom: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginBottom");
export const marginLeft: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginLeft");
export const marginRight: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginRight");
export const marginBlockStart: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginBlockStart");
export const marginBlockEnd: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginBlockEnd");
export const marginInlineStart: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginInlineStart");
export const marginInlineEnd: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginInlineEnd");
export const marginX: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginX");
export const marginY: ViewportSpecifiableAtom<Margin> =
  createViewportSpecifiable("marginY");
export const padding: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("padding");
export const paddingTop: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingTop");
export const paddingBottom: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingBottom");
export const paddingLeft: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingLeft");
export const paddingRight: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingRight");
export const paddingBlockStart: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingBlockStart");
export const paddingBlockEnd: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingBlockEnd");
export const paddingInlineStart: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingInlineStart");
export const paddingInlineEnd: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingInlineEnd");
export const paddingX: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingX");
export const paddingY: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("paddingY");
export const textAlign: ViewportSpecifiableAtom<TextAlign> =
  createViewportSpecifiable("textAlign");
export const overflow: ViewportSpecifiableAtom<Overflow> =
  createViewportSpecifiable("overflow");
export const textOverflow: ViewportSpecifiableAtom<TextOverflow> =
  createViewportSpecifiable("textOverflow");
export const whiteSpace: ViewportSpecifiableAtom<WhiteSpace> =
  createViewportSpecifiable("whiteSpace");
export const display: ViewportSpecifiableAtom<Display> =
  createViewportSpecifiable("display");
export const flexDirection: ViewportSpecifiableAtom<FlexDirection> =
  createViewportSpecifiable("flexDirection");
export const flexWrap: ViewportSpecifiableAtom<FlexWrap> =
  createViewportSpecifiable("flexWrap");
export const alignItems: ViewportSpecifiableAtom<AlignItems> =
  createViewportSpecifiable("alignItems");
export const justifyContent: ViewportSpecifiableAtom<JustifyContent> =
  createViewportSpecifiable("justifyContent");
export const flexGrow: ViewportSpecifiableAtom<FlexGrow> =
  createViewportSpecifiable("flexGrow");
export const flexShrink: ViewportSpecifiableAtom<FlexShrink> =
  createViewportSpecifiable("flexShrink");
export const flexBasis: ViewportSpecifiableAtom<FlexBasis> =
  createViewportSpecifiable("flexBasis");
export const width: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("width");
export const height: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("height");
export const blockSize: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("blockSize");
export const inlineSize: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("inlineSize");
export const minWidth: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("minWidth");
export const minHeight: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("minHeight");
export const minBlockSize: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("minBlockSize");
export const minInlineSize: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("minInlineSize");
export const maxWidth: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("maxWidth");
export const maxHeight: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("maxHeight");
export const maxBlockSize: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("maxBlockSize");
export const maxInlineSize: ViewportSpecifiableAtom<Size> =
  createViewportSpecifiable("maxInlineSize");
export const top: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("top");
export const bottom: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("bottom");
export const left: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("left");
export const right: ViewportSpecifiableAtom<Spacing> =
  createViewportSpecifiable("right");
export const objectFit: BasicAtom<ObjectFit> = (objectFit) =>
  sprinkles({ objectFit });
export const objectPosition: BasicAtom<ObjectPosition> = (objectPosition) =>
  sprinkles({ objectPosition });
export const backgroundPosition: BasicAtom<BackgroundPosition> = (
  backgroundPosition
) => sprinkles({ backgroundPosition });
export const backgroundSize: BasicAtom<BackgroundSize> = (backgroundSize) =>
  sprinkles({ backgroundSize });
export const position: BasicAtom<Position> = (position) =>
  sprinkles({ position });
export const overflowWrap: BasicAtom<OverflowWrap> = (overflowWrap) =>
  sprinkles({ overflowWrap });
export const lineClamp: BasicAtom<LineClamp> = (lineClampVal) =>
  lineClampAtom[lineClampVal];
export const animationName: BasicAtom<keyof typeof animationNames> = (
  animationName
) => animationNames[animationName];
export const animationDuration: BasicAtom<AnimationDuration> = (
  animationDuration
) => sprinkles({ animationDuration });
export const animationTimingFunction: BasicAtom<AnimationTimingFunction> = (
  animationTimingFunction
) => sprinkles({ animationTimingFunction });
export const animationDelay: BasicAtom<AnimationDelay> = (animationDelay) =>
  sprinkles({ animationDelay });
export const animationIterationCount: BasicAtom<AnimationIterationCount> = (
  animationIterationCount
) => sprinkles({ animationIterationCount });
export const strokeLinecap: BasicAtom<StrokeLinecap> = (strokeLinecap) =>
  sprinkles({ strokeLinecap });
export const borderRadius: BasicAtom<BorderRadius> = (borderRadius) =>
  sprinkles({ borderRadius });
export const borderStyle: BasicAtom<BorderStyle> = (borderStyle) =>
  sprinkles({ borderStyle });
export const borderBlockStartStyle: BasicAtom<BorderStyle> = (
  borderBlockStartStyle
) => sprinkles({ borderBlockStartStyle });
export const borderBlockEndStyle: BasicAtom<BorderStyle> = (
  borderBlockEndStyle
) => sprinkles({ borderBlockEndStyle });
export const borderInlineStartStyle: BasicAtom<BorderStyle> = (
  borderInlineStartStyle
) => sprinkles({ borderInlineStartStyle });
export const borderInlineEndStyle: BasicAtom<BorderStyle> = (
  borderInlineEndStyle
) => sprinkles({ borderInlineEndStyle });
export const borderBlockStyle: BasicAtom<BorderStyle> = (borderBlockStyle) => {
  return sprinkles({ borderBlockStyle });
};
export const borderInlineStyle: BasicAtom<BorderStyle> = (borderInlineStyle) =>
  sprinkles({ borderInlineStyle });
export const borderWidth: BasicAtom<BorderWidth> = (borderWidth) =>
  sprinkles({ borderWidth });
export const borderBlockStartWidth: BasicAtom<BorderWidth> = (
  borderBlockStartWidth
) => sprinkles({ borderBlockStartWidth });
export const borderBlockEndWidth: BasicAtom<BorderWidth> = (
  borderBlockEndWidth
) => sprinkles({ borderBlockEndWidth });
export const borderInlineStartWidth: BasicAtom<BorderWidth> = (
  borderInlineStartWidth
) => sprinkles({ borderInlineStartWidth });
export const borderInlineEndWidth: BasicAtom<BorderWidth> = (
  borderInlineEndWidth
) => sprinkles({ borderInlineEndWidth });
export const borderBlockWidth: BasicAtom<BorderWidth> = (borderBlockWidth) =>
  sprinkles({ borderBlockWidth });
export const borderInlineWidth: BasicAtom<BorderWidth> = (borderInlineWidth) =>
  sprinkles({ borderInlineWidth });
export const textDecoration: BasicAtom<TextDecoration> = (textDecoration) =>
  sprinkles({ textDecoration });
export const gap: ViewportSpecifiableAtom<Gap> =
  createViewportSpecifiable("gap");
export const wordBreak: BasicAtom<WordBreak> = (wordBreak) =>
  sprinkles({ wordBreak });
export const cursor: BasicAtom<Cursor> = (cursor) => sprinkles({ cursor });
export const opacity: BasicAtom<Opacity> = (opacity) => sprinkles({ opacity });
export const transitionProperty: BasicAtom<TransitionProperty> = (
  transitionProperty
) => sprinkles({ transitionProperty });
export const transitionDuration: BasicAtom<TransitionDuration> = (
  transitionDuration
) => sprinkles({ transitionDuration });
export const transitionTimingFunction: BasicAtom<TransitionTimingFunction> = (
  transitionTimingFunction
) => sprinkles({ transitionTimingFunction });
export const transitionDelay: BasicAtom<TransitionDelay> = (transitionDelay) =>
  sprinkles({ transitionDelay });
