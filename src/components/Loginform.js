"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      }
  
      if (!formData.password.trim()) {
        newErrors.password = "Password is required"
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
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

          <div className="flex flex-col gap-2">
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

          <div className="pt-0 mt-3">
            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
