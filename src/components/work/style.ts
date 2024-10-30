"use client";
import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 0;
`;

export const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

export const Box = styled.div`
  position: relative;
  flex: 1;
  min-width: 328px;
  min-height: 205px;
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
