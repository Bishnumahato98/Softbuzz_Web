export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border rounded mb-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded mb-3"
        />

        <button className="w-full bg-purple-600 text-white p-2 rounded">
          Reset Password
        </button>
      </div>
    </div>
  );
}
