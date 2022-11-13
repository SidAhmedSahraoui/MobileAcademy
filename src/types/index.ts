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