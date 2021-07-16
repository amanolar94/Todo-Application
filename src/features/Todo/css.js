import { css } from "@emotion/css";

export const app = css`
  background-color: #0b7a75;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const paper = css`
  background-color: #d7c9aa !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 769px) {
    min-width: 600px;
    min-height: 400px;
  }
`;

export const header = css`
  color: #0b7a75;
`;

export const todoItem = css`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
