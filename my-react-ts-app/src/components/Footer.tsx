export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__info">
          More ways to shop:
          <a href="#">Find an Apple Store</a>
          or
          <a href="#">other retailer</a>
          near you. Or call
          <a href="tel:18006927753">1-800-MY-APPLE</a>
          (1-800-692-7753).
        </p>
        <div className="footer__bottom">
          <p className="copyright">
            Copyright © 2025 Apple Inc. All rights reserved.
          </p>
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Terms of Use
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Sales and Refunds
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Legal
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Site Map
                </a>
              </li>
            </ul>
          </nav>
          <p className="country">United States</p>
        </div>
      </div>
    </footer>
  );
}
