import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

export default function SignupPage() {
  return (
    <div className="flex items-center my-8 justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" ,phone:""}}
          validate={values => {
            const errors = {};
            if (!values.name) errors.name = "Required";
            if (!values.email) errors.email = "Required";
            if (!values.password) errors.password = "Required";
            if (!values.phone) errors.phone = "Required";
            return errors;
          }}
          onSubmit={async (values, { setSubmitting, setStatus }) => {
            try {
              await axios.post("http://localhost:3000/api/v1/auth/signup", values,
                 { withCredentials: true });
              setStatus({ success: "Signup successful!" });
              // Redirect or update context here
            } catch (err) {
              setStatus({ error: err.response?.data?.message || "Signup failed" });
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, status }) => (
            <Form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <Field type="text" name="name" className="w-full px-3 py-2 border rounded" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <Field type="email" name="email" className="w-full px-3 py-2 border rounded" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone</label>
                <Field type="phone" name="phone" 
                className="w-full px-3 py-2 border rounded" />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <Field type="password" name="password" className="w-full px-3 py-2 border rounded" />
                
                {<ErrorMessage name="password" component="div" className="text-red-500 text-sm" /> &&
                 <span className="text-gray-500 text-xs">like: Admin@123</span>
                 }
             
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
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