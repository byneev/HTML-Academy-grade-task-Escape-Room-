import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState } from 'react';
import { InputType, RUSSIAN_PHONE_NUMBER_REGEX } from 'utils/const';
import { useDispatch } from 'react-redux';
import { sendOrder } from 'store/api-actions';

const BookingModal = (props) => {
  const { onClick } = props;
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputPhoneValue, setInputPhoneValue] = useState('');
  const [inputPeopleCountValue, setInputPeopleCountValue] = useState();
  const [inputCheckboxState, setInputCheckboxState] = useState(false);
  const dispatch = useDispatch();

  const formFieldsChangeHandle = (evt) => {
    switch (evt.target.type) {
      case InputType.Text:
        setInputNameValue(evt.target.value);
        break;
      case InputType.Tel:
        setInputPhoneValue(evt.target.value);
        break;
      case InputType.Number:
        setInputPeopleCountValue(evt.target.value);
        break;
      case InputType.Checkbox:
        setInputCheckboxState(evt.target.checked);
        break;
      default:
        return;
    }
  }

  const formSubmitHandle = (evt) => {
    evt.preventDefault();
    const isDataValid = Boolean(inputPhoneValue.match(RUSSIAN_PHONE_NUMBER_REGEX)) && !Number.isNaN(inputPeopleCountValue);
    if (isDataValid) {
      const data = {
        name: inputNameValue,
        peopleCount: +inputPeopleCountValue,
        phone: inputPhoneValue,
        isLegal: inputCheckboxState,
      }
      dispatch(sendOrder(data))
    }
  }

  const closeButtonClickHandle = (evt) => {
    evt.preventDefault();
    onClick();
  }

  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={closeButtonClickHandle}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        onSubmit={formSubmitHandle}
        onChange={formFieldsChangeHandle}
        action="/"
        method="post"
        id="booking-form"
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            defaultValue={inputNameValue}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            defaultValue={inputPhoneValue}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            defaultValue={inputPeopleCountValue}
            required
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            defaultChecked={inputCheckboxState}
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
);
  }

export default BookingModal;
