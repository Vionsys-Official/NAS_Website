import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen dark:bg-slate-800 flex items-center justify-center">
      <div className="w-36 h-36 border-8 border-t-[#00a0d8] border-b-transparent border-l-transparent border-r-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;