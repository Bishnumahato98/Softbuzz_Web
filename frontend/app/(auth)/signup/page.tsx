export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[800px] bg-white rounded-xl shadow-lg grid grid-cols-2 overflow-hidden">

        <div className="bg-green-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Join Softbuzz</h1>
          <p className="text-lg opacity-90">
            Create your account and never miss a match.
          </p>
        </div>

        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-black py-2 rounded">
            Signup
          </h2>

          <input
            type="fullname"
            placeholder="FullName"
            className="w-full p-3 mb-4 bg-transparent text-black border border-gray-600 rounded 
            focus:outline-none focus:border-green-600 focus:rounded-xl 
            placeholder-gray-400 transition-all duration-200"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-transparent text-black border border-gray-600 rounded 
            focus:outline-none focus:border-green-600 focus:rounded-xl 
            placeholder-gray-400 transition-all duration-200"
          />

          <select className="w-full p-3 mb-4 bg-white border border-gray-600 rounded focus:outline-none focus:border-green-600 focus:rounded-xl text-gray-700 transition-all duration-200">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-transparent text-black border border-gray-600 rounded 
            focus:outline-none focus:border-green-600 focus:rounded-xl 
            placeholder-gray-400 transition-all duration-200"
          />

          <input
            type="confirmpassword"
            placeholder="Confirm-Password"
            className="w-full p-3 mb-4 bg-transparent text-black border border-gray-600 rounded 
            focus:outline-none focus:border-green-600 focus:rounded-xl 
            placeholder-gray-400 transition-all duration-200"
          />

          

          <button className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700">
            Create Account
          </button>

          <div className="text-1xl font-semibold mb-6 text-center text-black py-2 rounded">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 font-medium">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}