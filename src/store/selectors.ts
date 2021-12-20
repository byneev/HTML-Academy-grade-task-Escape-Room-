import { createSelector } from '@reduxjs/toolkit';
import { QuestProp } from 'types/quest-type';
import { ThemeType } from 'utils/const';
import { InitialStateProp } from './reducer';

export const getQuests = (state : InitialStateProp) : QuestProp[] => state.quests;
export const getCurrentQuest = (state : InitialStateProp) : QuestProp | null => state.currentQuest;
export const getCurrentTheme = (state : InitialStateProp) : ThemeType => state.currentTheme;

export const getSelectorByTheme = (theme : ThemeType) => {
  if (theme === ThemeType.All) {
    return getQuests;
  }
  return createSelector(getQuests, (quests : QuestProp[]) => quests.filter((quest: QuestProp) => quest.type === theme));
};
