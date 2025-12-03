const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-8 sm:p-16 bg-gradient-to-br from-[#0e0e0e] via-[#171717] to-[#0f0f0f]">
      
      <div className="max-w-md text-center space-y-4 sm:space-y-6">
        
        {/* Icon Display */}
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center animate-bounce bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
            <img src="/chat-bubbles.svg" alt="Chat Icon" className="h-16 sm:h-20" />
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Vartalap
        </h2>
        <p className="text-stone-300 text-sm sm:text-base">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
