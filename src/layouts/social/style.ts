"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  z-index: 10;
  color: var(--light-slate);

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style: none;

    &:after {
      content: "";
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background-color: var(--light-slate);
    }

    li {
      a {
        padding: 10px;
        color: inherit;
        display: inline-block;
        transition: var(--transition);

        &:hover,
        &:focus {
          transform: translateY(-3px);
          color: var(--green);
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
