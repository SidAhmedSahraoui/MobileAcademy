export type SocialProps = {
    social? : boolean,
    text : string,
    wide ? : boolean
}

export type ContentProps = {
    head : string,
    children : React.ReactNode
}

export type TextInputProps = {
    name : string,
    size : string,
    wide ? : boolean
}

export type ButtonSignProps = {
    text : string,
    wide ? : boolean,
    navigation ? : any
}
export type DividerProps = {
    wide ? : boolean
}
export type StatusBarProps = {
    bg : string,
    text : any
}

export type CardIconProps = {
    children : React.ReactNode,
    header ? : string,
    select ? : boolean
}
export type CardProps = {
    children : React.ReactNode, 
    link ? : string, 
    arrow ? : boolean,
    linkicon? : boolean,
    space ? : boolean,
    pr ? : boolean
}
export type OrderRowProps = {
    text : string,
    num : string
}
export type BoxCardProps = {
    children : React.ReactNode,
    bg : string,
    position ? : string,
    text : string,
    pl ? : boolean
}
export type LinkProps = {
    link : string
}
export type HeroProps = {
    title : string,
    option ? : boolean,
    navigation ? : any
}

// User
export interface User {
    id: string;
    name: string;
    password: string;
    isAuth: boolean;
    error: string
}

// NewUser
export interface NewUser {
    id: string;
    email: string;
    username: string;
    password: string;
    isAuth: boolean;
    error: string
}