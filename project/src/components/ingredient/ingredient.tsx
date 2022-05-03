type IngredientType = {
  ingredient: string;
}

function Ingredient({ingredient}: IngredientType):JSX.Element {
  return (
    <div className={`burger ingredient ${ingredient.toLowerCase()}`}>{ingredient}</div>
  );
}

export default Ingredient;
