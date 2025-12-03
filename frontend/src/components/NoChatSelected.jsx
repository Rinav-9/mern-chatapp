const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-3">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-32 h-32 rounded-2xl flex items-center
             justify-center animate-bounce"
            >
              <img src="/shield.svg" alt="" className='h-20' />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
