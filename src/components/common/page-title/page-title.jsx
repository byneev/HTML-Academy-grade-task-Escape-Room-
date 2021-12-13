import * as S from './page-title.styled';

const PageTitle = ({ children, ...props }) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
