import ManageInterface from '../manage-interface/manage-interface';
import BurgerInside from '../burger-inside/burger-inside';
import { memo } from 'react';

function MainPage():JSX.Element {

  return (
    <main className="container">
      <h1 className="tittle">Burger builder</h1>
      <div className="burger bread upper-bread"></div>
      <BurgerInside />
      <div className="burger bread lower-bread"></div>
      <ManageInterface />
    </main>
  );
}

export default memo(MainPage);
