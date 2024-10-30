"use client";
import { Fragment, useState } from "react";

import { Button, Company, Container, Flex, Period, Position, Title, Unordered } from "./style";

const Data = [
  {
    id: "now",
    company: "Ministry of Health of the Republic of Indonesia",
    position: "Frontend Engineer",
    period: "October 2023 - December 2023",
    description: [
      "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQueryy",
      "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsivenesss",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and moree",
    ],
  },
  {
    id: "sehatq",
    company: "SehatQ",
    position: "Senior Frontend Developer",
    period: "November 2021 - July 2023",
    description: [
      "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
    ],
  },
  {
    id: "astra",
    company: "PT Astra International Tbk",
    position: "Frontend Developer",
    period: "April 2018 - November 2021",
    description: [
      "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
    ],
  },
];

export function Experience() {
  const [status, setStatus] = useState("now");

  const detail = Data.filter(item => item.id === status);

  return (
    <Container>
      <Title>Where I’ve Worked</Title>
      <Flex>
        <Company>
          {Data.map(item => (
            <Button
              key={item.position}
              $color={item.id === status ? "var(--green)" : undefined}
              onClick={() => setStatus(item.id)}
            >
              {item.company}
            </Button>
          ))}
        </Company>
        <div>
          {detail.map(item => (
            <Fragment key={item.position}>
              <Position>{item.position}</Position>
              <Period>{item.period}</Period>
              <Unordered>
                {item.description.map(description => (
                  <li key={description}>{description}</li>
                ))}
              </Unordered>
            </Fragment>
          ))}
        </div>
      </Flex>
    </Container>
  );
}
