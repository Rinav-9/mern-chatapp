import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-[#0e0e0e]">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-[#171717]/90 rounded-2xl shadow-xl w-full max-w-6xl h-[calc(100vh-5rem)] backdrop-blur-md overflow-hidden">
          <div className="flex h-full rounded-2xl overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Chat Area */}
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
