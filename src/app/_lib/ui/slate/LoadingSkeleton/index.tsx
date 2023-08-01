import cn from "classnames";

import * as s from "./styles.css";

type Props = {
  /**
   * Class name applied to the svg tag
   */
  className?: string;
  /**
   * Width of the skeleton loader
   */
  width: string;
  /**
   * Height of the skeleton loader
   */
  height: string;
  /**
   * Border radius of the skeleton loader
   */
  borderRadius?: string;
  /**
   * data-test-id applied to the svg tag
   */
  "data-test-id"?: string;
  /**
   * Aspect ratio of the skeleton loader
   */
  aspectRatio?: string;
};

export const LoadingSkeleton: React.FC<Props> = ({
  width,
  height,
  borderRadius,
  className,
  ["data-test-id"]: dataTestId,
  aspectRatio,
}) => {
  const style = {
    width,
    height,
    borderRadius,
    aspectRatio,
  };
  const containerClassName = cn(s.container, className);
  return (
    <div
      className={containerClassName}
      data-test-id={dataTestId}
      {...{ style }}
    >
      <div className={s.staticBackground} {...{ style }}>
        <div className={s.animatedBackground} {...{ style }} />
      </div>
    </div>
  );
};
