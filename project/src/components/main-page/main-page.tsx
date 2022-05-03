import { useAppSelector } from '../../hooks/redux-hooks';
import { ingridients } from '../../settings/ingridients';
import { getCurrentIngredients, getTotalPrice } from '../../store/selectors';
import Ingredient from '../ingredient/ingredient';
import ManageElement from '../manage-element/manage-element';
import uniqid from 'uniqid';
import EmptyBurger from '../empty-burger/empty-burger';

function MainPage():JSX.Element {
  const currentIngredients = useAppSelector(getCurrentIngredients);
  const totalPrice = useAppSelector(getTotalPrice);

  return (
    <main className="container">
      <h1 className="tittle">Burger builder</h1>
      <div className="burger bread upper-bread"></div>
      <section className="burger-filling-place">
        {
          currentIngredients.length === 0
            ?
            <EmptyBurger />
            :
            currentIngredients.map((ingredient) => <Ingredient ingredient={ingredient} key={uniqid()}/>)
        }
      </section>
      <div className="burger bread lower-bread"></div>

      <section className="user-interface">
        <h2 className="total-price">{`Total price: ${totalPrice} rub`}</h2>
        <section className = "buttons">
          {
            ingridients.map((ingredient) => <ManageElement ingredient={ingredient} key={ingredient.name}/>)
          }
        </section>
      </section>
    </main>
  );
}

export default MainPage;
