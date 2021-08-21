import React, { memo } from 'react';
import classnames from 'classnames';
import { EButtonTypes, TButtonProps } from './Button.types';
import s from './Button.module.scss';

export const Button: React.FC<TButtonProps> = memo(
  ({
    className = '',
    children = '',
    type = EButtonTypes.BUTTON,
    onClick = undefined,
    disabled = false,
    ...rest
  }: TButtonProps) => {
    return (
      <input
        className={classnames(s.buttonContainer, { [s.disabled]: disabled }, className)}
        type={type}
        value={children}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      />
    );
  },
);
