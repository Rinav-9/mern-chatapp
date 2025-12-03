import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Shield, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <>
      <div className="flex items-center justify-center">
        <header
          className="bg-base-200 fixed w-1/2 max-lg:w-2/3 top-0 z-40 
    backdrop-blur-lg bg-base-100/80 max-md:w-full "
        >
          <div className="px-2.5 pl-4 h-12 mt-4 mx-4 bg-base-100 rounded-lg lg:rounded-2xl shadow-md">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
                  <img src="/shield.svg" alt="" className='h-5' />
                  <h1 className="text-lg font-bold max-sm:hidden ">Vartalap</h1>
                </Link>
              </div>

              <div className="flex items-center gap-2">

                {authUser && (
                  <>
                    <Link to={"/profile"} className={`btn btn-ghost btn-sm gap-1 rounded-xl`}>
                      <User className="size-5" />
                      <span className="hidden sm:inline">Profile</span>
                    </Link>

                    <button className="flex btn btn-ghost btn-sm rounded-xl gap-1 items-center" onClick={logout}>
                      <LogOut className="size-5" />
                      <span className="hidden sm:inline">Logout</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Navbar;
