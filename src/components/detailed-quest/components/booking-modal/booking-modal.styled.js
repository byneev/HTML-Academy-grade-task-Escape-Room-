import styled from 'styled-components';
import { Button } from 'components/common/common';
import IconTick from 'assets/img/icon-tick.svg';

const BlockLayer = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.color.eclipse};
`;

const Modal = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;

  max-height: 100%;
  width: 480px;
  padding: 32px;
  padding-bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.color.nero2};
  transform: translateX(-50%) translateY(-50%);
  border-radius: 3px;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 29px;
  right: 22px;

  display: flex;
  padding: 10px;

  background: none;
  border: none;
  font: inherit;
  cursor: pointer;

  &:focus svg,
  &:hover svg {
    opacity: 0.5;
  }

  &:active svg {
    opacity: 0.3;
  }
`;

const ModalCloseLabel = styled.span.attrs({
  className: 'visually-hidden',
})``;

const ModalTitle = styled.h2`
  margin: 0;
  margin-bottom: 39px;
  padding: 0;

  font-size: ${({ theme }) => theme.font.formsHeading};
  line-height: 120%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const BookingField = styled.p`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
  padding-right: 16px;

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

const BookingLabel = styled.label`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.whisper2};
`;

const BookingInput = styled.input`
  padding-top: 17px;
  padding-right: 24px;
  padding-bottom: 18px;
  padding-left: 23px;

  font-family: inherit;

  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 3px;

  &::placeholder {
    color: ${({ theme }) => theme.color.whisper};
    opacity: 0.64;
  }

  &:focus,
  &:hover {
    opacity: 0.8;
  }
`;

const BookingSubmit = styled(Button)`
  align-self: center;
  margin-top: 55px;
  margin-bottom: 21px;
  padding-top: 15px;
  padding-right: 34px;
  padding-bottom: 16px;
  padding-left: 34px;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  background-color: ${({ theme }) => theme.color.pinkSwan};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

const BookingCheckboxWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

const BookingCheckboxLabel = styled.label`
  display: flex;
  position: relative;
  padding-left: 26px;

  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 3px;
    left: 2px;

    width: 16px;
    height: 16px;

    opacity: 0.4;
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.color.tangerine};
    border-radius: 4px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

const BookingCheckboxInput = styled.input.attrs({
  className: 'visually-hidden',
})`
  top: 20px;
  left: 10px;

  &:checked ~ .checkbox-label::after {
    content: '';

    background-image: url(${IconTick});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:focus ~ .checkbox-label {
    outline: 2px solid #4d90fe;
    outline-offset: 3px;
    opacity: 0.8;
  }

  &:active ~ .checkbox-label {
    opacity: 0.6;
  }
`;

const BookingCheckboxText = styled.span`
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;
  color: ${({ theme }) => theme.color.whisper2};
`;

const BookingLegalLink = styled.a`
  text-decoration: underline;
`;

export {
  BlockLayer,
  Modal,
  ModalCloseBtn,
  ModalCloseLabel,
  ModalTitle,
  BookingForm,
  BookingField,
  BookingLabel,
  BookingInput,
  BookingSubmit,
  BookingCheckboxWrapper,
  BookingCheckboxLabel,
  BookingCheckboxInput,
  BookingCheckboxText,
  BookingLegalLink,
};
