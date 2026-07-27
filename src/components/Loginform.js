import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-4 lg:gap-5">
        <div className="flex flex-col gap-4">
          
            <div className="flex flex-col gap-2">
                <label className="text-sm lg:text-base font-medium text-slate-700">
                    Email Address
                </label>
                <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm lg:text-base outline-none focus:border-blue-500 transition"/>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm lg:text-base font-medium text-slate-700">
                    Password
                </label>
                <input type="password" placeholder="Enter your password" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm lg:text-base outline-none focus:border-blue-500 transition"/>
            </div>

          <div className="pt-0 mt-6">
            <Link href="/dashboard"> <button className="w-full bg-blue-400 text-white lg:py-4 py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 text-sm lg:text-base shadow-md hover:shadow-lg"> Login </button></Link>
          </div>

        </div>
      </form>
    </div>
  );
}
