import React from 'react'

const aiMLSec1 = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        className="min-w-full min-h-full absolute object-cover"
        src={require('/public/assets/services/aiML/My.mp4')}
        type="video/mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>
    </div>
    <div className="video-content space-y-2 z-20 mx-auto lg:mx-0 lg:max-w-[75%]">
  <h1 className="text-HeroHeading font-extrabold">
    <span className="block text-gray-100">Discover the Potential of AI and Machine Learning for Your Business</span>
  </h1>
  <p className='block text-gray-300 mt-5 font-semibold'>We harness cutting-edge algorithms to optimize decision-making and unlock fresh opportunities. With a steadfast commitment to excellence, we serve as trusted guides in navigating the digital frontier.</p>
</div>

  </section>
  )
}

export default aiMLSec1