"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { handleLogin } from "@/lib/actions/auth-action";

/* ================= SCHEMA ================= */
export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginForm = z.infer<typeof loginSchema>;

export default function Page() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setError("");
    try {
      const res = await handleLogin(data);

      if (!res?.success) {
        throw new Error(res.message || "Login failed");
      }

      // ✅ redirect after MongoDB validation
      startTransition(() => {
        router.push("/dashboard");
      });
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[900px] bg-white rounded-xl shadow-lg grid grid-cols-2 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="bg-green-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Softbuzz</h1>
          <p className="text-green-100 text-lg">
            Your daily source for cricket updates, scores and news.
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-10">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Login
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Email */}
            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full border border-black p-3 rounded
                          text-black placeholder-black
                          focus:outline-none focus:border-green-600"
              />

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="w-full border border-black p-3 rounded
                          text-black placeholder-black
                          focus:outline-none focus:border-green-600"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || pending}
              className="w-full bg-green-600 hover:bg-green-700 transition text-white p-3 rounded font-semibold disabled:opacity-50"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm">
            <span
              className="text-green-600 cursor-pointer"
              onClick={() => router.push("/forgot-password")}
            >
              Forgot password?
            </span>

            <span
              className="text-green-600 cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
