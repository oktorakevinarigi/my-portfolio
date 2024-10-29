"use client";
import styled from "styled-components";

export const Container = styled.div`
  height: calc(100svh - 100px);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: var(--font-sf-mono);
  color: var(--green);
  font-size: var(--fz-base);
  margin-bottom: 30px;
  margin-left: 2px;
`;

export const SubTitle = styled.h2<{ color?: string }>`
  font-size: 5rem;
  font-weight: 600;
  color: ${props => props.color};
  line-height: 1.1;
`;

export const Description = styled.p`
  font-size: var(--fz-xl);
  color: var(--slate);
  max-width: 540px;

  span {
    color: var(--green);
  }
`;

export const Button = styled.button`
  font-family: var(--font-sf-mono);
  font-size: var(--fz-sm);
  background-color: transparent;
  color: var(--green);
  border-width: 1px;
  width: 14.438rem;
  height: 3.5rem;
  border-radius: var(--rounded);
  border: 1px solid var(--green);
  cursor: pointer;
  margin-top: 50px;
`;
