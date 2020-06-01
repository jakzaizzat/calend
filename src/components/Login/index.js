import React from "react";
import Input from "../shared/Input";
import BaseButton from "../shared/BaseButton";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="#" method="POST">
            <Input id="email" label="Email address" type="email" />
            <Input id="password" label="Password" type="password" />

            <div className="mt-6">
              <BaseButton>Sign in</BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;