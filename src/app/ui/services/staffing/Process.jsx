import React from 'react'

const Process = () => {

    const process = [
        {
            id: 1,
            title: "Needs Assessment",
            description: "We begin by understanding your specific staffing needs, project requirements, and organizational goals."
        },
        {
            id: 2,
            title: "Talent Sourcing",
            description: "Utilizing our extensive network and advanced recruitment tools, we identify and attract the best candidates."
        },
        {
            id: 3,
            title: "Screening and Selection",
            description: "Candidates undergo rigorous screening, including technical assessments, background checks, and interviews."
        },
        {
            id: 4,
            title: "Onboarding and Support",
            description: "We facilitate a seamless onboarding process and provide ongoing support to ensure successful integration into your team."
        },
    ]

  return (
    <section className="bg-gray-100 text-gray-800">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400 before:dark:bg-violet-600">
					<h3 className="text-3xl mb-4 font-semibold">Our Process</h3>
					<span className="text-sm font-bold tracking-wider text-gray-600">We understand the importance of a streamlined process in delivering exceptional IT staffing solutions. From initial consultation to final placement, our process is designed to ensure efficiency, transparency, and client satisfaction every step of the way.</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700 before:dark:bg-gray-300">
                    {process.map((item) => (
                        <div key={item.id} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400 before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">{item.title}</h3>
						<p className="mt-3">{item.description}</p>
					</div>
                    ))}
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Process