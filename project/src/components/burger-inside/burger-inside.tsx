import { memo } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getCurrentIngredients } from '../../store/selectors';
import EmptyBurger from '../empty-burger/empty-burger';
import uniqid from 'uniqid';
import Ingredient from '../ingredient/ingredient';


function BurgerInside():JSX.Element {
  const currentIngredients = useAppSelector(getCurrentIngredients);

  return (
    <section className="burger-filling-place">
      {
        currentIngredients.length === 0
          ?
          <EmptyBurger />
          :
          currentIngredients.map((ingredient) => <Ingredient ingredient={ingredient} key={uniqid()}/>)
      }
    </section>
  );
}

export default memo(BurgerInside) ;
