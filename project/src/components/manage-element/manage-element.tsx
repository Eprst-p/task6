import {Price} from '../../settings/price';

type ManageElementType = {
  ingredient: string;
}

function ManageElement({ingredient}: ManageElementType):JSX.Element {
  return (
    <section className="manage-section">
      <span className="manage-name">{ingredient}</span>
      <span className="manage-price">price: {Price[ingredient]}</span>
      <button className="remove-button">Remove</button>
      <button className="add-button">Add</button>
    </section>
  );
}

export default ManageElement;
