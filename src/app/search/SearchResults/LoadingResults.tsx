import { LoadingSkeleton } from "@/ui/slate/LoadingSkeleton";

import { NUMBER_OF_COLUMNS } from "../styles.css";

const NUMBER_OF_ROWS = 3;
const NUMBER_OF_TILES = NUMBER_OF_ROWS * NUMBER_OF_COLUMNS;

const TILE_HEIGHT = 300;

export const LoadingResults: React.FC = () => {
  return new Array(NUMBER_OF_TILES)
    .fill(null)
    .map((_, index) => (
      <LoadingSkeleton key={index} height={`${TILE_HEIGHT}px`} width="100%" />
    ));
};
