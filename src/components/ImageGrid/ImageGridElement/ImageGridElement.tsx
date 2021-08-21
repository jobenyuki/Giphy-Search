import React, { memo } from 'react';
import classnames from 'classnames';
import { TImageGridElementProps } from './ImageGridElement.types';
import s from './ImageGridElement.module.scss';

export const ImageGridElement: React.FC<TImageGridElementProps> = memo(
  ({ className = '', gifData = null, onClick = undefined, ...rest }: TImageGridElementProps) => {
    return (
      <div className={classnames(s.imageGridElementContainer, className)} {...rest}>
        {gifData && (
          <img
            className={s.imageGridElementImage}
            src={gifData.images.preview_gif.url}
            onClick={onClick}
            width="100%"
            height="100%"
            alt=""
          />
        )}
      </div>
    );
  },
);
