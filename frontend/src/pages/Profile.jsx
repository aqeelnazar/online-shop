import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <main className="page">
      <h1>Profile</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <Link to="/orders">View orders</Link>
    </main>
  );
};

export default Profile;
