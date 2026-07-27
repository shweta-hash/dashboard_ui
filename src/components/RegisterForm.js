import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-4 lg:gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm lg:text-base font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm lg:text-base outline-none focus:border-purple-500 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm lg:text-base font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm lg:text-base outline-none focus:border-purple-500 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm lg:text-base font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm lg:text-base outline-none focus:border-purple-500 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm lg:text-base font-medium text-slate-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm lg:text-base outline-none focus:border-purple-500 transition"
            />
          </div>

          <div className="mt-0 lg:mt-6">
            <Link href="/dashboard">
                <button className="w-full bg-purple-400 text-white lg:py-4 py-3 rounded-lg font-semibold transition duration-300 hover:bg-purple-600 text-sm lg:text-base shadow-md hover:shadow-lg">
                {" "}
                Register{" "}
                </button>
            </Link>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-500">
            Already have an account?
            <Link
              href="/login"
              className="ml-1 text-purple-500 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
