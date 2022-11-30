import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context.js";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

      {loggedIn && (
        <>
          <button onClick={logout}>Logout</button>
          {/*<h3>Hey there {user.email}</h3>*/}

          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <Link to="/editprofile">
            <button>Edit Profile</button>
          </Link>
        </>
      )}
      {!loggedIn && (
        <>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;

