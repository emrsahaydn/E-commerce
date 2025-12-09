import { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const history = useHistory();

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError(null);

    try {
      const res = await axiosInstance.post("/login", {
        email: data.email,
        password: data.password,
      });

      const { token, user } = res.data;

      // TOKEN KAYDET
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // ROLE GÖRE YÖNLENDİRME
      if (user.role_id === 1) {
        history.push("/admin");
      } else if (user.role_id === 2) {
        history.push("/store");
      } else {
        history.push("/");
      }

    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Login failed. Check your credentials.";

      setApiError(message);
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

        {/* API ERROR */}
        {apiError && (
          <div className="p-2 bg-red-100 text-red-700 rounded text-sm">
            {apiError}
          </div>
        )}

        {/* EMAIL */}
        <div>
          <label>Email</label>
          <input
            className={`border p-2 rounded w-full ${errors.email ? "border-red-500" : ""}`}
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* PASSWORD */}
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

        {/* SUBMIT BUTTON */}
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
