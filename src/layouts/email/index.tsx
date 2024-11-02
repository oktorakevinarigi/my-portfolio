import { EMAIL } from "@/constants";

import { Container } from "./style";

export function Email() {
  return (
    <Container>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </Container>
  );
}
