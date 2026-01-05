
// "use client"

// import { useState } from 'react';

// export default function SignupPage() {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     email: '',
//     gender: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errors, setErrors] = useState<{[key: string]: string}>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: {[key: string]: string} = {};

//     if (!formData.fullname.trim()) {
//       newErrors.fullname = 'Full name is required';
//     } else if (formData.fullname.trim().length < 2) {
//       newErrors.fullname = 'Full name must be at least 2 characters';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.gender) {
//       newErrors.gender = 'Please select a gender';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     return newErrors;
//   };

//   const handleSubmit = () => {
//     const newErrors = validateForm();
    
//     if (Object.keys(newErrors).length === 0) {
//       setIsSubmitting(true);
      
//       setTimeout(() => {
//         console.log('Form submitted:', formData);
//         alert('Account created successfully! Redirecting to login...');
//         window.location.href = '/login';
//       }, 1000);
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-[800px] bg-white rounded-xl shadow-lg grid grid-cols-2 overflow-hidden">
//         <div className="bg-green-600 text-white p-10 flex flex-col justify-center">
//           <h1 className="text-3xl font-bold mb-4">Join Softbuzz</h1>
//           <p className="text-lg opacity-90">
//             Create your account and never miss a match.
//           </p>
//         </div>

//         <div className="p-10">
//           <h2 className="text-2xl font-semibold mb-6 text-center text-black py-2 rounded">
//             Signup
//           </h2>

//           <div className="mb-4">
//             <input
//               type="text"
//               name="fullname"
//               placeholder="Full Name"
//               value={formData.fullname}
//               onChange={handleChange}
//               className={`w-full p-3 bg-transparent text-black border ${
//                 errors.fullname ? 'border-red-500' : 'border-gray-600'
//               } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
//             />
//             {errors.fullname && (
//               <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full p-3 bg-transparent text-black border ${
//                 errors.email ? 'border-red-500' : 'border-gray-600'
//               } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className={`w-full p-3 bg-white border ${
//                 errors.gender ? 'border-red-500' : 'border-gray-600'
//               } rounded focus:outline-none focus:border-green-600 focus:rounded-xl text-gray-700 transition-all duration-200`}
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//             {errors.gender && (
//               <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full p-3 pr-10 bg-transparent text-black border ${
//                   errors.password ? 'border-red-500' : 'border-gray-600'
//                 } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
//               >
//                 {showPassword ? (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
//                   </svg>
//                 ) : (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//             )}
//           </div>

//           <div className="mb-6">
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className={`w-full p-3 pr-10 bg-transparent text-black border ${
//                   errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
//                 } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
//               >
//                 {showConfirmPassword ? (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
//                   </svg>
//                 ) : (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
//             )}
//           </div>

//           <button
//             onClick={handleSubmit}
//             disabled={isSubmitting}
//             className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
//           >
//             {isSubmitting ? 'Creating Account...' : 'Create Account'}
//           </button>

//           <div className="text-1xl font-semibold mb-6 text-center text-black py-2 rounded">
//             Already have an account?{" "}
//             <a href="/login" className="text-green-600 font-medium hover:underline">
//               Login
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









"use client"

import { useState } from 'react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Full name is required';
    } else if (formData.fullname.trim().length < 2) {
      newErrors.fullname = 'Full name must be at least 2 characters';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select a gender';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        console.log('Form submitted:', formData);
        alert('Account created successfully! Redirecting to login...');
        window.location.href = '/login';
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

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

          <div className="mb-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className={`w-full p-3 bg-transparent text-black border ${
                errors.fullname ? 'border-red-500' : 'border-gray-600'
              } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full p-3 bg-transparent text-black border ${
                errors.username ? 'border-red-500' : 'border-gray-600'
              } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 bg-transparent text-black border ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full p-3 bg-white border ${
                errors.gender ? 'border-red-500' : 'border-gray-600'
              } rounded focus:outline-none focus:border-green-600 focus:rounded-xl text-gray-700 transition-all duration-200`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 pr-10 bg-transparent text-black border ${
                  errors.password ? 'border-red-500' : 'border-gray-600'
                } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-6">
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 pr-10 bg-transparent text-black border ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
                } rounded focus:outline-none focus:border-green-600 focus:rounded-xl placeholder-gray-400 transition-all duration-200`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>

          <div className="text-1xl font-semibold mb-6 text-center text-black py-2 rounded">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 font-medium hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}