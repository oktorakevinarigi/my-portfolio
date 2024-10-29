"use client";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-sf-mono);
  height: 100px;
  padding: 0 2rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Text = styled.p`
  font-size: var(--fz-sm);
  padding: var(--4) 0;
  cursor: pointer;

  &:hover {
    color: var(--green);
  }
`;

export const Button = styled.button`
  font-size: var(--fz-sm);
  background-color: transparent;
  color: var(--green);
  border-width: 1px;
  width: 5.125rem;
  height: 2.438rem;
  border-radius: var(--rounded);
  border: 1px solid var(--green);
  cursor: pointer;
`;
