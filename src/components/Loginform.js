import Link from "next/link";

export default function LoginForm() {
  return (
    <div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 px-4">
              Email Address
            </label>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border px-4 py-3 outline-none"
              />
            </form>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 px-4">
              Password
            </label>
            <form>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border px-4 py-3 outline-none"
              />
            </form>
          </div>

          <div className="pt-0 mt-3">
            <Link href="/dashboard">
              {" "}
              <button className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600">
                {" "}
                Login{" "}
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
