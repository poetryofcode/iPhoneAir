import logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import basket from "../assets/images/basket.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="logo" href="#">
            <img src={logo} alt="logo" />
          </a>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Store
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Mac
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  iPad
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  iPhone
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Watch
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Vision
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  AirPods
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  TV & Home
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Entertament
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Accessories
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </nav>
          <ul className="header__items">
            <li className="header__item">
              <a className="header__item-link" href="#">
                <img src={search} alt="search" />
              </a>
            </li>
            <li className="header__item">
              <a className="header__item-link" href="#">
                <img src={basket} alt="search" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
