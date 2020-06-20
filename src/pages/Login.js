import React, { useState, useContext } from "react";
import Input from "../components/shared/Input";
import BaseButton from "../components/shared/BaseButton";
import toast from "toasted-notes";
import * as authAPI from "../api/auth-api-mock";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setAuth } = useContext(UserContext);

  const [user, setUser] = useState({
    username: "admin",
    password: "admin",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    e.persist();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  let history = useHistory();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await authAPI.login(user);
      localStorage.setItem("token", response.token);
      toast.notify("Successfully login");
      setAuth(response);
      history.push("/dashboard");
    } catch {
      toast.notify("Your username/password is incorrect");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form>
            <Input
              id="username"
              label="Username"
              type="username"
              value={user.username}
              onChange={handleInputChange}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={user.password}
              onChange={handleInputChange}
            />

            <div className="mt-6">
              <BaseButton
                fullwidth
                onClick={handleSubmit}
                isLoading={isLoading}
              >
                Sign in
              </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
