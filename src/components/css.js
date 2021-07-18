import { css } from "@emotion/css";

export const todoItem = css`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  background-color: #f0f3f5 !important;
`;

export const todoTitle = css`
  overflow-wrap: anywhere;
`;
export const deadline = css`
  margin-left: auto;
  margin-right: 10px;
  color: #2d8da1;
  font-size: 0.9em;
`;

export const formContainer = css`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const todoInput = css``;

export const dateInput = css`
  margin-left: 5px !important;
  width: 30%;
`;

export const saveButton = css`
  margin-left: auto !important;
  width: 100%;
  margin-top: 10px !important;
`;

export const cancelButton = css`
  margin-left: auto !important;
  width: 100%;
`;

export const buttonWrapper = css`
  width: 30%;
  margin-left: auto !important;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px !important;
  }
`;
