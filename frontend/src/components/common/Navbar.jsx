import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();

  return (
    <header className="navbar">
      <Link to="/" className="brand">Online Shop</Link>
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart ({itemCount})</NavLink>
        {user ? (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <button type="button" onClick={logout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
