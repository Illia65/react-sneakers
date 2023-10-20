import React from "react";
import Card from "../components/Card";
import AppContext from "../App";

function Favorites({ onAddToFavourite }) {
  const state = React.useContext(AppContext);
  console.log(state);

  return (
    <div className="wrapperMakr">
      <div className="titleMark">
        <h1>Мои закладки</h1>
      </div>
      <div className="content-Mark">
        {[].map(
          (
            item,
            index //пробегаемся по масиву и скавим уникальный ключ в виде index
          ) => (
            <Card
              key={index.id}
              favourited={true}
              onFavourite={onAddToFavourite}
              {...item} //конкретенация строк  title,price,imageUrl (возьми все от)
            />
          )
        )}
      </div>
    </div>
  );
}

export default Favorites;
