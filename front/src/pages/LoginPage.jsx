import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            const errors = {};
            if (!values.email) errors.email = "Required";
            if (!values.password) errors.password = "Required";
            return errors;
          }}
          onSubmit={async (values, { setSubmitting, setStatus }) => {
            try {
              const res = await axios.post(
                "http://localhost:3000/api/v1/auth/login",
                values,
                { withCredentials: true }
              );
              // If login is successful, save token and user
              login(res.data.user, res.data.token); // adjust if your backend returns user/token differently
              setStatus({ success: "Login successful!" });
              navigate("/");
            } catch (err) {
              setStatus({ error: err.response?.data?.message || "Login failed" });
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, status }) => (
            <Form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <Field type="email" name="email" className="w-full px-3 py-2 border rounded" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <Field type="password" name="password" className="w-full px-3 py-2 border rounded" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              {status?.error && <div className="text-red-500 text-center">{status.error}</div>}
              {status?.success && <div className="text-green-500 text-center">{status.success}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}