import { css } from 'styled-components';


export const flexRow = css `
  display: flex;
  align-items: center;
  flex-direction: row;
  `;

export const flexCol = css `
  display: flex;
  /* align-items: center; */
  flex-direction: column;
`;


export const centerOf = css `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  list-style: none;
  text-align: center;
  width: 100%;
`;


