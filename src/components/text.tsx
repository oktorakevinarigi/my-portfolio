"use client";
import styled from "styled-components";

const Component = styled.div`
  color: red;
  font-size: var(--fz-xxs);
  /* font-family: var(--font-mono); */
`;

export function Text() {
  return <Component>text</Component>;
}
