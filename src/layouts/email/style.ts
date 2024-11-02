"use client";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 40px;
  z-index: 10;
  color: var(--light-slate);

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: var(--transition);
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-sf-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--green);
    }
  }
`;
