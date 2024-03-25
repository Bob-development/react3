import { Input } from "../Input/Input";

import './Header.css';

export function Header() {
  return (
    <header className="Header">
      <Input />

      <nav className="navigation">
        <a href="/products">Products</a>
        <a href="/category">Category</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
}

