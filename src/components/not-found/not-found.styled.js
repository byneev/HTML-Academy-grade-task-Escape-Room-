import { Link } from 'components/common/common';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 556px;
  margin-top: 149px;
  margin-bottom: 149px;
  margin-left: 43.92vw;
  background-color: red;
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

const HomeLink = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export {
  Main,
  PageTitle,
  HomeLink,
}
