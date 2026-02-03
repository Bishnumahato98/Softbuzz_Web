// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Link from "next/link";
// import { useState, useTransition } from "react";
// import { useRouter } from "next/navigation";
// import { LoginData, loginSchema } from "../schema";
// import { handleLogin } from "@/lib/actions/auth-action";

// export default function LoginForm() {
//     const router = useRouter();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm<LoginData>({
//         resolver: zodResolver(loginSchema),
//         mode: "onSubmit",
//     });
//     const [pending, setTransition] = useTransition()
//     const [error, setError] = useState<string | null>(null);

//     const submit = async (values: LoginData) => {
//         setError(null);
//         setTransition(async () => {
//             try {
//                 const response = await handleLogin(values);
//                 if (!response.success) {
//                     throw new Error(response.message);
//                 }
//                 if (response.success) {
//                     if (response.data?.role == 'admin') {
//                         return router.replace("/admin");
//                     }
//                     if (response.data?.role === 'user') {
//                         return router.replace("/user/dashboard");
//                     }
//                     return router.replace("/");
//                 } else {
//                     setError('Login failed');
//                 }
//             } catch (err: Error | any) {
//                 setError(err.message || 'Login failed');
//             }
//         })
//     };

//     return (
//         <form onSubmit={handleSubmit(submit)} className="space-y-4">
//             {error && (
//                 <p className="text-sm text-red-600">{error}</p>
//             )}
//             <div className="space-y-1">
//                 <label className="text-sm font-medium" htmlFor="email">Email</label>
//                 <input
//                     id="email"
//                     type="email"
//                     autoComplete="email"
//                     className="h-10 w-full rounded-md border border-black/10 dark:border-white/15 bg-background px-3 text-sm outline-none focus:border-foreground/40"
//                     {...register("email")}
//                     placeholder="you@example.com"
//                 />
//                 {errors.email?.message && (
//                     <p className="text-xs text-red-600">{errors.email.message}</p>
//                 )}
//             </div>

//             <div className="space-y-1">
//                 <label className="text-sm font-medium" htmlFor="password">Password</label>
//                 <input
//                     id="password"
//                     type="password"
//                     autoComplete="current-password"
//                     className="h-10 w-full rounded-md border border-black/10 dark:border-white/15 bg-background px-3 text-sm outline-none focus:border-foreground/40"
//                     {...register("password")}
//                     placeholder="••••••"
//                 />
//                 {errors.password?.message && (
//                     <p className="text-xs text-red-600">{errors.password.message}</p>
//                 )}
//             </div>

//             <button
//                 type="submit"
//                 disabled={isSubmitting || pending}
//                 className="h-10 w-full rounded-md bg-foreground text-background text-sm font-semibold hover:opacity-90 disabled:opacity-60"
//             >
//                 {isSubmitting || pending ? "Logging in..." : "Log in"}
//             </button>

//             <div className="mt-1 text-center text-sm">
//                 Don't have an account? <Link href="/register" className="font-semibold hover:underline">Sign up</Link>
//             </div>
//         </form>
//     );
// }



"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { LoginData, loginSchema } from "../schema";
import { handleLogin } from "@/lib/actions/auth-action";

export default function LoginForm() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    const [pending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);

    const submit = async (values: LoginData) => {
        setError(null);
        startTransition(async () => {
            try {
                const response = await handleLogin(values);
                if (!response.success) throw new Error(response.message);

                if (response.data?.role === "admin") {
                    router.replace("/admin");
                } else if (response.data?.role === "user") {
                    router.replace("/user/dashboard");
                } else {
                    router.replace("/");
                }
            } catch (err: any) {
                setError(err.message || "Login failed");
            }
        });
    };

    return (
        <div className="w-[600px] h-[600px] grid grid-cols-2 rounded-2xl overflow-hidden shadow-2xl bg-white">

            {/* LEFT SIDE – SoftBuzz */}
            <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4">
                    SoftBuzz 🏏
                </h1>

                <p className="text-sm leading-relaxed mb-6">
                    Your one-stop cricket platform for live scores,
                    real-time commentary, match stats, and breaking news —
                    inspired by Crickbuzz.
                </p>

                <ul className="space-y-3 text-sm">
                    <li>🔥 Live match updates</li>
                    <li>📊 Player & team analytics</li>
                    <li>📰 Latest cricket headlines</li>
                    <li>🌍 Global cricket coverage</li>
                </ul>
            </div>

            {/* RIGHT SIDE – Login */}
            <div className="p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-black mb-1">
                    Login
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                    Welcome back to SoftBuzz
                </p>

                <form onSubmit={handleSubmit(submit)} className="space-y-4">
                    {error && (
                        <p className="text-sm text-red-600">{error}</p>
                    )}

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-black">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="you@example.com"
                            className="h-10 w-full rounded-md border border-gray-300
                                       px-3 text-sm text-black
                                       placeholder:text-gray-400
                                       outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email?.message && (
                            <p className="text-xs text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-black">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder="••••••"
                            className="h-10 w-full rounded-md border border-gray-300
                                       px-3 text-sm text-black
                                       placeholder:text-gray-400
                                       outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password?.message && (
                            <p className="text-xs text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting || pending}
                        className="h-10 w-full rounded-md bg-blue-600 text-white
                                   text-sm font-semibold hover:bg-blue-700
                                   disabled:opacity-60"
                    >
                        {isSubmitting || pending ? "Logging in..." : "Log in"}
                    </button>

                    <div className="text-center text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
