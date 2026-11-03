function Header({ children }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <span className="brand-logo">🛍️</span>
          <h2 className="brand-name">Trend Shop</h2>
        </div>
        {children}
      </div>
    </header>
  );
}


export default Header;