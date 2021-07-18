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
