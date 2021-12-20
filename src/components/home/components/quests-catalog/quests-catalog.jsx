import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { getCurrentTheme, getSelectorByTheme } from 'store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoute, ThemeType } from 'utils/const';
import { setCurrentTheme } from 'store/actions';
import { Spinner } from 'components/spinner/spinner';

const QuestsCatalog = () => {
  const currentTheme = useSelector(getCurrentTheme);
  const dispatch = useDispatch();
  const quests = useSelector(getSelectorByTheme(currentTheme));

  const themeTabClickHandle = (evt) => {
    evt.preventDefault();
    dispatch(setCurrentTheme(evt.target.dataset.value));
  }

  if (quests.length === 0) {
    return <Spinner />
  }

  return (<>
    <S.Tabs>
      <S.TabItem >
        <S.TabBtn isActive={currentTheme === ThemeType.All}>
          <IconAllQuests />
          <S.TabTitle onClick={themeTabClickHandle} data-value={ThemeType.All}>Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn  isActive={currentTheme === ThemeType.Adventures}>
          <IconAdventures />
          <S.TabTitle onClick={themeTabClickHandle} data-value={ThemeType.Adventures}>Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn isActive={currentTheme === ThemeType.Horror}>
          <IconHorrors />
          <S.TabTitle onClick={themeTabClickHandle} data-value={ThemeType.Horror}>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn isActive={currentTheme === ThemeType.Mystic}>
          <IconMystic />
          <S.TabTitle onClick={themeTabClickHandle} data-value={ThemeType.Mystic}>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn isActive={currentTheme === ThemeType.Detective}>
          <IconDetective />
          <S.TabTitle onClick={themeTabClickHandle} data-value={ThemeType.Detective}>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn isActive={currentTheme === ThemeType.SciFi}>
          <IconScifi />
          <S.TabTitle onClick={themeTabClickHandle} data-value={ThemeType.SciFi}>Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>

    <S.QuestsList>
      {quests.map((quest) => {
        return (
          <S.QuestItem key={quest.id}>
          <S.QuestItemLink to={`${AppRoute.Details}/${quest.id}`}>
            <S.Quest>
              <S.QuestImage
                src={quest.previewImg}
                width="344"
                height="232"
                alt={quest.title}
              />

              <S.QuestContent>
                <S.QuestTitle>{quest.title}</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson />
                    {`${quest.peopleCount[0]}-${quest.peopleCount[1]} чел`}
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle />
                    {quest.level}
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>
        )
      })}

    </S.QuestsList>
  </>)
};

export default QuestsCatalog;
