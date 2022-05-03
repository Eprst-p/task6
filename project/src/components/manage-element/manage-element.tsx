import { IngredientType } from '../../types/ingredient';

type ManageElementType = {
  ingredient: IngredientType;
}

function ManageElement({ingredient}: ManageElementType):JSX.Element {
  return (
    <section className="manage-section">
      <span className="manage-name">{ingredient.name}</span>
      <button className="button remove-button">Remove</button>
      <button className="button add-button">Add</button>
      <span className="manage-price">{`price:  ${ingredient.price} rub`}</span>
    </section>
  );
}

export default ManageElement;
