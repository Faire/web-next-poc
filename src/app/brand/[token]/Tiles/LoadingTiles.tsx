import { LoadingSkeleton } from "@/ui/slate/LoadingSkeleton";

import { NUMBER_OF_COLUMNS } from "../styles.css";

import { TILE_HEIGHT } from "./styles.css";

const NUMBER_OF_ROWS = 2;
const NUMBER_OF_TILES = NUMBER_OF_ROWS * NUMBER_OF_COLUMNS;

export const LoadingTiles: React.FC = () => {
  return new Array(NUMBER_OF_TILES)
    .fill(null)
    .map((_, index) => (
      <LoadingSkeleton key={index} height={`${TILE_HEIGHT}px`} width="100%" />
    ));
};
