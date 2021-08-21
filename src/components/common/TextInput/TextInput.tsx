import React, { memo } from 'react';
import classnames from 'classnames';
import { ETextInputTypes, TTextInputProps } from './TextInput.types';
import s from './TextInput.module.scss';

export const TextInput: React.FC<TTextInputProps> = memo(
  ({
    className = '',
    placeholder = '',
    type = ETextInputTypes.TEXT,
    value = '',
    onChange = undefined,
    ...rest
  }: TTextInputProps) => {
    return (
      <div className={classnames(s.textInputContainer, className)}>
        <input
          className={s.textInput}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  },
);
