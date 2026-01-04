// "use client";

// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-[800px] grid grid-cols-2 rounded-xl overflow-hidden shadow-lg">

//         {/* LEFT SIDE */}
//         <div className="bg-green-600 text-white p-10 flex flex-col justify-center">
//           <h1 className="text-3xl font-bold mb-4">Softbuzz</h1>
//           <p className="text-lg opacity-90">
//             Your daily source for cricket updates, scores and news.
//           </p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="bg-[#ffffff] p-10 flex flex-col justify-center">
          
//           {/* Title */}
//           <h2 className="text-2xl font-semibold mb-6 text-center text-black py-2 rounded">
//             Login
//           </h2>

//           {/* Email */}
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 mb-4 bg-transparent text-black border border-gray-600 rounded 
//             focus:outline-none focus:border-green-600 focus:rounded-xl 
//             placeholder-gray-400 transition-all duration-200"
//           />

//           {/* Password */}
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 mb-4 bg-transparent text-black border border-gray-600 rounded 
//             focus:outline-none focus:border-green-600 focus:rounded-xl 
//             placeholder-gray-400 transition-all duration-200"
//           />

//           {/* Button */}
//           <button
//             onClick={() => router.push("/dashboard")}
//             className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
//           >
//             Login
//           </button>

//           {/* Links */}
//           <div className="flex justify-between mt-4 text-sm">
//             <a href="/forgot-password" className="text-green-500">
//               Forgot password?
//             </a>
//             <a href="/signup" className="text-green-500 font-medium">
//               Sign up
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    let isValid = true;

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (!email) {
      setEmailError("Please enter your email");
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("Please enter your password");
      isValid = false;
    }

    // Stop if validation fails
    if (!isValid) return;

    // Redirect
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[800px] grid grid-cols-2 rounded-xl overflow-hidden shadow-lg">

        {/* LEFT SIDE */}
        <div className="bg-green-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Softbuzz</h1>
          <p className="text-lg opacity-90">
            Your daily source for cricket updates, scores and news.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-10 flex flex-col justify-center">

          <h2 className="text-2xl font-semibold mb-6 text-center text-black">
            Login
          </h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-1 bg-transparent text-black border border-gray-600 rounded 
            focus:outline-none focus:border-green-600 focus:rounded-xl 
            placeholder-gray-400 transition-all duration-200"
          />

          {emailError && (
            <p className="text-red-500 text-sm mb-3">{emailError}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-1 bg-transparent text-black border border-gray-600 rounded 
            focus:outline-none focus:border-green-600 focus:rounded-xl 
            placeholder-gray-400 transition-all duration-200"
          />

          {passwordError && (
            <p className="text-red-500 text-sm mb-3">{passwordError}</p>
          )}

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>

          {/* Links */}
          <div className="flex justify-between mt-4 text-sm">
            <a href="/forgot-password" className="text-green-500">
              Forgot password?
            </a>
            <a href="/signup" className="text-green-500 font-medium">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
