import 
export const ButtonHeader = () => {
  return (
    <a href="/cart.html" className="button-cart">
      <span>520 ₽</span>
      <div className="button-delimiter"></div>
      <img className="cart" alt="cart" src="/images/icons/cart-icon.svg"></img>
      <span>3</span>
    </a>
  );
};
