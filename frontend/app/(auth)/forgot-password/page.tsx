export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[800px] bg-white rounded-xl shadow-lg grid grid-cols-2 overflow-hidden">

        <div className="bg-green-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
          <p className="text-lg opacity-90">
            Enter your email to receive reset instructions.
          </p>
        </div>

        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-black py-2 rounded">
            Forgot Password
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-transparent text-black border border-gray-600 rounded 
            focus:outline-none focus:border-green-600 focus:rounded-xl 
            placeholder-gray-400 transition-all duration-200"
          />

          <button className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition">
            Send Reset Link
          </button>

          <div className="mt-4 text-sm">
            <a href="/login" className="text-green-600 font-medium">
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}