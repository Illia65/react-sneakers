import Card from "../components/Card";
import React from "react";
function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavourite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="wrapper-content">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кросовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg " alt="Search"></img>
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="removeBtn clear"
              src="/img/btn-remove.svg"
              alt="Clear"
            ></img>
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск.."
          ></input>
        </div>
      </div>
  

      <div className="cardWrapper">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          ) //делаем фильрацию. // title кидаем в нижней регистр что бы можно было сделать поиск с маленькой быквы
          .map(
            (
              item,
              index //пробегаемся по масиву и скавим уникальный ключ в виде index
            ) => (
              <Card
                key={index} // Використовуйте унікальний ідентифікатор як ключ
                onFavourite={(obj) => onAddToFavourite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                added ={cartItems.some(obj => Number(obj.id) === Number(item.id))} //приводим к одному типу
                
                {...item}
              />
            )
          )}
      </div>
    </div>
  );
}
export default Home;
