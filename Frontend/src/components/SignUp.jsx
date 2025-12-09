import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" }); 

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const history = useHistory();
  const selectedRole = watch("role_id");

  // ROLLERİ ÇEK
  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((res) => setRoles(res.data))
      .catch((err) => console.error(err));
  }, []);

  // SUBMIT FONKSİYONU
  const onSubmit = async (data) => {
    setLoading(true);
    setApiError(null);

    try {
      const roleId = Number(data.role_id);
      const { name, email, password, store } = data;

      let payload;

      if (roleId === 2 && store) {
        // STORE ROLÜ
        payload = {
          name,
          email,
          password,
          role_id: roleId,
          store: {
            name: store.name,
            phone: store.phone,
            tax_no: store.tax_no,
            bank_account: store.bank_account,
          },
        };
      } else {
        // CUSTOMER / ADMIN
        payload = {
          name,
          email,
          password,
          role_id: roleId,
        };
      }

      // GERÇEK API ÇAĞRISI
      await axiosInstance.post("/signup", payload);

      alert("You need to click link in email to activate your account!");

      if (history.length > 1) {
        history.goBack();
      } else {
        history.push("/");
      }
    } catch (err) {
      console.error(err);

      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Signup failed. Please check your information.";

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
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        {/* API ERROR MESAJI */}
        {apiError && (
          <div className="mb-2 p-2 rounded bg-red-100 text-red-700 text-sm">
            {apiError}
          </div>
        )}

        {/* NAME */}
        <div>
          <label>Name</label>
          <input
            className={`border p-2 rounded w-full ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label>Email</label>
          <input
            className={`border p-2 rounded w-full ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label>Password</label>
          <input
            type="password"
            className={`border p-2 rounded w-full ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message:
                  "Password must include upper, lower, number and special character (min 8)",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* PASSWORD CONFIRM */}
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            className={`border p-2 rounded w-full ${
              errors.passwordConfirm ? "border-red-500" : ""
            }`}
            {...register("passwordConfirm", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-sm">
              {errors.passwordConfirm.message}
            </p>
          )}
        </div>

        {/* ROLE SELECT */}
        <div>
          <label>Role</label>
          <select
            className="border p-2 rounded w-full"
            defaultValue={3}
            {...register("role_id", { required: true })}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* STORE ALANLARI (STORE seçilmişse) */}
        {Number(selectedRole) === 2 && (
          <div className="border-t pt-4 mt-2 flex flex-col gap-4">
            <h3 className="text-lg font-bold">Store Information</h3>

            {/* STORE NAME */}
            <div>
              <label>Store Name</label>
              <input
                className={`border p-2 rounded w-full ${
                  errors.store?.name ? "border-red-500" : ""
                }`}
                {...register("store.name", {
                  required: "Store name is required",
                  minLength: { value: 3, message: "At least 3 characters" },
                })}
              />
              {errors.store?.name && (
                <p className="text-red-500 text-sm">
                  {errors.store.name.message}
                </p>
              )}
            </div>

            {/* STORE PHONE */}
            <div>
              <label>Store Phone</label>
              <input
                className={`border p-2 rounded w-full ${
                  errors.store?.phone ? "border-red-500" : ""
                }`}
                {...register("store.phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^05\d{9}$/,
                    message: "Invalid Türkiye phone number",
                  },
                })}
              />
              {errors.store?.phone && (
                <p className="text-red-500 text-sm">
                  {errors.store.phone.message}
                </p>
              )}
            </div>

            {/* STORE TAX ID */}
            <div>
              <label>Tax No</label>
              <input
                className={`border p-2 rounded w-full ${
                  errors.store?.tax_no ? "border-red-500" : ""
                }`}
                {...register("store.tax_no", {
                  required: "Tax No is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Tax No should match TXXXXVXXXXXX",
                  },
                })}
              />
              {errors.store?.tax_no && (
                <p className="text-red-500 text-sm">
                  {errors.store.tax_no.message}
                </p>
              )}
            </div>

            {/* STORE IBAN */}
            <div>
              <label>Store IBAN</label>
              <input
                className={`border p-2 rounded w-full ${
                  errors.store?.bank_account ? "border-red-500" : ""
                }`}
                {...register("store.bank_account", {
                  required: "IBAN is required",
                  pattern: {
                    value: /^TR\d{24}$/,
                    message: "Invalid IBAN format",
                  },
                })}
              />
              {errors.store?.bank_account && (
                <p className="text-red-500 text-sm">
                  {errors.store.bank_account.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/* SUBMIT BUTTON + SPINNER */}
        <button
          type="submit"
          disabled={loading}
          className={`
            mt-4 py-2 rounded text-white transition flex items-center justify-center
            ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
          `}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
}
