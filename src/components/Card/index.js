import styles from "./Card.module.css";
import React, { useEffect } from "react";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavourite,
  onPlus,
  favourited = false,
  added = false
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavourite, setIsFavourite] = React.useState(favourited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  React.useEffect(() => {}, [isAdded]);

  const onClickFavourite = () => {
    onFavourite({ id, title, imageUrl, price });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.Card}>
      <div className={styles.favourite} onClick={onClickFavourite}>
        <img
          src={isFavourite ? "/img/heartlike.svg" : "/img/heartunlike.svg"}
          alt="Heart"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <p>{title}</p>
      <div className="cardBottom">
        <div className="wrapperPrice">
          <span>Цена:</span>
          <b>{price} </b>

          <img
            className={styles.plus}
            onClick={onClickPlus}
            width={20}
            height={20}
            src={isAdded ? "img/btn-checked.png" : "img/btn+.svg"}
            alt="Plus"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
