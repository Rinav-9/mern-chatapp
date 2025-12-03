import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-stone-700 flex flex-col transition-all duration-200 bg-[#0e0e0e]">
      
      {/* Header */}
      <div className="border-b border-stone-700 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-stone-300" />
          <span className="font-medium hidden lg:block text-stone-200">Contacts</span>
        </div>

        {/* Online filter toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="accent-stone-500"
            />
            <span className="text-sm text-stone-300">Show online only</span>
          </label>
          <span className="text-xs text-stone-500">({onlineUsers.length - 1} online)</span>
        </div>
      </div>

      {/* Users List */}
      <div className="overflow-y-auto w-full py-3 flex-1">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-stone-800 transition-colors rounded-lg
              ${selectedUser?._id === user._id ? "bg-stone-700 ring-1 ring-stone-600" : ""}
            `}
          >
            {/* User Avatar */}
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="w-12 h-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-stone-900"
                />
              )}
            </div>

            {/* User info - only on large screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate text-stone-200">{user.fullName}</div>
              <div className="text-sm text-stone-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-stone-500 py-4">No online users</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
