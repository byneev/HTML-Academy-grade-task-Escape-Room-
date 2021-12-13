import styled from 'styled-components';
import { Button } from 'components/common/common';

const Main = styled.main`
  max-width: 556px;
  margin-top: 149px;
  margin-bottom: 149px;
  margin-left: 43.92vw;
`;

const PageImage = styled.img`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  object-fit: cover;
`;

const PageContentWrapper = styled.div`
  z-index: 2;
  position: relative;
`;

const PageHeading = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 29px;
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font.large};
  line-height: 95%;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  overflow-wrap: anywhere;
`;

const PageSubtitle = styled.p`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  padding-left: 7px;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;
  color: ${({ theme }) => theme.color.tangerine};
`;

const PageDescription = styled.div`
  padding-left: 32px;
`;

const Features = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  margin-bottom: 18px;
  padding: 0;
  list-style: none;
`;

const FeaturesItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 36px;
  max-width: 150px;
  max-height: 65px;
  word-break: break-word;
  overflow: hidden;

  &:not(:last-of-type) {
    margin-right: 24px;
    padding-right: 24px;
    border-right: 1px solid rgba(255, 255, 255, 0.36);
  }

  svg {
    flex-shrink: 0;
  }
`;

const FeatureTitle = styled.span`
  margin-left: 9px;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;
  font-weight: 400;
  color: ${({ theme }) => theme.color.whisper2};
`;

const QuestDescription = styled.p`
  margin: 0;
  margin-bottom: 45px;
  padding: 0;

  line-height: 150%;
  color: ${({ theme }) => theme.color.whisper2};
  letter-spacing: 0.013em;
`;

const QuestBookingBtn = styled(Button).attrs({ type: 'button' })`
  margin-left: 2px;
`;

export {
  Main,
  PageImage,
  PageContentWrapper,
  PageHeading,
  PageTitle,
  PageSubtitle,
  PageDescription,
  Features,
  FeaturesItem,
  FeatureTitle,
  QuestDescription,
  QuestBookingBtn,
};
