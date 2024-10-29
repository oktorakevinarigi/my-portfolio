import { Button, Container, Flex, Text } from "./style";

export function Header() {
  return (
    <Container>
      Icon
      <Flex>
        <Flex>
          <Text>About</Text>
          <Text>Experience</Text>
          <Text>Work</Text>
          <Text>Contact</Text>
        </Flex>
        <Button>Resume</Button>
      </Flex>
    </Container>
  );
}
