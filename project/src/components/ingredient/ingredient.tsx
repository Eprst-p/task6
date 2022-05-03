type IngredientType = {
  ingredient: string;
}

function Ingredient({ingredient}: IngredientType):JSX.Element {
  return (
    <div className={`burger ingredient ${ingredient.toLowerCase()}`}></div>
  );
}

export default Ingredient;
