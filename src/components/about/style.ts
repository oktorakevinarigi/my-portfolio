"use client";
import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 0;
`;

export const Flex = styled.div`
  display: flex;
  gap: 50px;
`;

export const Box = styled.div<{ $flex?: number }>`
  flex: ${props => props.$flex ?? 1};
  position: relative;
`;

export const Title = styled.h2`
  font-size: var(--32);
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  &::after {
    content: "";
    position: relative;
    top: -5px;
    flex: 1;
    height: 1px;
    margin-left: 20px;
    max-width: 380px;
    background-color: var(--lightest-navy);
  }
`;

export const Description = styled.p`
  font-size: var(--fz-xl);
  color: var(--slate);
  max-width: 540px;
  margin-bottom: var(--16);

  a {
    color: var(--green);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 4px;
  }
`;

export const Unordered = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 0px 15px 0px;
  color: var(--slate);
  font-family: var(--font-sf-mono);
  font-size: var(--fz-sm);
`;
