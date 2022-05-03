import { useAppDispatch } from '../../hooks/redux-hooks';
import { addIngredient, removeIngredient } from '../../store/burger-process';
import { IngredientType } from '../../types/ingredient';

type ManageElementType = {
  ingredient: IngredientType;
}

function ManageElement({ingredient}: ManageElementType):JSX.Element {
  const dispatch = useAppDispatch();

  const handleAddButtonClick = () => {
    dispatch(addIngredient(ingredient));
  };

  const handleRemoveButtonClick = () => {
    dispatch(removeIngredient(ingredient));
  };

  return (
    <section className="manage-section">
      <span className="manage-name">{ingredient.name}</span>
      <button className="button remove-button" onClick={handleRemoveButtonClick}>Remove</button>
      <button className="button add-button" onClick={handleAddButtonClick}>Add</button>
      <span className="manage-price">{ingredient.price}</span>
      <span className="currency">rub</span>
    </section>
  );
}

export default ManageElement;
