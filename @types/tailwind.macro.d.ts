declare module "tailwind.macro" {
  import { DetailedHTMLProps, HTMLAttributes } from "react";
  import { ThemedStyledProps, Interpolation } from "styled-components";

  export default function tw(
    templateString: TemplateStringsArray
  ): Interpolation<
    ThemedStyledProps<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      void // lol no idea
    >
  >;
}
