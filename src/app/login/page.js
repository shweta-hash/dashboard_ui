import LoginForm from "@/components/Loginform";

export default function Login() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl min-h-[600px] bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-10">
          <img src="/login.png" alt="Register Illustration" className="w-full h-auto max-w-md object-contain rounded-2xl"/>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-8 lg:px-16 lg:py-12">
            <h1 className="text-3xl lg:text-4xl text-center lg:text-left font-bold text-slate-800">
                Login to your account
            </h1>
            <p className="mt-4 text-gray-500 text-center lg:text-left leading-7">
                Login to access your dashboard and start managing your account.
            </p>
            <div className="mt-8 lg:mt-10">
                <LoginForm/>
            </div>

        </div>
      </div>
    </div>
  );
}
