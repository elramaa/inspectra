import Logo from "@/components/Logo";
import Link from "next/link";
import { FaBook, FaUser } from "react-icons/fa6";

export default function SideNav({ className }: { className: string }) {
  return (
    <aside
      className={`px-8 py-8 h-screen flex flex-col bg-neutral-400 ${className}`}
    >
      <Logo className="text-center mb-8" />
      <nav className="h-full">
        <ul className="space-y-8 *:flex *:items-center *:gap-4">
          <li>
            <FaBook className="size-6" />
            <Link href="/books">Books</Link>
          </li>
          <li>
            <FaUser className="size-6" />
            <Link href="/members">Members</Link>
          </li>
        </ul>
      </nav>
      <button type="button" className="text-right">
        Logout
      </button>
    </aside>
  );
}
