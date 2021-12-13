import styled from 'styled-components';
import { ReactComponent as InstagramIcon } from 'assets/img/icon-instagram-hover.svg';
import { ReactComponent as VkIcon } from 'assets/img/icon-vk-hover.svg';

const StyledFooter = styled.footer`
  z-index: 5;
  position: fixed;
  bottom: 24px;
  left: 32px;
`;

const Socials = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  max-width: 500px;
  margin: 0;
  margin-bottom: -7px;
  padding: 0;
  list-style: none;
`;

const SocialItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 7px;
    margin-bottom: 7px;
  }
`;

const SocialLink = styled.a`
  display: block;
`;

const StyledInstagramIcon = styled(InstagramIcon)`
  display: flex;

  image {
    filter: grayscale(1);
  }

  &:focus image,
  &:hover image {
    filter: grayscale(0);
  }
`;

const StyledVkIcon = styled(VkIcon)`
  display: flex;

  circle {
    fill: #c6c4c2;
  }

  path {
    fill: ${({ theme }) => theme.color.nero};
  }

  &:focus circle,
  &:hover circle {
    fill: #4f779f;
  }

  &:focus path,
  &:hover path {
    fill: white;
  }
`;

const HiddenText = styled.span.attrs({ className: 'visually-hidden' })``;

export {
  StyledFooter,
  Socials,
  SocialItem,
  SocialLink,
  StyledInstagramIcon,
  StyledVkIcon,
  HiddenText,
};
