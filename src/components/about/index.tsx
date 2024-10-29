import Image from "next/image";

import { Box, Container, Description, Flex, Title, Unordered } from "./style";

export function About() {
  return (
    <Container>
      <Title>About Me</Title>
      <Flex>
        <Box $flex={1.5}>
          <Description>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My
            interest in web development started back in 2012 when I decided to try editing custom
            Tumblr themes — turns out hacking together a custom reblog button taught me a lot about
            HTML & CSS!
          </Description>
          <Description>
            Fast-forward to today, and I’ve had the privilege of working at &nbsp;
            <a href="#">an advertising agency</a>, <a href="#">a start-up</a>, &nbsp;
            <a href="#">a huge corporation</a>, and <a href="#">a student-led design studio</a>. My
            main focus these days is building accessible, inclusive products and digital experiences
            at Upstatement for a variety of clients.
          </Description>
          <Description>
            I also recently &nbsp;
            <a href="#">launched a course</a> that covers everything you need to build a web app
            with the Spotify API using Node & React.
          </Description>
          <Description>Here are a few technologies I’ve been working with recently:</Description>
          <Unordered>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Eleventy</li>
            <li>Node.js</li>
            <li>WordPress</li>
          </Unordered>
        </Box>
        <Box>
          <Image
            src="/images/photo.jpg"
            alt="profile"
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
      </Flex>
    </Container>
  );
}
