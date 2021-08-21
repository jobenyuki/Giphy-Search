import React from 'react';

export enum ETextInputTypes {
  TEXT = 'text',
  NUMBER = 'number',
  PASSWORD = 'password',
  EMAIL = 'email',
}

export type TTextInputProps = {
  className?: string;
  placeholder?: string;
  type?: ETextInputTypes;
  value?: string;
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
};
