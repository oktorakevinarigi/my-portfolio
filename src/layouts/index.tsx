import type { PropsWithChildren } from "react";

import { Email } from "./email";
import { Header } from "./header";
import { SimpleBlock } from "./simple-block";
import { Social } from "./social";

export function Layout(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <Social />
      <SimpleBlock>{props.children}</SimpleBlock>
      <Email />
    </>
  );
}
