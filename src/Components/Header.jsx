import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="navbar bg-base-100 teko text-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="text-xl" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-xl" to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="text-xl" to="/orders">
                  Orders
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-xl" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="/orders">
                Orders
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <p className="mr-2">{user?.displayName}</p>
          {user?.uid ? (
            <Link onClick={handleLogOutUser} className="btn text-xl">
              Sign Out
            </Link>
          ) : (
            <Link to="/login" className="btn text-xl">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
