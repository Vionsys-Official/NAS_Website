import React from 'react'

const loading = () => {
  return (
    <div>
      <div class="min-h-screen dark:bg-slate-800 gap-6 flex items-center justify-center">
        <div class="w-36 h-36 border-8 rounded-full border-[#00a0d8] animate-spin">
        </div>
      </div>
    </div>
  )
}

export default loading