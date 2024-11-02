import Icon from "@/components/icons/Icons";
import { SOCIAL_MEDIA } from "@/constants";

import { Container } from "./style";

export function Social() {
  return (
    <Container>
      <ul>
        {SOCIAL_MEDIA.map(({ url, name }) => (
          <li key={url}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
