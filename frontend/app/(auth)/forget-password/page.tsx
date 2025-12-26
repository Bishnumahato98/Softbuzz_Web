export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded mb-3"
        />

        <button className="w-full bg-orange-500 text-white p-2 rounded">
          Send Reset Link
        </button>

        <div className="text-sm text-center mt-3">
          <a href="/login" className="text-blue-500">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
