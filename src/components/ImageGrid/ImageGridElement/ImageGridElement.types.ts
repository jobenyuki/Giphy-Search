import { TGifElementTypes } from '../../../types/gif';

export type TImageGridElementProps = {
  className?: string;
  gifData?: TGifElementTypes | null;
  onClick?: (() => void) | undefined;
};
