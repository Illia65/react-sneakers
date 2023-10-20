import axios from "axios";
import React from "react";
import Header from "./components/Header";
import Rightsidebar from "./components/Rightsidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";

const AppContext = React.createContext({});
//  console.log(AppContext);

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get(
          "https://650f113054d18aabfe99cccb.mockapi.io/items"
        );
        const cartResponse = await axios.get(
          "https://650f113054d18aabfe99cccb.mockapi.io/cart"
        );
        const favoritesResponse = await axios.get(
          "https://650f113054d18aabfe99cccb.mockapi.io/favorites"
        );

        // Встановлюємо дані з відповідей Axios до відповідних станів
        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
      } catch (error) {
        // Обробка помилок, якщо є
      }
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://650f113054d18aabfe99cccb.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://650f113054d18aabfe99cccb.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://650f113054d18aabfe99cccb.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavourite = async (obj) => {
    console.log(obj);
    try {
      //try catch что бы отловить ошибку которая может произойти при вызове запроса
      if (favorites.find((obj) => obj.id === obj.id)) {
        axios.delete(
          `https://650f113054d18aabfe99cccb.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://650f113054d18aabfe99cccb.mockapi.io/favorites",
          obj
        ); //берем обьект который выдаст с  бекенд а не с основной страницы
        setFavorites((prev) => [...prev, data]); //если await не отрабатывает покажи нам это через алерт
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты ");
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <AppContext.Provider value={{ items, cartItems, favorites }}>
      <div className="wrapper">
        {cartOpened ? (
          <Rightsidebar
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        ) : null}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavourite={onAddToFavourite}
                onAddToCart={onAddToCart}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onAddToFavourite={onAddToFavourite}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
