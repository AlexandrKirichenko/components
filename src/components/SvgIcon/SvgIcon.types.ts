export enum IconsEnum {
  // common
  loader = './icons/common/loader.svg',
  search = '/icons/common/search.svg',
}

export type SvgIconProps = {
  src: IconsEnum | string; // use string for icons from backend
  onClick?: () => void;
  size?: number;
  color?: colorType;
  rotate?: '90' | '180' | '270';
  className?: string;
  style?: React.CSSProperties;
  defaultStroke?: boolean;
};

export type colorType =
  | 'unset'
  | 'inherit'
  | 'white'
  | 'ultra-light-gray'
  | 'light-gray'
  | 'gray'
  | 'dark-gray'
  | 'ultra-dark-gray'
  | 'ultra-light-primary'
  | 'light-primary'
  | 'primary'
  | 'dark-primary'
  | 'error'
  | 'warning'
  | 'success';
