import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from 'utils/const';
import { setCurrentQuest, setQuests } from './actions';
import { InitialStateProp } from './reducer';
import { OrderProp } from '../types/order-type';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, InitialStateProp, AxiosInstance, Action>;

export const getQuestsFromServer = () : ThunkActionResult => {
  return async (dispatch, _getState, api) => {
    const response = await api.get(`${APIRoute.Quests}`);
    dispatch(setQuests(response.data));
  }
}

export const getQuestById = (id : number) : ThunkActionResult => {
  return async (dispatch, _getState, api) => {
    const response = await api.get(`${APIRoute.Quests}/${id}`);
    dispatch(setCurrentQuest(response.data));
  }
}

export const sendOrder = (data : OrderProp) : ThunkActionResult => {
  return async (_dispatch, _getState, api) => {
    await api.post(`${APIRoute.Orders}`, data);
  }
}
