import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { createAPI } from 'utils/api';
import { AppRoute } from 'utils/const';
import { Redirect } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'store/reducer';
import { getQuestsFromServer } from 'store/api-actions';
import { Provider } from 'react-redux';

export const api = createAPI(() => <Redirect to={AppRoute.NotFound}/>)
export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
})

store.dispatch(getQuestsFromServer());

render(
  <StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
