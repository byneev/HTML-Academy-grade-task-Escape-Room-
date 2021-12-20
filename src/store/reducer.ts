import { createReducer } from '@reduxjs/toolkit';
import { QuestProp } from 'types/quest-type';
import { ThemeType } from 'utils/const';
import { setCurrentQuest, setCurrentTheme, setQuests } from './actions';

export type InitialStateProp = {
  quests: QuestProp[],
  currentQuest: QuestProp | null,
  currentTheme: ThemeType,
}

const initialState : InitialStateProp = {
  quests: [],
  currentQuest: null,
  currentTheme: ThemeType.All,
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuests, (state, { payload }) => {
      state.quests = payload;
    })
    .addCase(setCurrentQuest, (state, { payload }) => {
      state.currentQuest = payload;
    })
    .addCase(setCurrentTheme, (state, { payload }) => {
      state.currentTheme = payload;
    });
});
