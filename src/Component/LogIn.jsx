import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocalLogin from "./SocalLogin";

const LogIn = () => {
  const [ShowPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mb-10">
        <div className="mx-auto flex mt-5 border-gray-600 border-2 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-2 text-center">
            <h1 className="my-3 text-4xl font-bold">Log in</h1>
            <p className="text-sm dark:text-gray-600">
              Log in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            className="space-y-12"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type={ShowPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute text-slate-400 mt-2 text-2xl -ml-8"
                  onClick={() => setShowPassword(!ShowPassword)}
                >
                  {ShowPassword ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <div>
                <button className="btn w-full bg-emerald-300">Log in</button>
              </div>
              {Error && <p className="text-red-600 text-center">{Error}</p>}
            </div>
          </form>

          <SocalLogin />
          <div className="space-y-2 mt-8">
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Do not have an account yet?
              <Link
                rel="noopener noreferrer"
                to="/register"
                className="hover:underline dark:text-default-600 text-sky-600 font-bold"
              >
                Register
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
