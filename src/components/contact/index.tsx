import { Button, Container, Description, SubTitle, Title } from "./style";

export function Contact() {
  return (
    <Container>
      <Title>What’s Next?</Title>
      <SubTitle>Get In Touch</SubTitle>
      <Description>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </Description>
      <Button href="mailto:oktora.kevin.arigi@gmail.com" target="_blank">
        Say Hello
      </Button>
    </Container>
  );
}
