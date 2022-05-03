import {createSlice} from '@reduxjs/toolkit';
import { BurgerProcess } from '../types/state';


const initialState: BurgerProcess = {
  currentIngredients: [],
  totalPrice: 15,
};

export const burgerProcess = createSlice({
  name: 'burgerProcess',
  initialState,
  reducers: {
    addIngredient: (state, {payload}) => {
      state.currentIngredients.push(payload.name);
      state.totalPrice += payload.price;
    },
    removeIngredient: (state, {payload}) => {
      const indexOfRemoved = state.currentIngredients.findIndex((value) => value === payload.name);
      state.currentIngredients = state.currentIngredients.splice(indexOfRemoved, 1);
      state.totalPrice -= payload.price;
    },
  },
});

export const {addIngredient, removeIngredient} = burgerProcess.actions;
