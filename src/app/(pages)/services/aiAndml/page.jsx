import React from 'react'

const aiAndml = () => {
  return (
    <>
    <div className="w-screen lg:min-h-screen min-h-[60%]">
        <div className="lg:h-screen h-[400px] w-screen relative flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover w-full h-full"
          >
            {/* <source src="/assets/About/AboutBg.mp4" type="video/mp4" /> */}
          </video>
        </div>
    </div>
    </>
  )
}

export default aiAndml;