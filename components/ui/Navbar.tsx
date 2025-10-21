import Link from "next/link";
import {
  Activity,
  History,
  LayoutDashboard,
  LogOutIcon,
  Tickets,
  Users,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full md:w-56 bg-white flex flex-col md:p-1 ">
      <div className="bg-blue-400 text-white p-4 md:p-6 text-center rounded-sm ">
        <p className="text-lg md:text-xl font-bold">Catalyst</p>
      </div>

      <ul className="flex flex-row md:flex-col gap-2 p-2 md:gap-3 flex-1 md:mt-3">
        <li className="flex-1 md:flex-none">
          <Link
            href="/"
            className="flex h-12 items-center justify-center md:justify-start gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 transition-colors"
          >
            <LayoutDashboard size={18} />
            <span className="hidden md:inline">Dashboard</span>
          </Link>
        </li>

        <li className="flex-1 md:flex-none">
          <Link
            href="/tickets"
            className="flex h-12 items-center justify-center md:justify-start gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 transition-colors"
          >
            <Tickets size={18} />
            <span className="hidden md:inline">Tickets</span>
          </Link>
        </li>

        <li className="flex-1 md:flex-none">
          <Link
            href="/"
            className="flex h-12 items-center justify-center md:justify-start gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 transition-colors"
          >
            <Users size={18} />
            <span className="hidden md:inline">Students</span>
          </Link>
        </li>

        <li className="flex-1 md:flex-none">
          <Link
            href="/"
            className="flex h-12 items-center justify-center md:justify-start gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 transition-colors"
          >
            <Activity size={18} />
            <span className="hidden md:inline">Activities</span>
          </Link>
        </li>

        <li
          className="
              bg-gray-100 rounded-sm flex-1 my-2 hidden md:block 

                "
        ></li>

        <li className="flex-1 md:flex-none">
          <Link
            href="#"
            className="flex h-12 items-center justify-center md:justify-start gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 transition-colors"
          >
            <LogOutIcon size={18} />
            <span className="hidden md:inline">Sign Out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
