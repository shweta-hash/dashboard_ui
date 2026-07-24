import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden flex">
        <div className="w-1/2 flex items-center justify-center p-10">
          <img src="/register.png" alt="Register Illustration" className="w-full h-auto object-contain rounded-2xl"/>
        </div>
        <div className=" w-1/2 flex flex-col justify-center px-16 py-12">
            <h1 className="text-4xl font-bold text-slate-800">
                Create your account
            </h1>
            <p className="mt-4 text-gray-500 leading-7">
                Register to access your dashboard and start managing your account.
            </p>
            <div className="mt-3">
                <RegisterForm/>
            </div>

        </div>
      </div>
    </div>
  );
}
