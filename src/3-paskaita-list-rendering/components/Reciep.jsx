export const Reciep = ({ reciep }) => {
  const { ingredients, name } = reciep;

  const listIngredients = ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  //   console.log(listIngredients);

  return (
    <>
      <div>
        <h2>{name}</h2>
        <ul>
          <li>{listIngredients}</li>
        </ul>
      </div>
    </>
  );
};
