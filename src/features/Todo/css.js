import { css } from "@emotion/css";

export const app = css`
  background-color: #19535f;
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
  margin-bottom: 10px;
  overflow-y: scroll;
  height: 1000px;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
  }
  @media (min-width: 769px) {
    width: 700px;
    min-height: 400px;
  }
`;

export const header = css`
  color: #19535f;
`;

export const formWrapper = css`
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    flex-wrap: wrap;
  }
`;
