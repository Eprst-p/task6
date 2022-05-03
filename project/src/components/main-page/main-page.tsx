import { ingridients } from '../../settings/ingridients';
import Ingredient from '../ingredient/ingredient';
import ManageElement from '../manage-element/manage-element';

function MainPage():JSX.Element {
  const tempPrice = 100;

  return (
    <main className="container">
      <h1 className="tittle">Burger builder</h1>
      <div className="upper-bread">bread</div>
      <section className="burger-filling-place">
        {
          ingridients.map((ingredient) => <Ingredient ingredient={ingredient} key={ingredient}/>)
        }
      </section>
      <div className="lower-bread">bread</div>

      <section className="user-interface">
        <h2 className="total-price">{`Total price: ${tempPrice}rub`}</h2>
        <section className = "buttons">
          {
            ingridients.map((ingredient) => <ManageElement ingredient={ingredient} key={ingredient}/>)
          }
        </section>
      </section>
    </main>
  );
}

export default MainPage;
