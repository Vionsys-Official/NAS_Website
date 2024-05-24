import React from 'react'

const Solutions = () => {

    const solution = [
        {
            id: 1,
            title: "Contract Staffing",
            para1: "Short-Term Assignments: Ideal for addressing temporary spikes in workload or specific project needs.",
            para2: "Long-Term Contracts: Perfect for ongoing projects that require specialized skills over an extended period."
        }
    ]
  return (
    <section className="p-4 lg:p-8 bg-gray-100">
        <h2 className="mb-4 text-4xl font-bold leading-none text-center">Our IT Staffing Solutions</h2>
	<div className="mx-auto space-y-6">
        
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-white">
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                <ul>
                    <li className="my-6 dark:text-gray-600"></li>
                    <li className="my-6 dark:text-gray-600"></li>
                </ul>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>
  )
}

export default Solutions