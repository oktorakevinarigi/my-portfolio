import { Button, Container, Description, SubTitle, Title } from "./style";

export function Hero() {
  return (
    <Container>
      <Title>Hi, my name is</Title>
      <SubTitle>Oktora Kevin Arigi</SubTitle>
      <SubTitle color="var(--slate)">Sr. Frontend Engineer</SubTitle>
      <Description>
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, human-centered products
        at <span>Upstatement</span>.
      </Description>
      <Button>Check out my course!</Button>
    </Container>
  );
}
