import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (!selectedUser) return;
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser?._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!selectedUser) return null;

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto bg-[#0e0e0e]">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-[#0e0e0e]">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isOwn = message.senderId === authUser._id;
          const sender = isOwn ? authUser : selectedUser;

          return (
            <div
              key={message._id}
              ref={messageEndRef}
              className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
            >
              {/* Avatar */}
              {!isOwn && (
                <div className="mr-2 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-700">
                    <img
                      src={sender.profilePic || "/avatar.png"}
                      alt={sender.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-xs sm:max-w-md px-4 py-2 rounded-2xl flex flex-col
                  ${isOwn ? "bg-gradient-to-br from-stone-900 to-stone-700 text-white" : "bg-stone-800 text-stone-200"}
                  shadow-lg
                `}
              >
                <div className="flex justify-between items-center mb-1">
                  <time className="text-xs opacity-50">
                    {formatMessageTime(message.createdAt)}
                  </time>
                </div>

                {message.image && (
                  <img
                    src={message.image}
                    alt="Attachment"
                    className="rounded-md mb-2 max-w-full sm:max-w-[250px]"
                  />
                )}

                {message.text && <p className="break-words">{message.text}</p>}
              </div>

              {/* Avatar for own messages */}
              {isOwn && (
                <div className="ml-2 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-700">
                    <img
                      src={sender.profilePic || "/avatar.png"}
                      alt={sender.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
