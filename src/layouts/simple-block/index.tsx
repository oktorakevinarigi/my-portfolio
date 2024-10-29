import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { Div } from "./style";

type SimpleBlockProps = {
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function SimpleBlock({ children, ...restProps }: SimpleBlockProps) {
  const { className, ...rest } = restProps;
  return (
    <Div className={className} {...rest}>
      {children}
    </Div>
  );
}
