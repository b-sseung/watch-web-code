import styled, { css } from 'styled-components';

export const DigitalFontDiv = styled.div(
  css`
    font-family: 'DigitalBold';
    font-size: 30px;

    @media screen and (max-width: 512px) {
      font-size: 20px;
    }
  `
);

export const LiquidFontDiv = styled.div(
  css`
    font-family: 'LiquidCrystalExBold';
    font-size: 30px;

    @media screen and (max-width: 512px) {
      font-size: 20px;
    }
  `
);

export const FlexDiv = styled.div(
  css`
    display: flex;
  `
);

export const FlexRowDiv = styled.div(
  css`
    display: flex;
    flex-direction: row;
  `
);

export const FlexColDiv = styled.div(
  css`
    display: flex;
    flex-direction: column;
  `
);
