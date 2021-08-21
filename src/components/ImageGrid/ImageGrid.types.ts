export type TImageGridProps = {
  className?: string;
  pageIndex?: number;
  onNextPage?: (() => void) | undefined;
  onPrevPage?: (() => void) | undefined;
};
