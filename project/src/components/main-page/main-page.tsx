import ManageInterface from '../manage-interface/manage-interface';
import BurgerInside from '../burger-inside/burger-inside';
import { memo } from 'react';
import AttentionMessage from '../attention-message/attention-message';

function MainPage():JSX.Element {

  return (
    <main className="container">
      <h1 className="tittle">Burger builder</h1>
      <div className="burger bread upper-bread"></div>
      <BurgerInside />
      <div className="burger bread lower-bread"></div>
      <AttentionMessage />
      <ManageInterface />
    </main>
  );
}

export default memo(MainPage);
