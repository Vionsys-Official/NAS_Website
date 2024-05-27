import React from 'react'

const Faq3 = ({ faq }) => {

    return (
        <div className='p-8'>
            <div className="text-center">
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                    Frequently Asked <span className="text-green-700">Questions</span>
                </h3>
            </div>
            <div className="accordion space-y-2 p-5">
                {faq.map((item) => (
                    <div key={item.id} className="card border border-gray-300 rounded-lg">
                        <input type="checkbox" id={`accordion-toggle-${item.id}`} className="hidden peer" />
                        <label
                            htmlFor={`accordion-toggle-${item.id}`}
                            className="flex justify-between items-center w-full text-left font-bold text-lg px-4 py-3 transition-all duration-300 text-black border-b border-gray-300 cursor-pointer peer-checked:border-primary peer-checked:text-primary"
                        >
                            {item.ques}
                            <span className="transform transition-transform duration-300 peer-checked:rotate-180">
                                ⯆
                            </span>
                        </label>
                        <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-96">
                            <div className="card-body p-4">
                                <p className="text-gray-600">{item.ans}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq3