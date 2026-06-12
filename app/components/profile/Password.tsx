'use client';

export default function Password() {
  return (
    <div>
      <h2 className="font-semibold text-[22px] leading-[100%] font-[Poppins] mb-2">Password</h2>
      <p className="font-normal text-[14px] leading-[100%] font-[Poppins] text-gray-500 mb-8">
        Enter your password. It should be long and strong.
      </p>

      <div className="mt-8 border-t border-gray-300">
        {/* Current Password */}

        <div className="flex flex-col lg:flex-row lg:items-center py-6 border-b border-gray-300 gap-4">
          <label className="lg:w-1/3 font-normal text-[14px] leading-[100%] font-[Poppins] text-gray-700 ">
            Current Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="flex-1 h-12 px-4 rounded-full border border-gray-300 outline-none focus:border-blue-500"
          />
        </div>

        {/* New Password */}
        <div className="flex flex-col lg:flex-row py-6 border-b border-gray-300 gap-4">
          <label className="lg:w-1/3 font-normal text-[14px] leading-[100%] font-[Poppins] text-gray-700 ">
            New Password
          </label>

          <div className="flex-1">
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-12 px-4 rounded-full border border-gray-300 outline-none focus:border-blue-500"
            />

            <p className="text-sm text-gray-500 mt-2">
              Choose a new password. It should be strong and secure
            </p>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col lg:flex-row lg:items-center py-6 border-b border-gray-300 gap-4">
          <label className="lg:w-1/3 text-gray-700">
            Confirm New Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="flex-1 h-12 px-4 rounded-full border border-gray-300 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-12">
        <button className="border px-6 py-2 rounded-full cursor-pointer">
          Cancel
        </button>

        <button className="bg-[#0097FE] text-white px-6 py-2 rounded-full cursor-pointer">
          Update Information
        </button>
      </div>
    </div>
  );
}