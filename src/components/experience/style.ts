"use client";
import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 0;
`;

export const Flex = styled.div`
  display: flex;
  gap: 50px;
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

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const Button = styled.button<{ $color?: string }>`
  background-color: transparent;
  color: ${props => props.$color ?? "var(--slate)"};
  text-align: left;
  padding: 5px 20px;
  border: none;
  cursor: pointer;
  font-size: var(--fz-sm);
  font-family: var(--font-sf-mono);
  min-height: var(--42);
  border-left: 2px solid ${props => props.$color ?? "var(--lightest-navy)"};

  &:hover {
    color: var(--green);
    background-color: var(--lightest-navy);
  }
`;

export const Position = styled.h3`
  font-size: var(--22);
  font-weight: 500;
`;

export const Period = styled.p`
  font-size: var(--fz-sm);
  color: var(--slate);
  font-family: var(--font-sf-mono);
  margin-bottom: 25px;
`;

export const Unordered = styled.ul`
  padding: 0px;
  margin: 0px;
  font-size: var(--fz-lg);
  color: var(--slate);
  list-style: none;
  position: relative;

  & > li {
    margin-bottom: 10px;
    padding-left: 30px;
  }
  & > li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
  }
`;
