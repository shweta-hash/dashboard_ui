import Link from "next/link";

export default function RegisterForm() {
  return (
    <div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 px-4">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border px-4 y-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 px-4">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border px-4 y-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 px-4">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border px-4 y-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 px-4">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-full rounded-lg border px-4 y-3 outline-none"
            />
          </div>

          <div className="pt-0 mt-6">
            <Link href="/dashboard">
                <button className="w-full bg-purple-400 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-purple-600">
                {" "}
                Register{" "}
                </button>
            </Link>
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
