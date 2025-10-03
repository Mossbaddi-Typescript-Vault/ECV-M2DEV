import { TOKENS } from "./tokens";
import type { ButtonProps } from "./props";
import  { type CSSVars, dim } from "./styles";



export function styleOf(props: ButtonProps): CSSVars {
    const tokens = TOKENS[props.theme];

    let base: CSSVars;
    switch (props.variant) {
        case "solid":
            base = {
                "--btn-fg": tokens.fg,
                "--btn-bg": tokens.bg,
                "--btn-accent": tokens.accent
            };
            break;
        case "outline":
            base = {
                "--btn-fg": tokens.accent,
                "--btn-bg": "transparent",
                "--btn-accent": tokens.accent
            };
            break;          
        case "ghost":
            base = {
                "--btn-fg": tokens.accent,
                "--btn-bg": "transparent",
                "--btn-accent": "transparent"
            };
            break;
        }

            
        if (props.disabled) {
            return {
                "--btn-fg": dim(base["--btn-fg"]),
                "--btn-bg": dim(base["--btn-bg"]),
                "--btn-accent": dim(base["--btn-accent"])
            };
        }


        return base;
}