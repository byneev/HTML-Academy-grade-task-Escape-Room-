import { createAction } from '@reduxjs/toolkit';
import { QuestProp } from 'types/quest-type';
import { ThemeType } from 'utils/const';

export const enum Actions {
  SetQuests = 'SetQuests',
  SetCurrentQuest = 'SetCurrentQuest',
  SetCurrentTheme = 'SetCurrentTheme',
}

export const setQuests = createAction<QuestProp[]>(Actions.SetQuests);
export const setCurrentQuest = createAction<QuestProp | null>(Actions.SetCurrentQuest);
export const setCurrentTheme = createAction<ThemeType>(Actions.SetCurrentTheme);
