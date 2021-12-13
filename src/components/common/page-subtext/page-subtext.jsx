import * as S from './page-subtext.styled';

const PageSubtext = ({ children, ...props }) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
