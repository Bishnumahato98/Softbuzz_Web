export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>

        <div className="text-sm text-center mt-3">
          <a href="/forgot-password" className="text-blue-500">
            Forgot Password?
          </a>
        </div>

        <div className="text-sm text-center mt-2">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
