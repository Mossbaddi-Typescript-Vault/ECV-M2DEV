import type { Theme, Variant, Size } from "./types";
import type { ButtonProps } from "./props";
import  { type CSSVars, dim } from "./styles";
import { styleOf } from "./styleOf";



export function useButton<T extends Theme>(theme :T) {
    type ValidProps<TH extends Theme> = TH extends "bright"
    ? { variant: Exclude<Variant, "ghost">; size: Size} | {variant: "ghost"; size: Exclude<Size, "lg">}
    : {variant: Variant; size: Size}


    return {
        styleFor: <P extends ValidProps<T>>(
            variant: P["variant"],
            size: P["size"],
            disabled?: boolean
        ): CSSVars => {
            const props = { theme, variant, size, disabled};

            if (theme === "bright" && variant === "ghost" && size === "lg") {
                throw new Error("Combinaison interdite: bright + ghost + lg");
            }


            return styleOf(props as ButtonProps);
        }
    }


}