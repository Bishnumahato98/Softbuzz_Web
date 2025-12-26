export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-3"
        />

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

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Create Account
        </button>

        <div className="text-sm text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
