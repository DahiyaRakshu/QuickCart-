function Header() {
  return (
    <header className="header">
      <h1>QuickCart 🛒</h1>
    </header>
  );
}
function Header({ cartCount, onCartClick }) {
  return (
    <header>
      <h2>QuickCart</h2>

      <button onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </header>
  );
}


export default Header;