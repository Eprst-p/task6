import { store } from '../store';

export type BurgerProcess = {
  currentIngredients: string[];
  totalPrice: number;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


