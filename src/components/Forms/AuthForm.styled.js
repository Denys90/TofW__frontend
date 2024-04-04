import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { Field, ErrorMessage } from 'formik';
import { ReactComponent as SVGOpen } from './icons/Vector.svg';
import { ReactComponent as SVGOpenTwo } from './icons/Vector.svg';
import { ReactComponent as SVGClose } from './icons/Vector2.svg';
import { ReactComponent as SVGCloseTwo } from './icons/Vector2.svg';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px;
  width: 384px;
  margin-right: 200px; 
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
   margin-right: 0;
   width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
   width : 280px;
  }
`;
export const Title = styled.h2`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  width: 384px;
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
   width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
   width : 280px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-bottom: 16px;
  width: 384px;
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
   width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
   width : 280px;
  }
`;
export const LabelField = styled.label`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 384px;
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
   width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
   width : 280px;
  }
`;
export const SubmitButton = styled.button`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: white;
  padding: 10px 30px 10px 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: rgb(64, 123, 255);
  width: 384px;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
   width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
   width : 280px;
  }
`;
export const LinkBtn = styled.button`
  margin-top: 16px;
  color: rgb(64, 123, 255);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-decoration: none;
  transition: 0.4s;
  background-color: transparent;
  border: none;
  &:hover {
    color: rgb(255, 157, 67);
  }
`;

export const InputField = styled(Field)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 10px 12px 10px;
  box-sizing: border-box;
  border: 1px solid rgb(215, 227, 255);
  border-radius: 6px;
  background: rgb(255, 255, 255);
  width: 384px;
  color: rgb(64, 123, 255);
  position: relative;
  &::placeholder {
    color: rgb(158, 187, 255);
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
   width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
   width : 280px;
  }

  ${(props) =>
    props.error &&
    `
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}

  ${(props) =>
    props.error &&
    `
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}
`;

export const ErrorMessages = styled(ErrorMessage)`
  color: red;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    flex-direction: column-reverse;
    margin-top: 50px;
  }
`;

export const Image = styled.img`
  height: 588.5px;
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    height: 474.26px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    height: 181.74px;
  }
`

export const SvgOpen = styled(SVGOpen)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: 187px;
  height: auto;
  cursor: pointer;
`

export const SvgOpenTwo = styled(SVGOpenTwo)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: 276px;
  height: auto;
  cursor: pointer;
`

export const SvgClose = styled(SVGClose)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: 187px;
  height: auto;
  cursor: pointer;
`

export const SvgCloseTwo = styled(SVGCloseTwo)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: 276px;
  height: auto;
  cursor: pointer;
`