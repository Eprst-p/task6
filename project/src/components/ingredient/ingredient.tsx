type IngredientType = {
  ingredient: string;
}

function Ingredient({ingredient}: IngredientType):JSX.Element {
  return (
    <div className={`${ingredient}`}>{ingredient}</div>
  );
}

export default Ingredient;
