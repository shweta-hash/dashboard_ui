"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
   const router = useRouter();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Type your password again"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Your password does not match"
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Valid");
      router.push("/dashboard");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}  className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 px-4">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full rounded-lg border px-4 py-2.5 outline-none ${errors.fullName ? "border-red-500" : "" }`}
            />

            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700 px-4">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full rounded-lg border px-4 py-2.5 outline-none ${errors.email ? "border-red-500" : ""}`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm"> {errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700 px-4">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full rounded-lg border px-4 py-2.5 outline-none ${errors.password ? "border-red-500" : ""}`}
            />

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700 px-4">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-type Password"
              className={`w-full rounded-lg border px-4 py-2.5 outline-none ${errors.confirmPassword ? "border-red-400" : ""}`}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="pt-0 mt-1">
                <button className="w-full bg-purple-300 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-purple-500">
                Register
                </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link
              href="/login"
              className="text-purple-500 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
