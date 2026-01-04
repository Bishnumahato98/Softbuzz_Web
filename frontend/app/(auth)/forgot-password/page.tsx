// export default function ForgotPasswordPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-[800px] bg-white rounded-xl shadow-lg grid grid-cols-2 overflow-hidden">

//         <div className="bg-green-600 text-white p-10 flex flex-col justify-center">
//           <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
//           <p className="text-lg opacity-90">
//             Enter your email to receive reset instructions.
//           </p>
//         </div>

//         <div className="p-10">
//           <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//             Forgot Password
//           </h2>

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 mb-4 bg-transparent text-black border border-gray-600 rounded 
//             focus:outline-none focus:border-green-600 focus:rounded-xl 
//             placeholder-gray-400 transition-all duration-200"
//           />

//           <button className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition">
//             Send Reset Link
//           </button>

//           <div className="mt-4 text-sm">
//             <a href="/login" className="text-green-600 font-medium">
//               Back to Login
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setError('Email is required');
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateEmail()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Reset link sent to:', email);
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
      }, 1000);
    }
  };

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
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Forgot Password
          </h2>

          {isSuccess ? (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              <p className="font-semibold">Success!</p>
              <p className="text-sm">Reset link has been sent to your email. Redirecting to login...</p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-transparent text-black border ${
                    error ? 'border-red-500' : 'border-gray-600'
                  } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
                />
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
              >
                {isSubmitting ? 'Sending...' : 'Send Reset Link'}
              </button>
            </>
          )}

          <div className="mt-4 text-sm">
            <a href="/login" className="text-green-600 font-medium hover:underline">
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}