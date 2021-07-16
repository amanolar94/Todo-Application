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
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 769px) {
    width: 700px;
    min-height: 400px;
  }
`;

export const header = css`
  color: #19535f;
`;

export const formContainer = css`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  @media (max-width: 768px) {
    width: 90%;
    flex-wrap: wrap;
  }
`;

export const todoInput = css``;

export const dateInput = css`
  margin-left: 5px !important;
  width: 30%;
`;

export const saveButton = css`
  margin-left: auto !important;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px !important;
  }
`;
