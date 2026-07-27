import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl min-h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-10">
          <img src="/register.png" alt="Register Illustration" className="w-full h-auto object-contain rounded-2xl"/>
        </div>
        <div className=" w-full lg:w-1/2 flex flex-col justify-center px-6 py-8 lg:px-16 lg:py-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 text-center lg:text-left">
                Create your account
            </h1>
            <p className="mt-4 text-gray-500 leading-7 text-center lg:text-left">
                Register to access your dashboard and start managing your account.
            </p>
            <div className="mt-8 lg:mt-10">
                <RegisterForm/>
            </div>

        </div>
      </div>
    </div>
  );
}
