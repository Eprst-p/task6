import { memo } from 'react';
import { ingridients } from '../../settings/ingridients';
import ManageElement from './manage-element';
import TotalPrice from './total-price';


function ManageInterface():JSX.Element {

  return (
    <section className="manage-interface">
      <TotalPrice />
      <section className = "buttons">
        {
          ingridients.map((ingredient) => <ManageElement ingredient={ingredient} key={ingredient.name}/>)
        }
      </section>
    </section>
  );
}

export default memo(ManageInterface) ;
