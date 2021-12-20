import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentQuest } from 'store/selectors';
import { getQuestById } from 'store/api-actions';
import { Spinner } from 'components/spinner/spinner';

const DetailedQuest = (props) => {
  const currentQuest = useSelector(getCurrentQuest);
  const dispatch = useDispatch();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  useEffect(() => {
    dispatch(getQuestById(+props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onBookingBtnCloseClick = () => {
    setIsBookingModalOpened(false);
  };

  if (currentQuest === null) {
    return <Spinner />
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={currentQuest.coverImg}
          alt={currentQuest.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{currentQuest.title}</S.PageTitle>
            <S.PageSubtitle>{currentQuest.type}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{currentQuest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${currentQuest.peopleCount[0]}-${currentQuest.peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{currentQuest.level}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {currentQuest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onClick={onBookingBtnCloseClick} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
