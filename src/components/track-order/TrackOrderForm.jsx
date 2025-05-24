import React from 'react'

const TrackOrderForm = () => {
  return (
     <div className="flex  justify-center pb-28 px-4 mt-16 font-sans">
      <div className="bg-[#F8F9FA] rounded-xl shadow-sm p-12 w-full max-w-[636px]  ">
        {/* Title */}
        <h2 className="md:text-[28px] text-[23px] font-semibold text-[#848484] mb-1">
          Order Tracking Service
        </h2>
        <p className='text-[16px] font-semibold text-[#848484] mb-16' >
           Enter Order Tracking Number 
        </p>

        {/* Field */}
        <label className="block text-base font-medium text-gray-700 mb-1">
          Tracking ID <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Tracking ID"
          className="w-full px-4 py-2 mb-4 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-400"
        />

        {/* Buttons */}
        {/* Sign In With Password */}
        <button className="relative w-full text-white text-base font-bold py-1 mb-6 rounded-md overflow-hidden group bg-[#8CC63F]">
          <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">Track My Order</span>
        </button>

     

      </div>
    </div>
  )
}

export default TrackOrderForm
