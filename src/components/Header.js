const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img
            src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
            alt="logo"
            className="header__logo__image"
          />
        </div>
        <div className="header__nav">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
