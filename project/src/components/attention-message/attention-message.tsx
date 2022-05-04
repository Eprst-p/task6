import { useAppSelector } from '../../hooks/redux-hooks';
import { BurgerSize } from '../../settings/burger-size';
import { getCurrentIngredients} from '../../store/selectors';


function AttentionMessage():JSX.Element {
  const ingredientsAmount = useAppSelector(getCurrentIngredients).length;

  return (
    <div className="attention-message">
      {
        ingredientsAmount > BurgerSize.prettyBig
          ?
          <p>This burger is pretty big and hard to eat, are you sure?</p>
          :
          null
      }
    </div>
  );
}

export default AttentionMessage;
