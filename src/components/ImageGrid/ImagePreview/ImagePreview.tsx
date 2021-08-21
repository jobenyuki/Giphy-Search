import React, { memo } from 'react';
import classnames from 'classnames';
import { TImagePreviewProps } from './ImagePreview.types';
import s from './ImagePreview.module.scss';

export const ImagePreview: React.FC<TImagePreviewProps> = memo(
  ({ className = '', url = '', onClose = undefined, ...rest }: TImagePreviewProps) => {
    return (
      <div className={classnames(s.imagePreviewContainer, className)} {...rest}>
        <div className={s.imagePreviewBackdrop} onClick={onClose} />
        <button type="button" className={s.imagePreviewClose} onClick={onClose}>
          X
        </button>
        <img className={s.imagePreviewImage} src={url} width="80%" height="80%" alt="" />
      </div>
    );
  },
);
