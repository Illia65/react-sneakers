import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png" alt="LogoType" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <div>
        <ul className="headerRight">
          <li onClick={props.onClickCart}>
            <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
            <span>1205 руб</span>
          </li>
          <li>
            <Link to="/favorites">
              <img width={18} height={18} src="/img/heart.svg" alt="Заклади" />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
