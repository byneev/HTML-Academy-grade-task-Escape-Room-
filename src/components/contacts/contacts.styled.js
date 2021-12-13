import styled from 'styled-components';
import { PageHeading as Heading } from 'components/common/common';
import contactsBg from 'assets/img/contacts-bg.jpg';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;

  background-image: url(${contactsBg});
  background-repeat: no-repeat;
  background-position: top left;
  background-color: ${({ theme }) => theme.color.nero};
  background-size: cover;
`;

const ContentWrapper = styled.div`
  max-width: 1080px;
  flex-shrink: 0;
  width: 100%;
  margin: 0 auto;
  margin-top: 136px;
  margin-bottom: 40px;
`;

const PageHeading = styled(Heading)`
  margin-bottom: 46px;
  padding-bottom: 29px;
  padding-left: 6px;

  border-bottom: 0.5px solid rgba(230, 230, 230, 0.25);
`;

const Contacts = styled.div`
  display: flex;
`;

const ContactsList = styled.dl`
  width: 233px;
  margin: 0;
  margin-left: 30px;
  padding: 0;
  padding-top: 14px;
`;

const ContactTitle = styled.dt`
  margin-bottom: 5px;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 140%;
  font-weight: 700;
  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.color.whisper2};
`;

const ContactValue = styled.dd`
  margin: 0;
  padding: 0;

  color: ${({ theme }) => theme.color.whisper2};

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

const ContactAddress = styled.address`
  font-style: normal;
`;

const ContactLink = styled.a``;

const ContactsMap = styled.div`
  position: relative;
  display: flex;
  width: 649px;
  height: 336px;
  margin-left: auto;
`;

const ContactsMapImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
`;

export {
  Main,
  ContentWrapper,
  PageHeading,
  Contacts,
  ContactsList,
  ContactTitle,
  ContactValue,
  ContactAddress,
  ContactLink,
  ContactsMap,
  ContactsMapImage,
};
