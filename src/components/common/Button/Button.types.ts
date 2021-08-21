export enum EButtonTypes {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

export type TButtonProps = {
  className?: string;
  children?: string;
  type?: EButtonTypes;
  onClick?: (() => void) | undefined;
  disabled?: boolean;
};
