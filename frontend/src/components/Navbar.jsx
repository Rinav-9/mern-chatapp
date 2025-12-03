import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full sm:w-2/3 md:w-1/2 z-40 backdrop-blur-lg bg-[#0e0e0e]/80">
      <div className="mx-4 mt-4 px-4 h-12 bg-[#171717] rounded-xl lg:rounded-2xl shadow-md flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-all"
        >
          <img src="/chat-bubbles.svg" alt="logo" className="h-5" />
          <h1 className="text-lg font-bold text-white max-sm:hidden">Vartalap</h1>
        </Link>

        {/* User Actions */}
        {authUser && (
          <div className="flex items-center gap-2">
            <Link
              to="/profile"
              className="flex items-center gap-1 px-3 py-1 rounded-xl hover:bg-stone-800 transition-colors"
            >
              <User className="w-5 h-5 text-stone-300" />
              <span className="hidden sm:inline text-stone-200">Profile</span>
            </Link>

            <button
              onClick={logout}
              className="flex items-center gap-1 px-3 py-1 rounded-xl hover:bg-stone-800 transition-colors"
            >
              <LogOut className="w-5 h-5 text-stone-300" />
              <span className="hidden sm:inline text-stone-200">Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
