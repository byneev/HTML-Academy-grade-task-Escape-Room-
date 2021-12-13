import styled, { css } from 'styled-components';
import { Link } from 'components/common/common';

const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;

  @media (max-width: 1110px) {
    align-self: center;
  }
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 40px;
  max-width: 190px;
  margin-bottom: 20px;

  &:not(:last-of-type) {
    padding-right: 40px;
    margin-right: 39px;
    border-right: 1px solid ${({ theme }) => theme.color.gray};
  }

  @media (max-width: 1110px) {
    &:not(:last-of-type) {
      padding-right: 30px;
      margin-right: 29px;
    }
  }
`;

const TabBtn = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  padding: 0;

  font-family: inherit;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 140%;
  letter-spacing: -0.02em;
  font-weight: 700;

  color: ${({ theme }) => theme.color.whisper2};
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  &:focus span,
  &:hover span {
    border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      span {
        border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
      }
    `}
`;

const TabTitle = styled.span`
  margin-left: 13px;
  padding-top: 4px;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
`;

const QuestsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 344px);
  gap: 32px 24px;

  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, minmax(303px, 1fr));
  }
`;

const QuestItem = styled.li``;

const QuestItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
`;

const Quest = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  min-width: 344px;
  min-height: 232px;

  @media (max-width: 1150px) {
    min-width: 303px;
    min-height: 204px;
  }

  &::after {
    content: '';
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 160px;

    background-image: linear-gradient(
      0.36deg,
      rgba(28, 27, 27, 0.9) 5.23%,
      rgba(46, 46, 46, 0) 98.38%
    );

    border-radius: 3px;
  }
`;

const QuestContent = styled.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: auto;
`;

const QuestTitle = styled.h2`
  max-width: 264px;
  max-height: 59px;
  margin: 0;
  margin-bottom: 16px;
  padding: 0;

  font-size: ${({ theme }) => theme.font.medium};
  line-height: 120%;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  word-break: break-word;
  overflow: hidden;
`;

const QuestImage = styled.img`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const QuestFeatures = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;
  list-style: none;
`;

const QuestFeatureItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 20px;
  max-width: 100px;
  max-height: 50px;
  word-break: break-word;
  overflow: hidden;

  font-size: ${({ theme }) => theme.font.small};
  line-height: 144%;
  color: ${({ theme }) => theme.color.whisper2};

  &:not(:last-of-type) {
    padding-right: 13px;
    margin-right: 12px;
    border-right: 1px solid ${({ theme }) => theme.color.darkerGray};
  }

  svg {
    flex-shrink: 0;
    margin-right: 9px;
    margin-bottom: 2px;
  }
`;

export {
  Tabs,
  TabItem,
  TabBtn,
  TabTitle,
  QuestsList,
  QuestItem,
  QuestItemLink,
  Quest,
  QuestContent,
  QuestTitle,
  QuestImage,
  QuestFeatures,
  QuestFeatureItem,
};
