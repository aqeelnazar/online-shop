import { Link } from "react-router-dom";

const Home = () => (
  <main className="page hero">
    <h1>Online Shop</h1>
    <p>Discover daily essentials, curated picks, and simple checkout.</p>
    <Link className="button" to="/shop">Shop now</Link>
  </main>
);

export default Home;
