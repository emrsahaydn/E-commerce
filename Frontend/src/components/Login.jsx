import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/thunkActions";
import { toast } from "react-toastify";


export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError(null);

    try {
      await dispatch(
        loginUser(
          { email: data.email, password: data.password },
          data.rememberMe || false
        )
      );

      if (history.length > 1) {
        history.goBack();
      } else {
        history.push("/");
      }

    } catch (err) {
      const msg = err.message || "Login failed";
      toast.error(msg);
      setApiError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center py-12 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white shadow-md p-6 rounded-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {apiError && (
          <div className="p-2 bg-red-100 text-red-700 rounded text-sm">
            {apiError}
          </div>
        )}

        <div>
          <label>Email</label>
          <input
            className={`border p-2 rounded w-full ${errors.email ? "border-red-500" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            className={`border p-2 rounded w-full ${errors.password ? "border-red-500" : ""}`}
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="flex items-center gap-2">
          <input
            id="rememberMe"
            type="checkbox"
            className="w-4 h-4"
            {...register("rememberMe")}
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`
            mt-4 py-2 rounded text-white flex items-center justify-center
            ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
          `}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}
