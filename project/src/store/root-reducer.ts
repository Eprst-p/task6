import {combineReducers} from '@reduxjs/toolkit';
import { burgerProcess } from './burger-process';

export const rootReducer = combineReducers({
  'burgerProcess': burgerProcess.reducer,
});
