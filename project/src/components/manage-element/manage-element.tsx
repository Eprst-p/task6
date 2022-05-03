import {Price} from '../../settings/price';

type ManageElementType = {
  ingredient: string;
}

function ManageElement({ingredient}: ManageElementType):JSX.Element {
  return (
    <section className="manage-section">
      <span className="manage-name">{ingredient}</span>
      <button className="button remove-button">Remove</button>
      <button className="button add-button">Add</button>
      <span className="manage-price">{`  price:    ${Price[ingredient]}`}</span>
    </section>
  );
}

export default ManageElement;
