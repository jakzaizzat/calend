import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../state/UserContext";
import toast from "toasted-notes";

const Navigation = () => {
  const { auth, setAuth } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem("token");
    history.push("/");
    setShowMenu(false);
    toast.notify("Successfully logout");
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/dashboard"
              className="flex-shrink-0 text-white font-black"
            >
              Calend
            </a>
          </div>
          <div className="ml-6 block">
            <div className="flex items-center">
              <div className="relative">
                <div>
                  <button
                    onClick={() => {
                      setShowMenu(!showMenu);
                    }}
                    className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  className={
                    "origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg " +
                    (showMenu ? "absolute" : "hidden")
                  }
                >
                  <div
                    className="py-1 rounded-md bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <button
                      onClick={handleLogout}
                      className="block px-4 w-full text-left py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
