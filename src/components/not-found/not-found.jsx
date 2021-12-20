import { AppRoute } from 'utils/const';
import * as S from './not-found.styled';

export const NotFound = () => {

  return (
    <S.Main>
      <S.PageTitle>Page not found</S.PageTitle>
      <S.HomeLink to={AppRoute.Main}>Back to Home</S.HomeLink>
    </S.Main>
  )
}
