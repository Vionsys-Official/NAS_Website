import React from 'react'

const ChooseUs = () => {

    const choose = [
        {
            id: 1,
            title: "Access to a Talent",
            para: "We connect you with a vast network of skilled IT professionals, ensuring access to the right talent for your projects.",
        },
        {
            id: 2,
            title: "Flexibility",
            para: "Our IT staffing services offer flexible workforce scaling, crucial for navigating the dynamic nature of IT projects.",
        },
        {
            id: 3,
            title: "Cost Efficiency",
            para: "Our IT staffing solutions cut recruitment, training, and benefit costs, optimizing budget management for efficiency.",
        },
        {
            id: 4,
            title: "Speed",
            para: "Recruitment is sped up through pre-screening, cutting down hiring time and launching your projects faster.",
        },
    ]
  return (
    <section className="m-4 md:m-8 text-gray-800">
	<div className="mx-auto space-y-2 text-center">
		<h2 className="text-3xl font-bold">Why Choose Our IT Staffing Services?</h2>
		<p className="text-gray-400 dark:text-gray-600">Our IT staffing services provide efficient, flexible and cost-effective solutions for accessing top-tier IT talent, ensuring prompt fulfillment of project needs.</p>
	</div>
	<div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {choose.map((item) => (
            <div key={item.id} className="flex flex-col items-center p-6">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400 dark:text-violet-600">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-2xl font-semibold">{item.title}</h3>
			<div className="space-y-1 leading-tight text-justify">
				<p>{item.para}</p>
			</div>
		</div>
        ))}
	</div>
</section>
  )
}

export default ChooseUs