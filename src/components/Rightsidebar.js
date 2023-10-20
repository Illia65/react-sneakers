function Rightsidebar({ onClose, items, onRemove = [] }) {
  //onClose ставим по умолчанию
  return (
    <div className="overlay">
      <div className="right-side-bar">
        <h2>
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Remove"
          ></img>
        </h2>

        {items.map((obj, index) => (
          <div key={obj.id} className="cartItem">
            <img
              className="cartImg"
              width={70}
              height={70}
              src={obj.imageUrl}
              alt="Sneakers"
            ></img>
            <div className="titleWrapper">
              <p className="titleIltem">{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <div>
              <img
                onClick={() => onRemove(obj.id)}
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              ></img>
            </div>
          </div>
        ))}

        <div className="wrapper-final-payment">
          <ul>
            <li className="final-payment">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="final-payment">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="green-btn">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow"></img>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rightsidebar;
