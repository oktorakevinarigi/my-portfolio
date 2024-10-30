"use client";
import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: var(--font-sf-mono);
  color: var(--green);
  font-size: var(--fz-base);
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: var(--60);
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.1;
`;

export const Description = styled.p`
  font-size: var(--fz-xl);
  color: var(--slate);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const Button = styled.a`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--rounded);
  padding: 1.25rem 1.75rem;
  font-size: var(--fz-sm);
  font-family: var(--font-sf-mono);
  line-height: 1;
  text-decoration: none;
  margin-top: 50px;
  display: inline-block;
`;
