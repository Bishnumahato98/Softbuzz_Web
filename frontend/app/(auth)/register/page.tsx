"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { handleRegister } from "../../../lib/actions/auth-action";

/* ================== SCHEMA ================== */
export const registerSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    username: z.string().min(3, { message: "Username must be at least 3 characters" }),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(6, { message: "Confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterForm = z.infer<typeof registerSchema>;

/* ================== PAGE ================== */
export default function Page() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setError("");
    try {
      const res = await handleRegister(data);
      if (!res?.success) {
        throw new Error(res?.message || "Registration failed");
      }
      startTransition(() => router.push("/login"));
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-black text-white p-8 rounded-xl shadow-lg border border-gray-700">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h1>

        {error && (
          <div className="mb-4 text-sm text-red-500 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Username */}
          <div>
            <input
              {...register("username")}
              placeholder="Username"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* First Name */}
          <div>
            <input
              {...register("firstName")}
              placeholder="First Name"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || pending}
            className="w-full bg-green-600 hover:bg-green-700 transition p-2 rounded font-semibold disabled:opacity-50"
          >
            {isSubmitting ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
