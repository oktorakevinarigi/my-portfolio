import Image from "next/image";

import { Box, Container, Flex, Title } from "./style";

export function Work() {
  return (
    <Container>
      <Title>Some Things I’ve Built</Title>
      <Flex>
        <Box>
          <Image
            src="/images/sehatq-lading-telemed.jpg"
            alt="sehatq landing page"
            fill
            style={{
              borderRadius: "4px",
              objectFit: "cover",
              objectPosition: "top",
              maxWidth: "300px",
              maxHeight: "300px",
            }}
          />
        </Box>
        <Box>
          <p>Featured Project</p>
          <h3>Halcyon Theme</h3>
          <p>
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available
            on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
          </p>
        </Box>
      </Flex>
    </Container>
  );
}
