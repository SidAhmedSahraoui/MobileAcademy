export interface SocialProps {
  social?: boolean;
  text: string;
  wide?: boolean;
}

export interface ContentProps {
  head: string;
  children: React.ReactNode;
}

export interface TextInputProps {
  name: string;
  size: string;
  wide?: boolean;
  value?: string;
  change?: any;
}

export interface ButtonSignProps {
  text: string;
  wide?: boolean;
  navigation?: any;
}
export interface DividerProps {
  wide?: boolean;
}
export interface StatusBarProps {
  bg: string;
  text: any;
}

export interface CardIconProps {
  children: React.ReactNode;
  header?: string;
  select?: boolean;
}
export interface CardProps {
  children: React.ReactNode;
  link?: string;
  arrow?: boolean;
  linkicon?: boolean;
  space?: boolean;
  pr?: boolean;
}
export interface OrderRowProps {
  text: string;
  num: string;
}
export interface BoxCardProps {
  children: React.ReactNode;
  bg: string;
  position?: string;
  text: string;
  pl?: boolean;
}
export interface LinkProps {
  link: string;
}
export interface HeroProps {
  title: string;
  option?: boolean;
  navigation?: any;
}

// User
export interface User {
  id: string;
  name: string;
  password: string;
  isAuth: boolean;
  error: string;
}

// NewUser
export interface NewUser {
  id: string;
  email: string;
  username: string;
  password: string;
  isAuth: boolean;
  error: string;
}
