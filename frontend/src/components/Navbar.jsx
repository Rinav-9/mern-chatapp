import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <div className="flex items-center justify-center">
      <header
        className="fixed w-1/2 max-lg:w-2/3 top-0 z-40 backdrop-blur-lg bg-[#0e0e0e]/80 max-md:w-full"
      >
        <div className="px-2.5 pl-4 h-12 mt-4 mx-4 bg-[#171717] rounded-lg lg:rounded-2xl shadow-md flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
              <img src="/chat-bubbles.svg" alt="logo" className='h-5 invert' />
              <h1 className="text-lg font-bold text-white max-sm:hidden">Vartalap</h1>
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className="btn btn-ghost btn-sm gap-1 rounded-xl text-stone-200 hover:bg-stone-800"
                >
                  <User className="size-5 text-stone-200" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="flex btn btn-ghost btn-sm rounded-xl gap-1 items-center text-stone-200 hover:bg-stone-800"
                >
                  <LogOut className="size-5 text-stone-200" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
