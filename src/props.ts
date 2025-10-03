import type { Theme, Variant, Size } from "./types";


type BaseProps = {disabled?: boolean}

type BrightOK = 
    | {theme: "bright"; variant: Exclude<Variant, "ghost">; size: Size }
    | {theme: "bright"; variant: "ghost"; size?: Exclude<Size, "lg"> };

type DarkOK = { theme: "dark"; variant: Variant; size: Size };

export type ButtonProps = (BrightOK | DarkOK) & BaseProps;