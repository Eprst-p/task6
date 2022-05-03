import { State } from '../types/state';

export const getCurrentIngredients = (state:State) => state.burgerProcess.currentIngredients;
export const getTotalPrice = (state:State) => state.burgerProcess.totalPrice;
