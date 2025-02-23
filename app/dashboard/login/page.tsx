import Logo from "@/components/Logo";
import { Metadata } from "next";
import { login } from "./actions";

export const metadata: Metadata = {
  title: "Dashboard Login",
  description: "Login to the Inspectra dashboard",
};

export default function DashboardLogin() {
  return (
    <main className="w-screen h-screen grid place-items-center">
      <form className="flex flex-col gap-4 items-center" action={login}>
        <Logo className="text-center" />
        <h2 className="text-4xl font-extrabold mb-4">Dashboard Login</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="px-4 py-2 border-b-2 border-black focus:bg-neutral-200 focus:placeholder:text-neutral-500 transition-all duration-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="px-4 py-2 border-b-2 border-black focus:bg-neutral-200 focus:placeholder:text-neutral-500 transition-all duration-200"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 border-2 border-black rounded-full"
        >
          Login
        </button>
      </form>
    </main>
  );
}
